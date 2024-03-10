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
        <p className="mb-5">
          Hi, I&apos;m Aurélien, creator of a{" "}
          <Link href="https://github.com/lourot/google-input-tools-large-keyboard">
            Chrome accessibility extension
          </Link>{" "}
          and co-maintainer of a few other{" "}
          <Link href="https://github.com/lourot">open-source projects</Link>.
        </p>
        <p>
          I spend most of my time writing free and open-source software. Help me
          maintain these projects by donating. Even tiny amounts make a huge
          difference. Thank you.
        </p>
      </SectionWithAvatar>
      <div className="flex flex-wrap gap-6 gap-y-4 justify-center">
        <BuymeacoffeeButton />
        <PaypalDonateButton />
      </div>
    </>
  );
}
