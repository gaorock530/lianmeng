const express = require('express');

const app = express();

app.set('x-powered-by', false);
app.use(express.static(__dirname + '/build'));


const PORT = 3000;

app.listen(PORT, (e) => {
  console.log(e || `Server is running on port ${PORT}.`);
});