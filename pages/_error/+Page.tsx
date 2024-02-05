export default Page;

import React from "react";
import { usePageContext } from "vike-react/usePageContext";
import { Link } from "../../components/Link";

function Page() {
  const { is404 } = usePageContext();
  return (
    <>
      <div>{is404 ? "404 Page Not Found" : "500 Internal Server Error"}</div>
      <div>
        <Link href="/">&larr; home</Link>
      </div>
    </>
  );
}
