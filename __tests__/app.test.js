const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('gets the home page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      }); 
  });
  it('posts status code 200 and plain text with the request body', () => {
    return request(app)
      .post('/echo')
      .then(res => {
        expect(res.text).toEqual('');
      });
      
  });
    
});
