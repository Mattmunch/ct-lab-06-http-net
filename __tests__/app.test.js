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
});
