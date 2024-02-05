export default LayoutDefault;

import "@fortawesome/fontawesome-free/css/all.css";
import "./style.css";
import "./tailwind.css";

import React from "react";
import { usePageContext } from "vike-react/usePageContext";
import { HomeLink } from "../components/Link";

function LayoutDefault({ children }: { children: React.ReactNode }) {
  const { urlPathname } = usePageContext();
  return (
    <main className="max-w-4xl mx-auto p-5 sm:p-10">
      {urlPathname === "/" ? null : <HomeLink />}
      {children}
    </main>
  );
}
