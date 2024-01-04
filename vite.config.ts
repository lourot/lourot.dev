import react from "@vitejs/plugin-react";
import ssr from "vike/plugin";
import { UserConfig } from "vite";

export default {
  plugins: [
    react(),
    ssr({
      prerender: true,
      includeAssetsImportedByServer: true,
    }),
  ],
  optimizeDeps: { include: ["cross-fetch", "react/jsx-runtime"] },
} satisfies UserConfig;
