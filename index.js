const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const abhiRoute = require('./routes/abi');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const { JWT_SEC, MONGO_URL, PASS_SEC } = require('./config/keys');

const stripeRoute = require('./routes/stripe');
const cors = require('cors');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connection Successfull!'))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);
app.use('/api/v1', abhiRoute);

if (process.env.NODE_ENV == 'production') {
  const path = require('path');

  app.use(express.static(__dirname, 'client', 'build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running!');
});
