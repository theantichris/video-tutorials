import express from "express"
import { join } from "path"

const attachLocals = require("./attach-locals")
const lastResortErrorHandler = require("./last-resort-error-handler")
const primeRequestContext = require("./prime-request-context")

function mountMiddleware(app, env){
  app.use(lastResortErrorHandler)
  app.use(primeRequestContext)
  app.use(attachLocals)

  app.use(
    express.static(join(__dirname, "..", "public"), { maxAge: 86400000})
  )
}

export default mountMiddleware
