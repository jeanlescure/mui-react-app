const path = require('path');
const http = require('http');
const express = require('express');
const history = require('connect-history-api-fallback');

const port = 8080;
const app = express();

app.server = http.createServer(app);
app.use(history({
  index: '/'
}));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});