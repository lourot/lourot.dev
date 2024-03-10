export default Page;

import React from "react";
import { Section, SectionWithAvatar } from "../../layouts/Section";
import { Link } from "../../components/Link";
import {
  SquareButton,
  GithubSponsorButton,
  BuymeacoffeeButton,
  PaypalDonateButton,
} from "../../components/Button";
import vikeUrl from "../../assets/vike.svg";
import batiUrl from "../../assets/bati.svg";
import framerightUrl from "../../assets/frameright.png";

function Page() {
  return (
    <>
      <SectionWithAvatar>
        <h1 className="text-2xl font-medium">Aurélien Lourot</h1>
        <p className="text-xl font-normal">Software Engineer</p>
        <p className="my-1 font-light">Berlin, Germany</p>
        <div className="flex gap-1 text-2xl mt-4 text-gray-800">
          <SquareButton
            title="GitHub"
            href="https://github.com/lourot"
            fontAwesomeClasses="fa-brands fa-github"
          />
          <SquareButton
            title="X / Twitter"
            href="https://twitter.com/alourot"
            fontAwesomeClasses="fa-brands fa-x-twitter"
          />
          <SquareButton
            title="Mastodon"
            href="https://fosstodon.org/@lourot"
            fontAwesomeClasses="fa-brands fa-mastodon"
          />
          <SquareButton
            title="LinkedIn"
            href="https://www.linkedin.com/in/lourot/"
            fontAwesomeClasses="fa-brands fa-linkedin"
          />
          <SquareButton
            title="E-mail"
            href="mailto:hi@lourot.dev"
            fontAwesomeClasses="fa-solid fa-envelope"
          />
        </div>
      </SectionWithAvatar>
      <Section>
        <p>
          Programming since I was twelve. From embedded systems to web via
          DevOps, among others. Excited about software development, with
          opinions, doubts and attention to detail.
        </p>
      </Section>
      <Section>
        <p className="font-medium mb-5">Recent open-source projects:</p>
        <WorkItem name="Vike" imgSrc={vikeUrl} href="https://vike.dev">
          <div>
            <Link>vike.dev</Link>
          </div>
          <div>JavaScript web app framework</div>
          <div>Fast, modular, Vite-based</div>
        </WorkItem>
        <WorkItem name="Bati" imgSrc={batiUrl} href="https://batijs.github.io">
          <div>
            <Link>batijs.github.io</Link>
          </div>
          <div>Next-gen web app scaffolder</div>
        </WorkItem>
        <WorkItem
          name="Frameright"
          imgSrc={framerightUrl}
          href="https://docs.frameright.io/introduction"
        >
          <div>
            <Link>frameright.io</Link>
          </div>
          <div>Next-gen responsive images</div>
        </WorkItem>
        <div className="flex flex-wrap gap-x-4 gap-y-3">
          <GithubSponsorButton />
          <BuymeacoffeeButton />
          <PaypalDonateButton />
        </div>
      </Section>
      <Section>
        <div className="mb-5">
          <p>Available for new projects ideally combining these traits:</p>
          <ul className="list-disc">
            <Li className="mt-2">Open-source,</Li>
            <Li>For-good / non-profit,</Li>
            <Li>Freelance / flexible part-time.</Li>
          </ul>
        </div>
      </Section>
    </>
  );
}

function WorkItem({
  name,
  imgSrc,
  href,
  children,
}: {
  name: string;
  imgSrc: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="work-item border border-gray-300 rounded max-w-96 mb-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
      >
        <div className="p-3">
          <img
            className="float-left mr-5 mb-5"
            src={imgSrc}
            alt={`${name}'s logo`}
          />
          {children}
        </div>
      </a>
    </div>
  );
}

function Li({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <li className={"ml-7 mb-2 sm:mb-0 px-2 " + className}>{children}</li>;
}
