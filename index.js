const express = require('express');//Set up the express module
const app = express();
const router = express.Router();
const path = require('path')//Include the Path module


app.use(express.urlencoded())


//Set up the router
app.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/redirect.html'));
})
app.use(`/`, router);

router.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/index.html'))
})
app.use(`/home`, router)

router.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/editor.html'));
})
app.use(`/edit`, router);
 
router.get('/projects', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/projects.html'))
})
app.use(`/projects`, router)


router.get('/result', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Results</title>
        <style>
            *{
                padding:0;
                margin:0;
                box-sizing:border-box;
            }
            body{
                min-height:100vh;
                width:100%;
                overflow: hidden;
            }
            .fullif{
                min-height:100vh;
                width:100%;
                outline:none;
				border: none;
            }
        </style>
    </head>
    <body>
        <script src="scripts/results.js"></script>
    </body>
    </html>
    
    `);
    // res.sendFile(path.join(__dirname + '/pages/showresult.html'))
})
app.use(`/result`, router);

router.get('/templates', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/templates.html'))
})
app.use(`/templates`, router)


let server = app.listen(4040, function () {
    console.log("App server is running on port 4040");
});