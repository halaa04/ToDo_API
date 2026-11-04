const request = require('supertest');
const app = require('./app');

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});


test('POST /tasks creates a task', async () => {
  const res = await request(app).post('/tasks').send({ title: 'Learn CI/CD' });
  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe('Learn CI/CD');
  expect(res.body.done).toBe(false);
});

test('POST /tasks without title returns 400', async () => {
  const res = await request(app).post('/tasks').send({});
  expect(res.statusCode).toBe(400);
});


test('GET /tasks returns a list', async () => {
  const res = await request(app).get('/tasks');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});