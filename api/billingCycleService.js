const BillingCylce = require('./billingCylce')

BillingCylce.methods(['get', 'post', 'put', 'delete'])
BillingCylce.updateOptions({new: true, runValidators: true})

module.exports = BillingCylce
