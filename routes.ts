import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { dejs } from "./dejs.ts";
const router = new Router();

router.get("/", async ({ response }) => {
	response.body = await dejs("index.ejs");
});

router.get("/about", async ({ response }) => {
	response.body = await dejs("about.ejs");
});

//serves static files such as styles.css
router.get("/static/:path+", async (context) => {
	await context.send({
		root: Deno.cwd(),
	});
});

export default router;