const express = require('express')
//como eu passo informação para algum modulo dentro do node
module.exports = function(server) {

  //API de routes
  const router = express.Router()
  server.use('/api', router)

  //router.route('/teste').get(function(req, res, next) {
  //  res.send('funcionou')
  //})

  //rotas da API
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')

  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)

}
