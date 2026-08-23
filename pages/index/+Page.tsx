export default Page;

import React from "react";
import { SectionWithAvatar } from "../../layouts/Section";
import { SquareButton } from "../../components/Button";

function Page() {
  return (
    <>
      <SectionWithAvatar>
        <h1 className="text-2xl font-medium">Aurélien Lourot</h1>
        <p className="text-xl font-normal">Software Engineer</p>
        <p className="my-1 font-light">Berlin, Germany</p>
        <div className="flex gap-5 text-2xl mt-4 text-gray-800">
          <SquareButton
            title="GitHub"
            href="https://github.com/lourot"
            fontAwesomeClasses="fa-brands fa-github"
          />
          <SquareButton
            title="LinkedIn"
            href="https://www.linkedin.com/in/lourot/"
            fontAwesomeClasses="fa-brands fa-linkedin"
          />
          {/*<SquareButton
            title="X / Twitter"
            href="https://twitter.com/alourot"
            fontAwesomeClasses="fa-brands fa-x-twitter"
          />*/}
          <SquareButton
            title="Mastodon"
            href="https://fosstodon.org/@lourot"
            fontAwesomeClasses="fa-brands fa-mastodon"
          />
          <SquareButton
            title="E-mail"
            href="mailto:hi@lourot.dev"
            fontAwesomeClasses="fa-solid fa-envelope"
          />
        </div>
      </SectionWithAvatar>
    </>
  );
}
