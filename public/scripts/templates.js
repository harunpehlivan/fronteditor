function createnew() {
    document.querySelector(".createmodal").classList.toggle("open")

}
let projectName = ""
let template = document.querySelector(".templatesel")
let templateValue = template.value
function changetemp(){
    templateValue = template.value;
}

document.querySelector(".createtext").addEventListener("input", checkName())
function checkName() {
    projectName = document.querySelector(".createtext").value
    setSpace = false
    projectName.split(" ").forEach((element) => {
        if (element == "") {
            setSpace = true
        }
        else {
            setSpace = false
        }
    })
    let doc = localStorage.getItem("doc")
    let filefound = false
    if (doc == undefined) {
        filefound = false
    }
    else {
        docobj = JSON.parse(doc)
        docobj.forEach(function (element, index) {
            if (element.project == projectName) {
                filefound = true
            }
        })
    }
    if (projectName == "" || setSpace) {
        document.querySelector(".error").innerHTML = "Please choose a valid name: Word must contain symbols(letter and numbers), last symbol should not be space!"
        document.querySelector(".createbtnsec").innerHTML = ""
    }
    else if (filefound) {
        document.querySelector(".error").innerHTML = "Project with this name is already there! Please choose another name!"
        document.querySelector(".createbtnsec").innerHTML = ""
    }
    else {
        document.querySelector(".error").innerHTML = ""
        document.querySelector(".createbtnsec").innerHTML = `<div class="createbtn bg-blue-gradient" onclick="createbtnclick()">Create</div>`
    }
}
let templatedoc = {
    Vanilla : {
        html:"", css:"", js:"", head:"", jsprocessor: "text/javascript", angular: false
    }, 
    React: {
        html:`<div id="root"></div>       `, css:`*{\n  font-family: sans-serif; \n}\nbody {\n  height: 100vh;\n  margin: 0;\n  display: grid;\n  place-items: center;\n}\n\n.box {\n  width: 300px;\n  padding: 20px;  \n  border-radius: 10px;  \n  border: 2px solid black;  \n}\n.box h1 {\n  font-size: 20px;\n}\n.box.dark-mode {\n  background: black;\n  color: #bbb;\n}\n.box.dark-mode h1 {\n  color: white;\n}\n.box.dark-mode .checkbox:hover {\n  color: white;\n} \n`, js:"class Wrapper extends React.Component {\n  \n  constructor(props) {\n    super(props)\n    this.state = { \n      darkMode: true\n    }\n    this.handleChange = this.handleChange.bind(this);\n  }\n  \n  handleChange(event) {\n    this.setState({ darkMode: !this.state.darkMode });\n  }\n  \n  render() {  \n    return <div>\n      {this.props.render({\n        handleChange: this.handleChange,\n        darkMode: this.state.darkMode\n      })}\n    </div>;\n  }\n   \n} \n\nclass App extends React.Component {\n  render() {\n    return (\n      <Wrapper\n        render={({ handleChange, darkMode }) => {\n          let modeClass = darkMode ? \"dark-mode\" : \"light-mode\";\n          let checked = darkMode ? \"checked\" : \"unchecked\";\n          return <div className={`box content ${modeClass}`}>\n            <h1>React CDN Starter Template!!</h1>\n            <p>This is a React CDN starter template! You can use this to write XML inside the Javascript Section!<br/> To get started, remove this and write your own!</p>\n            <label className=\"checkbox\">\n              <input \n                type=\"checkbox\" \n                defaultChecked={checked} \n                onChange={handleChange} />\n              {' '}Dark Mode\n            </label>\n          </div>\n        }}\n      />\n    );\n  }\n}\n\nconst el = document.querySelector(\"#root\");\nReactDOM.render(<App />, el);", head:`<script src='https://unpkg.com/react@18/umd/react.production.min.js'></script>
        <script src='https://unpkg.com/react-dom@18/umd/react-dom.production.min.js'></script>  
    <!--     <script src='https://unpkg.com/babel-standalone@6.26.0/babel.js'></script>             -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.18.13/babel.min.js" integrity="sha512-PRl9KbPVEMeO1HV3BU5hcxpipzo2EVLe+tvWfLJf0A7PnKCfShArjZ2iXVAVo8ffpBSfRO0K58TYuquQvVSeVA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>       `, jsprocessor:"text/babel", angular:false
    },
    Tailwind:{
        html:`<section class="text-gray-600 body-font">\n <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">\n <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">\n <div class="text-center lg:w-2/3 w-full">\n <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Tailwind CSS Starter template</h1>\n <p class="mb-8 leading-relaxed">This Project has been created by using Tailwind CSS utility classes. You can use this template for Using Tailwind CSS in Fronteditor! Just remove this an start!</p>\n <div class="flex justify-center">\n <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>\n <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>\n </div>\n </div>\n </div>\n </section>`, css:"", js:"", head:`<script src="https://cdn.tailwindcss.com"></script>`, jsprocessor:"text/javascript", angular: false
    }, 
    Angularjs:{
        html:` <div>
        <h1 style="margin-bottom: 20px;">
          Welcome to Angular CDN template!
        </h1>
        <p style="margin-bottom:20px;"> 
          Welcome to angular template! You can use this template for making very simple angular.js application!
        </p>
           <label>Name:</label>
           <input type="text" ng-model="yourName" placeholder="Enter a name here" style="margin-bottom: 20px;"> 
           <h1>Hello {{yourName}}!</h1>
         </div>`, css:`*{
            padding:0;
            margin:0;
            font-family: sans-serif; 
          }
          body{
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center; 
            padding: 50px;  
          }
          
          `, js:"", head:`<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>`, jsprocessor:"text/javascript", angular: true
    }, 
    Vue:{
        html:`<div id="app">
  
        <div class="box content" :class="modeClass">
          <h1>{{title}}</h1>
          <p>{{description}}</p>
          <label class="checkbox">
            <input type="checkbox" v-model="darkMode" />
            Dark Mode
          </label>
        </div>
        
      </div> `, css:`html {
            height: 100%;
            font-family: sans-serif;  
          }
          
          body {
            min-height: 100%;
            margin: 0;
            display: grid;
            place-items: center;
          }
          
          .box {
            width: 300px;
            padding: 20px;
            border-radius: 10px;  
            border: 2px solid #000;  
          }
          .box h1 {
            font-size: 20px;
          }
          .box.dark-mode {
            background: black;
            color: #bbb;
          }
          .box.dark-mode h1 {
            color: white;
          }
          .box.dark-mode .checkbox:hover {
            color: white;
          }`, js:`new Vue({\n\n    \n  // https://vuejs.org/v2/api/#el\n  el: '#app',\n\n  // State with data\n  // http://vuejs.org/v2/guide/instance.html#Data-and-Methods\n  data() {\n    return {\n      darkMode: true,\n      title: 'Vue Js Starter Template',\n      description: 'This is a Vue.js Starter template! Use this to make your own Vue.js App! To get started, remove this and write your own code!'    \n    }\n  },\n  \n  // Computed properties\n  // https://vuejs.org/v2/guide/computed.html\n  computed: {\n    modeClass(){\n      return this.darkMode ? 'dark-mode' : 'light-mode';\n    }\n  },\n  \n  // Lifecycle Hooks\n  // https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks\n  \n  beforeCreate(){},\n  created(){},\n  \n  beforeMount(){},\n  mounted(){},\n  \n  beforeUpdate(){},\n  updated(){},\n  \n  beforeDestroy(){},\n  destroyed(){}\n\n});`, head:`<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.9/vue.min.js" ></script>       `, jsprocessor:"text/javascript", angular:false
    },
	Reactrouter: {
        html:`<div id=\"root\"></div>       `,
        css: `*{\n  font-family: sans-serif; \n}\nbody{\n  min-height: 100vh;\n}\n.container{\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  height: auto;\n  position: absolute;\n  left: 10%; \n}\n\n\n.nav{\n  display: flex;\n  position:relative;\n  margin-bottom: 50px;\n  width: 80%;\n  left: 5%; \n  justify-content: space-between;\n}\n.nav li{\n  list-style-type:none;  \n} \n\n.nav li a{\n  color: #999; \n  text-decoration: none;\n}\n.nav li a:hover{\n  color: #000\n}\n\n`,
        js: `const Link = ReactRouterDOM.Link;\nconst Route = ReactRouterDOM.Route;\n\nconst App = () => (\n  <ReactRouterDOM.HashRouter>\n      <ul className=\"nav\">\n          <li><Link to=\"/\"><b>Home</b></Link></li>\n          <li><Link to=\"/how_to\"><b>How to</b></Link></li> \n        <li><Link to=\"/fake_page\"><b>Fake Page</b></Link></li>\n      </ul>\n\n      <Route path=\"/\" exact component={Home} />\n      <Route path=\"/how_to\" component={Howto} />\n      <Route path=\"/fake_page\" component={Myrepls} />\n  </ReactRouterDOM.HashRouter>\n)\n\nconst Home = () => (\n  <div className=\"container\">  \n    <h1>React Router CDN Starter | Home</h1>\n    <p>Welcome to the React Router CDN template Home Page!</p>\n    <p>This is the home page of the given template</p>\n    <p>You will not see the route above because of the Iframe, but when you download the code, and open it in your browser, You can see the routes!</p>\n    <p>Try navigating to other routes with this method, and See the magic of an SPA!</p>\n  </div> \n  \n)\n\nconst Howto = () => (\n  <div class=\"container\"> \n    <h1>React Router CDN Starter | How to</h1>\n    <p>To create a new route for a new page, create components like given in the code of this app, js file.</p> \n    <p>Defining the route is the first step, then comes creating the component for the route. Then you connect the route to the component. For more information see the code of this app. You will immediatly know the process!</p>\n  </div> \n)\n \nconst Myrepls = () => (\n  <div class=\"container\">\n    <h1>React Router CDN Starter | Fake Page</h1>\n    <p>This is a Fake Lorem Ispum page (as I was not getting the idea what to write here)</p>\n    <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi cupiditate at hic eum dolores vitae! Accusamus laudantium veniam debitis iusto voluptate dolor recusandae provident explicabo rem! Similique quo asperiores ullam quaerat modi minus, rerum tenetur enim laudantium, ex veniam laboriosam possimus totam voluptates. Aspernatur, ad blanditiis! Debitis aperiam veniam, minima accusantium tenetur animi, illo, quasi delectus neque odio quos!</p> <p>Sit dolorem nemo quasi? Dolor voluptatibus minus laboriosam culpa, hic temporibus rerum, sapiente deserunt repellat eligendi quasi ad quam at eaque aperiam ipsam doloremque exercitationem alias voluptatem? Atque voluptas, quasi minima cum pariatur ab doloremque facilis adipisci recusandae asperiores nesciunt nostrum rerum illum quos voluptates commodi eos molestias earum distinctio quia nihil, consequuntur officia dolore? </p><p>Porro assumenda aut quibusdam dolorem culpa recusandae quia libero quaerat quas quos voluptas odit rem unde asperiores fuga expedita delectus numquam, distinctio reprehenderit in doloribus id aliquam rerum? Repudiandae inventore animi nulla labore laborum iste temporibus doloribus porro excepturi officiis, blanditiis enim?</p><p> Nisi laborum accusantium totam quis temporibus repellendus ducimus minus labore laudantium facere ea voluptatum beatae corporis nam, velit voluptate tenetur eius odio. Magnam, animi dolorum quis soluta dolore vitae unde ipsa, impedit explicabo error sunt eos ipsam nobis? Asperiores aliquam magnam quod distinctio?  \n</p>\n    \n  </div> \n) \n\nReactDOM.render(<App />, document.querySelector('#root')); `,
        head: `<script src='https://unpkg.com/react@18/umd/react.production.min.js'></script>\n        <script src='https://unpkg.com/react-dom@18/umd/react-dom.production.min.js'></script>  \n    <!--     <script src='https://unpkg.com/babel-standalone@6.26.0/babel.js'></script>             -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.18.13/babel.min.js\" integrity=\"sha512-PRl9KbPVEMeO1HV3BU5hcxpipzo2EVLe+tvWfLJf0A7PnKCfShArjZ2iXVAVo8ffpBSfRO0K58TYuquQvVSeVA==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"></script>     \n<script src='https://unpkg.com/react-router-dom@5.0.0/umd/react-router-dom.min.js'></script>     \n \n \n `,
        jsprocessor:`text/babel`,
        angular: false
    }
}
function generatename() {
    let nouns = `frog,dog,baby,finger,shoe,toilet,cat,computer,keyboard,mouse,phone,chainsaw,fork,knife,sword,pitchfork,machine gun,nuke,bear,muffin,cookie,cactus,blob,banana,bee`.split`,`

    let verbs = `eat,drink,slap,punch,kick,stare at,insult,pulverize,jump on,sit on,crush,lick,code,create,transmute,talk to,steal,arrest,race`.split`,`

    const rand = (arr) => arr[Math.floor(Math.random() * arr.length)]

    const randomize = () => {;   
        document.querySelector(".createtext").value = `${rand(verbs)}${rand(nouns)}${rand(nouns)}`;
    }
    randomize()
    checkName()
}

function setvalue(tech){
    template.value = tech;
    templateValue = template.value
	generatename()
		document.querySelector(".createmodal").classList.add("open")
}

function createbtnclick() {
    let doc = localStorage.getItem("doc")
    if (doc == undefined) {
        docobj = []
        let templateval = templatedoc[templateValue]
        let newdoc = { project: projectName, html: templateval.html, css: templateval.css, js: templateval.js, head: templateval.head, jsprocessor: templateval.jsprocessor, angular: templateval.angular }
        docobj.unshift(newdoc)
        localStorage.setItem("doc", JSON.stringify(docobj))
        let routepath = ""
        projectName.split(" ").forEach(function (element, index) {
            if (index == 0) {
                routepath += `${element}`
            }
            else {
                routepath += `+${element}`
            }
        })
        location.replace(`/edit?project=${routepath}`)
    }
    else {
        docobj = JSON.parse(doc)
        let templateval = templatedoc[templateValue]
        
        let newdoc = { project: projectName, html: templateval.html, css: templateval.css, js: templateval.js, head: templateval.head, jsprocessor: templateval.jsprocessor, angular: templateval.angular }
        docobj.unshift(newdoc)
        localStorage.setItem("doc", JSON.stringify(docobj))
        let routepath = ""
        projectName.split(" ").forEach(function (element, index) {
            if (index == 0) {
                routepath += `${element}`
            }
            else {
                routepath += `+${element}`
            }
        })
        location.replace(`/edit?project=${routepath}`)
    }
}

function setSearch(){
    let templates = document.getElementsByClassName("template")
    let searchVal = document.querySelector(".search").value
    Array.from(templates).forEach(function(element){

        if (element.querySelector(".name").innerHTML.toLowerCase().includes(searchVal.toLowerCase())){
            element.style.display = "block"
        }
        else{
            element.style.display = "none"
        }
    })
}