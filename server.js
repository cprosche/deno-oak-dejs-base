import { Application } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import router from './routes.js';

const port = 3000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on http://localhost:${port}`);
await app.listen({ port });
