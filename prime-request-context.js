import { v4 as uuid } from "uuid"

// Sets up values that we want on every request.
function primeRequestContext(req, res, next){
  req.context = {
    traceId: uuid()
  }

  next()
}

export default primeRequestContext
