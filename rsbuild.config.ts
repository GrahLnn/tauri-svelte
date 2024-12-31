import { defineConfig } from "@rsbuild/core";
import { pluginSvelte } from '@rsbuild/plugin-svelte';

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
  plugins: [pluginSvelte()],
  source: {
    alias: {
      '@': './src',
    },
  },
  output: {
    copy: [
      { from: './static', to: './' }
    ]
  },
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
  },
  dev: {
    client: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
  },
  tools: {
    rspack: {
      watchOptions: {
        ignored: ["**/src-tauri/**"],
      },
    },
  },
});
