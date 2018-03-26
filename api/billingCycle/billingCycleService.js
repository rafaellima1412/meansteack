const _ = require('lodash')
const BillingCycle = require('./billingCycle')
//API rest responsavel pelo serviços de get,post,put e delete
BillingCycle.methods(['get', 'post', 'put', 'delete'])
//sempre que der update traz ultimo registro
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)
function sendErrorsOrNext(req, res, next){
  //bundle trás os erros
  const bundle = res.locals.bundle
  if(bundle.errors){
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErrors(nodeRestfulErrors){
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

//devolve numeros de registros persistidos
BillingCycle.route('count', function(req, res, next){
  BillingCycle.count(function(error, value){
    if(error){
      res.status(500).json({error: [error]})
    }else{
      res.json({value})
    }
  })
})

module.exports = BillingCycle
