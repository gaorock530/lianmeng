const express = require('express');
const path = require('path');

const app = express();

app.set('x-powered-by', false);
app.use(express.static(__dirname + '/build'));


const PORT = 3000;

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, (e) => {
  console.log(e || `Server is running on port ${PORT}.`);
});