import request from 'supertest';
import express from 'express';
import mainRoutes from './routes/main.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/', mainRoutes);

describe('Test Routes', () => {
  it('should return the home page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Welcome to Farine'); // Adjust based on home page content
  });

  it('should return the menu page', async () => {
    const res = await request(app).get('/menu');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Our Menu'); // Adjust based on menu page content
  });

  it('should return the about page', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('About Us'); // Adjust based on about page content
  });

  it('should return the booking page', async () => {
    const res = await request(app).get('/book');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Book a Table'); // Adjust based on booking page content
  });
});
