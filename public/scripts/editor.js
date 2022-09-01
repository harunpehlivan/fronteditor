let htmlcont = document.querySelector("#html")
let csscont = document.querySelector("#css")
let jscont = document.querySelector("#js")
let headcont = document.querySelector("#head")
let htmlbtn = document.querySelector(".htmlbtn")
let cssbtn = document.querySelector(".cssbtn")
let jsbtn = document.querySelector(".jsbtn")
let headbtn = document.querySelector(".headbtn")
let iframe = document.querySelector(".iframe")
let html = document.querySelector("#htmleditor")
let css = document.querySelector("#csseditor")
let js = document.querySelector("#jseditor")
let head = document.querySelector("#headeditor")
let codebtn = document.querySelector(".code")
let ifrabtn = document.querySelector(".ifra")
let textareas = document.querySelector(".textareas")
let file = document.querySelector(".file")
let codeopt = document.querySelector(".codeopt")
let fileopt = document.querySelector(".fileopt")
let iframeopt = document.querySelector(".iframeopt")
let download = document.querySelector(".downloadbtn") 
let indexDoc = 0;
let filefound = false
let projectNameArr = window.location.search.slice(1).split("project=")[1]
let projectName = ""
if (projectNameArr == undefined) {
    document.body.innerHTML = `
    <div class="form" > 
    <div class="mainInfo">
        <h1 class="white">Edit Your Projects</h1>
        <a href="/home">Back to home</a>
    </div>
    <form method="get" action="/edit" class="">
      <div class="intro white" >
        You Have Given No query, do you want to create a project or choose from your old projects?
      </div>
      <label for="createNewPro">Create a new project: </label><br>
      <input id="createNewPro" type="text" class="createNewPro" name="project" placeholder="Name of the project"/>
      <input type="submit" value="Create" class="createBtn bg-blue-gradient"/>
      <input style="display: none" name="createperm" value="true" type="text"/>
      <div class="chooseold">
        Or choose from old ones:
          <a href="/projects">Go to projects</a>
      </div>
    </form>
  </div>
    `
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
    projectName = projectName.split("&")[0]
    let doc = localStorage.getItem("doc")
    if (doc == undefined) {
        docobj = [{ project: projectName, html: "", css: "", js: "", head: "", jsprocessor: "text/javascript", angular: false }]
    }
    else {
        docobj = JSON.parse(doc)
    }
    
    docobj.forEach(function (element, index) {
        if (element.project == projectName) {
            
            indexDoc = index
            filefound = true
        }
    })
    if (!filefound) {
        let createperm = window.location.search.slice(1).split("&")[1]
        if (createperm == undefined) {
            document.body.innerHTML = `
    <div id="contain">
    <div class="content">
        <h2>404</h2>
        <h4>Oops! Page Not Found</h4>
        <p>The Page You are looking for, doesn't exist. You may have mistyped the address or the page may have been moved</p>
        <a href="/home">Back to Home</a>
    </div>
</div>
    `
        }
        else {
            doccode = { project: projectName, html: "", css: "", js: "", head: "", jsprocessor: "text/javascript", angular: false }
            docobj.unshift(doccode)
            
            indexDoc = 0
            localStorage.setItem("doc", JSON.stringify(docobj))
        }

    }
    document.querySelector(".resultlink").setAttribute("href", `/result?project=${window.location.search.slice(1).split("project=")[1].split("&")[0]}`)
    iframe.innerHTML = `<iframe src="https://fronteditor.adityaananya007.repl.co/result?project=${window.location.search.slice(1).split("project=")[1].split("&")[0]}" class="if" width="100%" height="100%"></iframe>`
    document.querySelector(".name").innerHTML = projectName.split(" ")[0]+"..."
    document.querySelector(".name").setAttribute("title", `${projectName}`)
    let target = docobj[indexDoc]
    let jspros = target.jsprocessor
    let angme = target.angular
    
    html.innerHTML = target.html
    css.innerHTML = target.css
    js.innerHTML = target.js
    head.innerHTML = target.head
    let modejs = "jsx"
    Split(['.textareas', '.iframe'])
    let editorHtml = CodeMirror.fromTextArea(html, {
        lineNumbers: true,
        mode: "htmlmixed",
        theme: "dracula",
        autoCloseBrackets: true,
        autoCloseTags: true,
        lineWrapping: true,
        styleActiveLine: true,
		scrollbarStyle: "overlay",
        keyMap: "sublime"
    });
    let editorCss = CodeMirror.fromTextArea(css, {
        lineNumbers: true,
        mode: "sass",
        theme: "dracula",
        autoCloseBrackets: true,
        lineWrapping: true,
        styleActiveLine: true,
		scrollbarStyle: "overlay",
        keyMap: "sublime"
    });
    let editorJs = CodeMirror.fromTextArea(js, {
        lineNumbers: true,
        mode: modejs,
        theme: "dracula",
        autoCloseBrackets: true,
        autoCloseTags: true,
        lineWrapping: true,
        styleActiveLine: true,
		scrollbarStyle: "overlay",
        keyMap: "sublime"
    });
    let editorHead = CodeMirror.fromTextArea(head, {
        lineNumbers: true,
        mode: "htmlmixed",
        theme: "dracula",
        autoCloseBrackets: true,
        autoCloseTags: true,
        lineWrapping: true,
        styleActiveLine: true,
		scrollbarStyle: "overlay",
        keyMap: "sublime"
    });






    htmlbtn.addEventListener("click", function () {
        htmlcont.classList.add("active")
        csscont.classList.remove("active")
        jscont.classList.remove("active")
        headcont.classList.remove("active")
        htmlbtn.classList.add("awake")
        cssbtn.classList.remove("awake")
        jsbtn.classList.remove("awake")
        headbtn.classList.remove("awake")
        let htmlval = editorHtml.getValue();
        editorHtml.setValue(`${htmlval}`)
    })
    cssbtn.addEventListener("click", function () {
        htmlcont.classList.remove("active")
        csscont.classList.add("active")
        jscont.classList.remove("active")
        headcont.classList.remove("active")
        htmlbtn.classList.remove("awake")
        cssbtn.classList.add("awake")
        jsbtn.classList.remove("awake")
        headbtn.classList.remove("awake")
        let cssVal = editorCss.getValue()
        css.innerHTML = cssVal
        editorCss = CodeMirror.fromTextArea(css, {
            lineNumbers: true,
            mode: "sass",
            theme: "dracula",
            autoCloseBrackets: true,
            lineWrapping: true,
            styleActiveLine: true,
			scrollbarStyle: "overlay",
            value: cssVal,
            keyMap: "sublime"
        });
        editorCss.on("inputRead", function (instance) {
            if (instance.state.completionActive) {
                return;
            }
            var cur = instance.getCursor();
            var token = instance.getTokenAt(cur);
            if (token.type && token.type != "comment") {
                CodeMirror.commands.autocomplete(instance);
            }
            run()
        });
    })
    jsbtn.addEventListener("click", function () {
        htmlcont.classList.remove("active")
        csscont.classList.remove("active")
        jscont.classList.add("active")
        headcont.classList.remove("active")
        htmlbtn.classList.remove("awake")
        cssbtn.classList.remove("awake")
        jsbtn.classList.add("awake")
        headbtn.classList.remove("awake")
        let jsVal = editorJs.getValue()
        js.innerHTML = jsVal
        editorJs = CodeMirror.fromTextArea(js, {
            lineNumbers: true,
            mode: modejs,
            theme: "dracula",
            autoCloseBrackets: true,
            autoCloseTags: true,
            lineWrapping: true,
            styleActiveLine: true,
			scrollbarStyle: "overlay",
            value: jsVal,
            keyMap: "sublime"
        });
        editorJs.on("inputRead", function (instance) {
            if (instance.state.completionActive) {
                return;
            }
            var cur = instance.getCursor();
            var token = instance.getTokenAt(cur);
            if (token.type && token.type != "comment") {
                CodeMirror.commands.autocomplete(instance);
            }
            run()
        });
    })
    headbtn.addEventListener("click", function () {
        htmlcont.classList.remove("active");
        csscont.classList.remove("active")
        jscont.classList.remove("active")
        headcont.classList.add("active")
        htmlbtn.classList.remove("awake")
        cssbtn.classList.remove("awake")
        jsbtn.classList.remove("awake")
        headbtn.classList.add("awake")
        let headVal = editorHead.getValue()
        head.innerHTML = headVal
        editorHead = CodeMirror.fromTextArea(head, {
            lineNumbers: true,
            mode: "htmlmixed",
            theme: "dracula",
            autoCloseBrackets: true,
            autoCloseTags: true,
            lineWrapping: true,
            styleActiveLine: true,
			scrollbarStyle: "overlay",
            value: headVal,
            keyMap: "sublime"
        });
        editorHead.on("inputRead", function (instance) {
            if (instance.state.completionActive) {
                return;
            }
            var cur = instance.getCursor();
            var token = instance.getTokenAt(cur);
            if (token.type && token.type != "comment") {
                CodeMirror.commands.autocomplete(instance);
            }
            run()
        });
    })

    function run() {
        let html = editorHtml.getValue()
        let css = editorCss.getValue()
        let js = editorJs.getValue()
        let head = editorHead.getValue()
        
        iframe.innerHTML = `<iframe src="https://fronteditor.adityaananya007.repl.co/result?project=${window.location.search.slice(1).split("project=")[1].split("&")[0]}" class="if" width="100%" height="100%"></iframe>`
        let doccode = { project: projectName, html: html, css: css, js: js, head: head, jsprocessor: jspros, angular: angme } 
        docobj[indexDoc] = doccode
        localStorage.setItem("doc", JSON.stringify(docobj))
    }

    editorHtml.on("inputRead", function (instance) {
        if (instance.state.completionActive) {
            return;
        }
        var cur = instance.getCursor();
        var token = instance.getTokenAt(cur);
        if (token.type && token.type != "comment") {
            CodeMirror.commands.autocomplete(instance);
        }
        run()
    });
    setInterval(() => {
        let htmlcode = editorHtml.getValue()
        let csscode = editorCss.getValue()
        let jscode = editorJs.getValue()
        let headcode = editorHead.getValue()
        let ang  = ""
        if (angme){
            ang ="ng-app"
        }
        else{
            ang = ""
        }
        let datacode = `
<!DOCTYPE html>
<html lang="en" ${ang}>
    <head>
        ${headcode}
		<script src="https://cdn.jsdelivr.net/npm/browser-scss@1.0.3/dist/browser-scss.min.js"></script>
        <style type="text/scss">
            ${csscode}
        </style>
    </head>
    <body>
        ${htmlcode}
        <script type="${jspros}">
            ${jscode}
        </script>
    </body>
</html>
        `
        let fileNameDown = ""
        projectName.split(" ").forEach((element, index)=>{
            if (index==0){
                fileNameDown+=element
            }
            else{
                fileNameDown+=`_${element}`
            }
        })
        let filecode = datacode
        let blob = new Blob([filecode], { type: "text/html" });
        let url = URL.createObjectURL(blob);
        download.addEventListener("click", function(){
    
            Object.assign(download, {
                href: url,
                download: `${fileNameDown}.html`
            })
        })
    }, 100);
    codebtn.addEventListener("click", function () {
        codebtn.classList.add("wakeup")
        ifrabtn.classList.remove("wakeup")
        textareas.classList.add("breakactive")
        file.classList.add("breakactive")
        iframe.classList.remove("breakactive")
    })
    ifrabtn.addEventListener("click", function () {
        codebtn.classList.remove("wakeup")
        ifrabtn.classList.add("wakeup")
        textareas.classList.remove("breakactive")
        file.classList.remove("breakactive")
        iframe.classList.add("breakactive")
    })

    fileopt.addEventListener("click", function () {
        file.classList.add("visible")
        textareas.classList.remove("visible")
        iframe.classList.remove("visible")
        fileopt.classList.add("arise")
        codeopt.classList.remove("arise")
        iframeopt.classList.remove("arise")
    })
    codeopt.addEventListener("click", function () {
        file.classList.remove("visible")
        textareas.classList.add("visible")
        iframe.classList.remove("visible")
        fileopt.classList.remove("arise")
        codeopt.classList.add("arise")
        iframeopt.classList.remove("arise")
    })
    iframeopt.addEventListener("click", function () {
        file.classList.remove("visible")
        textareas.classList.remove("visible")
        iframe.classList.add("visible")
        fileopt.classList.remove("arise")
        codeopt.classList.remove("arise")
        iframeopt.classList.add("arise")
    })

    function setcodehtml() {
        if (document.querySelector(".botnav").style.display == "none") {
            return;
        }
        else {
            file.classList.remove("visible")
            textareas.classList.add("visible")
            iframe.classList.remove("visible")
            fileopt.classList.remove("arise")
            codeopt.classList.add("arise")
            iframeopt.classList.remove("arise")
        }

    }
}

