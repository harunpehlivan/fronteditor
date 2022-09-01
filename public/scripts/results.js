
setTimeout(() => {
    let projectName = ""
    let indexDoc = 0
    let pathBool = false
    let projectNameArr = window.location.search.slice(1).split("project=")[1]
    
    if (projectNameArr == undefined) {
        let view = prompt("You provided no query, which project do you want to view: ")
        view = view.split(" ")
        let viewpath = ""
        view.forEach(function (element, index) {
            if (index == 0) {
                viewpath += element
            } else {
                viewpath += `+${element}`
            }
        })
        location.replace(`https://fronteditor.adityaananya007.repl.co/result?project=${viewpath}`)
    }
    else {
        projectNameArr = window.location.search.slice(1).split("project=")[1].split("+")
        projectName = ""
        projectNameArr.forEach(function (element, index) {
            if (index == 0) {
                projectName += element
            }
            else {
                projectName += ` ${element}`
            }
        })
        let doc = localStorage.getItem("doc")
        if (doc == undefined) {
            document.querySelector("body").innerHTML = `
                You do not have any previous projects, go create one!
            `
        }
        else {
            docobj = JSON.parse(doc)
        }
        docobj.forEach(function (element, index) {
            if (projectName == element.project) {
                indexDoc = index
                pathBool = true
            }
        })
        if (!pathBool) {
            let conf = confirm(`No Project found named as ${projectName}, Do you want to create it?`)
            if (conf == true) {
                document.querySelector("body").innerHTML = "No project found"
                location.replace(`https://fronteditor.adityaananya007.repl.co/edit?project=${window.location.search.slice(1).split("project=")[1]}`)
            }
            else {
                document.querySelector("body").innerHTML = `
                <div id="container">
                <div class="content">
                    <h2>404</h2>
                    <h4>Oops! Page Not Found</h4>
                    <p>The Page You are looking for, doesn't exist. You may have mistyped the address or the page may have been moved</p>
                    <a href="/home">Back to Home</a>
                </div>
                
            </div>
            <link rel="stylesheet" href="styles/404.css"/>
                `
            }
        }
        else {
            
            let target = docobj[indexDoc]
            let html = target.html
            let css = target.css
            let js = target.js 
            let head = target.head
            let jsprocessor = target.jsprocessor
            let angular = target.angular
            if (angular){
                angular = "ng-app"
            }
            else{
                angular=""
            }
            document.body.innerHTML = `<iframe class="fullif"></iframe>`
            let iframe = document.querySelector(".fullif")
            
            let code = `<html lang='en' ${angular}><head>${head}<script src="https://cdn.jsdelivr.net/npm/browser-scss@1.0.3/dist/browser-scss.min.js"></script><style type="text/scss">${css}</style></head><body>`+html+`<script type=${jsprocessor}>`+js+`</script></body></html>`
            iframe.setAttribute("srcdoc", code)
            // setTimeout(() => {
            //     document.querySelector("body").innerHTML = `${html}`


            //     let script = document.createElement("script")
            //     script.innerHTML = `${js}`
            //     document.querySelector("body").appendChild(script)
            // }, 200);


            
        }
    }


}, 200);