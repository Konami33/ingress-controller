const express = require('express');
const app = express();
const port = 8001;

app.get('/', (req, res) => {
  res.send('Hello from server 1!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});