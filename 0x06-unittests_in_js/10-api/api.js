const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.listen(7865, () => console.log('API available on localhost port 7865 '));

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id[0-9]+', (req, res) => {
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
  let username = '';
  if (req.body) {
    username = req.body.username;
  }
  res.send(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;