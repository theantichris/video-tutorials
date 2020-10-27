import express from "express"
import { join } from "path"

const attachLocals = require("./attach-locals")
const primeRequestContext = require("./prime-request-context")
const lastResortErrorHandler = require("./last-resort-error-handler")

function mountMiddleware(app, env){
  app.use(attachLocals)
  app.use(primeRequestContext)
  app.use(lastResortErrorHandler)

  app.use(
    express.static(join(__dirname, "..", "public"), { maxAge: 86400000 })
  )
}

export default mountMiddleware
