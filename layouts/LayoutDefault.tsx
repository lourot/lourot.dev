export default LayoutDefault;

import "@fortawesome/fontawesome-free/css/all.css";
import "./style.css";
import "./tailwind.css";
import React from "react";

function LayoutDefault({ children }: { children: React.ReactNode }) {
  return <main className="max-w-4xl mx-auto p-5 sm:p-10">{children}</main>;
}
