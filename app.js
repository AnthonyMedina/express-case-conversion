const express = require('express');
const { formatRequest, formatBeforeSend } = require('./utils/case-conversion');
const app = express();

app.use(express.json());
app.use(formatRequest);
app.use(formatBeforeSend);

app
  .route('/')
  .get((req, res) => res.send({ article_id: 1 }))
  .post((req, res) => res.status(201).send(req.body));

module.exports = app;
