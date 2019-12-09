module.exports = (response) => {
  return `HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: ${response.body.length}
Content-Type: ${response.contentType}

${response.body}`;
};
