const decamelizeKeys = require('decamelize-keys');
const camelizeKeys = require('camelize-keys');

exports.formatRequest = (req, res, next) => {
  req.query = decamelizeKeys(req.query);
  req.body = decamelizeKeys(req.body);
  next();
};

exports.formatBeforeSend = (req, res, next) => {
  const { send } = res;
  res.send = body => {
    const formattedBody = camelizeKeys(body);
    send.call(res, formattedBody);
  };
  next();
};
