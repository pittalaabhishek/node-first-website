const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("This is my home page")
    }
    else if(req.url==='/about'){
        res.end("This is about us")
    }
    else{
    res.end(`
        <h1>OOps</h1>
        <p>This page is not available</p>
        <a href="/">Home Page</a>`
    )
    }
})

server.listen(5000)