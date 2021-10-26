const express = require('express')

const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar({
  accessToken: "a11bc2b586fe4d21adbfe48f3a788abd", 
  captureUncaught: true,
  captureUnhandledRejections: true
})

const app = express()

app.get('/', (req,res)=> {
  res.sendFile(path.join(__dirname, '/public/index.html'))
  rollbar.info("html file served sucessfully")

})
const port = process.env.PORT || 4545
app.listen(port, () => console.log('take us to warp ${port}'))