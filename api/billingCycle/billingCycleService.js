const BillingCylce = require('./billingCycle')
//API rest
BillingCylce.methods(['get', 'post', 'put', 'delete'])
//sempre que der update
BillingCylce.updateOptions({new: true, runValidators: true})

module.exports = BillingCylce
