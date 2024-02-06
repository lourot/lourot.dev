export default Page;

import React from "react";
import { SectionWithAvatar } from "../../layouts/Section";
import { Link } from "../../components/Link";
import {
  BuymeacoffeeButton,
  PaypalDonateButton,
} from "../../components/Button";

function Page() {
  return (
    <>
      <SectionWithAvatar>
        <div className="mb-5">
          Hi, I'm Aurélien, creator of a Chrome accessibility{" "}
          <Link href="https://github.com/AurelienLourot/google-input-tools-large-keyboard">
            extension
          </Link>{" "}
          and co-maintainer of a few other open-source{" "}
          <Link href="https://github.com/AurelienLourot">projects</Link>.
        </div>
        <div>
          I spend most of my time writing free and open-source software. Help me
          maintain these projects by donating. Even tiny amounts make a huge
          difference. Thank you.
        </div>
      </SectionWithAvatar>
      <div className="flex flex-wrap gap-6 gap-y-4 justify-center">
        <BuymeacoffeeButton />
        <PaypalDonateButton />
      </div>
    </>
  );
}
