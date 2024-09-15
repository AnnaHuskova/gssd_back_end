import request from 'supertest';
import app from '../app';  

describe('Express App', () => {
  it('should have CORS headers', async () => {
    const response = await request(app).get('/api/health');
    expect(response.headers['access-control-allow-origin']).toBeDefined();
  });

  it('should use CORS with the correct options', () => {
    const corsOptions = {
      origin: process.env.FRONTEND_URL || 'http://localhost:3000',
      optionsSuccessStatus: 200,
      credentials: true,
    };
    expect(corsOptions.origin).toBe(process.env.FRONTEND_URL || 'http://localhost:3000');
    expect(corsOptions.optionsSuccessStatus).toBe(200);
    expect(corsOptions.credentials).toBe(true);
  });

  it('should respond with 404 for unknown route', async () => {
    const response = await request(app).get('/unknown-route');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "Nothing here. Do you know da wae?" });
  });

  it('should respond to health check', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    // Here you can add more expectations depending on what your health check returns
  });

  // Tests for API error handling
  it('should handle API errors', async () => {
    // We assume this route will throw an error
    const response = await request(app).get('/api/error-route');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: "Internal Server Error" });
  });

  // // Tests for /api/districts
  // describe('/api/districts', () => {
  //   it('should respond to GET request', async () => {
  //     const response = await request(app).get('/api/districts');
  //     expect(response.status).toBe(200);
  //     // Add more expectations depending on what your API returns
  //   }, 10000);

  //   // Add more tests for other methods (POST, PUT, DELETE) if any
  // });

  // // Tests for /api/green-areas
  // describe('/api/green-areas', () => {
  //   it('should respond to GET request', async () => {
  //     const response = await request(app).get('/api/green-areas');
  //     expect(response.status).toBe(200);
  //     // Add more expectations depending on what your API returns
  //   });

  //   // Add more tests for other methods (POST, PUT, DELETE) if any
  // });

});
