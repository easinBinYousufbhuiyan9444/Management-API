
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

app.use('/', routes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
