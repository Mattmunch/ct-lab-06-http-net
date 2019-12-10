module.exports = rawRequest => {
  const dicedRequest = rawRequest.split('\n');
  const [method, path] = dicedRequest[0].split(' ');
  const extractedBody = rawRequest.split('\r\n\r\n');
  const body = extractedBody[1];
  return {
    method,
    path,
    body
  };
};
