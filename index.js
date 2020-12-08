// const http = require('http');

// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end('Hello, World!');
// }

// const server = http.createServer(requestListener);

// server.listen(8080, () => {
//     console.log('Server is listening')
// });
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
let userRouter = require('./routes')

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


let rootDir = path.join(__dirname, 'www');
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(express.static(rootDir))
app.use('/users', userRouter)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
