import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";

// biome-ignore lint/style/noDefaultExport: configuration file
export default defineWorkersConfig({
  test: {
    poolOptions: {
      workers: {
        wrangler: { configPath: "./wrangler.toml" },
      },
    },
  },
});
