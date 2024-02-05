import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault";
import Head from "../layouts/HeadDefault";
import logoUrl from "../assets/rocket.png";
import vikeReact from "vike-react/config";

// Default configs (can be overriden by pages)
export default {
  Layout,
  Head,
  // <title>
  title: "Aurélien Lourot",
  // <link rel="icon" href="${favicon}" />
  favicon: logoUrl,
  extends: vikeReact,
} satisfies Config;
