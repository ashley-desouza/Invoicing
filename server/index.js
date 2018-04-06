const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

/*******************************************************************
 Create an Express App
********************************************************************/
const app = express();

/*******************************************************************
 Express App setup
********************************************************************/
app.use(morgan('combined'));

app.use(bodyParser.json({ type: '*/*' }));

/*******************************************************************
 Server Setup
********************************************************************/
const PORT = process.env.PORT || 5000;

app.listen(PORT, _ => console.log(`Server is listening on port: ${PORT}`));