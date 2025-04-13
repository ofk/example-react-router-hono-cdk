import { Hono } from 'hono';

const app = new Hono();

app.use(async (c, next) => {
  await next();
  c.header('X-Powered-By', 'React Router and Hono');
});

app.get('/api', (c) =>
  c.json({
    message: 'Hello',
  }),
);

export default app;
