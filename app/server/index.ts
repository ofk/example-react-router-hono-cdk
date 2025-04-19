import { Hono } from 'hono';

const app = new Hono();

app.use(async (c, next) => {
  await next();
  c.header('X-Powered-By', 'React Router and Hono');
});

const _route = app.get('/api/hello', (c) =>
  c.json({
    message: 'Hello',
  }),
);

export type AppType = typeof _route;

export default app;
