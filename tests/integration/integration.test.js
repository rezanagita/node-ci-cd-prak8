const request = require('supertest');
const app = require('../../app');

describe('GET /api/endpoint', () => {
  it('should respond with a 200 status', async () => {
    const res = await request(app).get('/api/endpoint');
    expect(res.status).toBe(200);
  });
});
