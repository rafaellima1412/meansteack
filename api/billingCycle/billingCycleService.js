const BillingCylce = require('./billingCycle')
//API rest
BillingCylce.methods(['get', 'post', 'put', 'delete'])
BillingCylce.updateOptions({new: true, runValidators: false})

module.exports = BillingCylce
