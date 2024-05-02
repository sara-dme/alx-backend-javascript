const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  res.set("Content-Type", "application/json");
  const opt = {
    payment_methods: {
    credit_card: true,
    paypal: false
    }
    }
  res.send(opt);
});

app.post('/login', (req, res) => {
  let userName = '';
  if (req.body) {
    userName = req.body.userName;
  }
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;