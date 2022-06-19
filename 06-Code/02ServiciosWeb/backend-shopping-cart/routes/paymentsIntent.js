const express = require('express');
const getOrderAmount = require('../data/getOrderAmount');
const router = express.Router();

const stripe = require('stripe')('sk_test_51LBPQLIA6WrH95P9DyS4gNxenjTUzyZlVjoeP8lIL2BFcu1GdDHpBQUfWZBdXDkdxmyyxKxqzm8mSD9QJIE28xTu00MjG7ta8g');

//CREAR INTENTO DE PAGO
router.post('/', async (req, res) => {
  const items = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: await getOrderAmount(items),
    currency: 'eur',
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;
