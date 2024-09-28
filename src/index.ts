import { AutoRouter } from "itty-router";

const router = AutoRouter();

router.get("/", () => ({
  hello: "kitty",
}));

// biome-ignore lint/style/noDefaultExport: that's how it works ¯\_(ツ)_/¯
export default router;
