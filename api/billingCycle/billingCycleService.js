const BillingCycle = require('./billingCycle')
//API rest responsavel pelo serviços de get,post,put e delete
BillingCycle.methods(['get', 'post', 'put', 'delete'])
//sempre que der update traz ultimo registro
BillingCycle.updateOptions({new: true, runValidators: true})
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
