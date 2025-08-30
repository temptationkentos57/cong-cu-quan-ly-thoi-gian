const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Kết nối MongoDB thành công.');
}).catch(err => {
  console.error('Lỗi kết nối MongoDB: ', err);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Cong Cu Quan Ly Thoi Gian API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});