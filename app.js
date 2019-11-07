const express = require('express');
const serverless = require('serverless-http');


const app = express();

app.use(express.json());
app.use(express.urlencoded());


/**
 * @brief GET demo API
 * @method GET
 */
app.get('/api', (req, res) => {
  const result = {
    message: 'get test',
  };

  res.status(200).send(result);
});


/**
 * @brief GET demo API with parameters
 * @method GET
 * @param id
 */
app.get('/api/:id', (req, res) => {
  const id = req.params.id;

  const result = {
    message: 'get with params test',
    params: {
      id
    }
  };

  res.status(200).send(result);
});


/**
 * @brief POST demo API
 * @method POST
 */
app.post('/api', (req, res) => {
  const result = {
    message: 'post test',
    data: req.body,
  };

  res.status(201).send(result);
});


/**
 * @brief PUT demo API
 * @method PUT
 * @param id
 */
app.put('/api/:id', (req, res) => {
  const { id } = req.params;

  const result = {
    message: 'put test',
    data: {
      id
    }
  };

  res.send(result)
});


/**
 * @brief DELETE demo api
 * @method DELETE
 * @param id
 */
app.delete('/api/:id', (req, res) => {
  const { id } = req.params;
  const result = {
    message: 'delete test',
    data: {
      id
    }
  };

  res.send(result);
});


module.exports.handler = serverless(app);
