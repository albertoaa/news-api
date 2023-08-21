const express = require('express');
const app = express();

const gnewsApiKey = process.env.GNEWS_API_KEY;

app.get('/', (req, res) => {
  res.send('Get all news endpoint');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API ready to accept connections on port ${port}`);
});
