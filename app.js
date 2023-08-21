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
  //TODO get number of articles based on url parameter
  const headlinesNewsUrl = `${apiUrl}/top-headlines?category=general&apikey=${gnewsApiKey}`;
  const newsResponse = await axios.get(headlinesNewsUrl);
  const { data } = newsResponse;
  res.send(data.articles);
});

// TODO
/*
1.- Find by author
2.- Find by title
3.- Search by keywords
4.- Include cache on the API to avoid refetching previous requests
*/

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API ready to accept connections on port ${port}`);
});
