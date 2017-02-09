/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @date 2017-02-09 09:57:00
*/

let http = require('http')
let path = require('path')
let url = require('url')
let fs = require('fs')
let settings = require('./settings.json')

let mySettings = './_settings.json'
if (fs.existsSync(mySettings) && fs.statSync(mySettings).isFile()) {
  settings = require(mySettings) // for my personal settings
}

// change it to your file path
localFile = settings.localFile

function loadFile(pathname, res) {
  let filename = localFile + pathname
  if (fs.existsSync(filename) && fs.statSync(filename).isFile()) {
    fs.readFile(filename, function (err, data) {
      if (err) {
        console.log(err)
        res.statusCode = 404
        res.end('no such location')
      } else {
        res.writeHead(200)
        res.write(data)
        res.end()
      }
    })
  }
}

http.createServer(function (req, res) {
  // request path is like this: 'localhost/xxx.html'
  loadFile(req.url, res)
}).listen(80)
