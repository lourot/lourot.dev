export default Page;

import React from "react";
import { usePageContext } from "vike-react/usePageContext";
import { Section } from "../../layouts/Section";

function Page() {
  const { is404 } = usePageContext();
  return (
    <Section>
      <div>
        {is404 ? (
          <>
            <h1>404</h1>
            <p>page not found</p>
          </>
        ) : (
          <>
            <h1>500</h1>
            <p>internal server error</p>
          </>
        )}
      </div>
    </Section>
  );
}
