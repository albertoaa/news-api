const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const gnewsApiKey = process.env.GNEWS_API_KEY;
const apiUrl = process.env.API_URL;

app.get('/', (req, res) => {
  res.send('Get all news endpoint');
});

app.get('/news', async (req, res) => {
  const headlinesNewsUrl = `${apiUrl}/top-headlines?category=general&apikey=${gnewsApiKey}`;
  const newsResponse = await axios.get(headlinesNewsUrl);
  const { data } = newsResponse;
  res.send(data.articles);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API ready to accept connections on port ${port}`);
});
