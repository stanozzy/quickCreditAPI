import express from 'express';
import bodyParser from 'body-parser';

// Set up the express app
const app = express();

// configure body parser
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
