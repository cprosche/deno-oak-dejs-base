import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { dejs } from "./utils/dejs.js";
const router = new Router();

router.get("/", async ({ response }) => {
	response.body = await dejs("index.ejs");
});

//serves static files such as styles.css
router.get("/static/:path+", async (context) => {
	await context.send({
		root: Deno.cwd(),
	});
});

router.all("/(.*)", async ({response}) => {
	response.status = 404;
	response.body = await dejs("404.ejs");
});

export default router;
