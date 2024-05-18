const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registerRoute = require('./routes/user');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', registerRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
