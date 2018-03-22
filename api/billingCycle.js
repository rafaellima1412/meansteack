const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: { type: String, required: true},
  value: {type: Number, min: 0, required: true}
})

const debtSchema = new mongoose.Schema({
  name: { type: String, required: true},
  value: {type: Number, min: 0, required: true},
  status: {type: Number, required: false, uppercase: true,
  enum: ['PAGO','PENDENTE','AGEANDADO']}
})

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true},
  month: {type: Number, min: 1, max:12, required: true},
  year: {type: Number, min: 1970, max:2100, required: true},
  credits: [creditSchema],
  debts: [debtSchema]
})

moduel.exports = restful.model('BillingCylce', billingCycleSchema)
