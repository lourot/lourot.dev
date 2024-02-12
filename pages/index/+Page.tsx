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
        <h2 className="text-xl font-normal">Software Engineer</h2>
        <p className="my-1 font-light">Berlin, Germany</p>
        <div className="flex gap-2 text-xl my-2 text-gray-800">
          <SquareButton
            href="https://github.com/AurelienLourot"
            fontAwesomeClasses="fa-brands fa-github"
          />
          <SquareButton
            href="https://twitter.com/AurelienLourot"
            fontAwesomeClasses="fa-brands fa-x-twitter"
          />
          <SquareButton
            href="https://fosstodon.org/@lourot"
            fontAwesomeClasses="fa-brands fa-mastodon"
          />
          <SquareButton
            href="https://www.linkedin.com/in/lourot/"
            fontAwesomeClasses="fa-brands fa-linkedin"
          />
          <SquareButton
            href="mailto:hi@lourot.dev"
            fontAwesomeClasses="fa-solid fa-envelope"
          />
          <SquareButton
            href="https://discord.com/invite/hfHhnJyVg8"
            fontAwesomeClasses="fa-brands fa-discord"
          />
        </div>
      </SectionWithAvatar>
      <Section>
        <div>
          Programming since I was twelve. From embedded systems to web via
          DevOps, among others. Excited about software development, with
          opinions, doubts and attention to detail.
        </div>
      </Section>
      <Section>
        <h2 className="font-medium mb-5">
          Currently co-maintaining these open-source projects:
        </h2>
        <WorkItem imgSrc={vikeUrl} href="https://vike.dev">
          <div>
            <Link>vike.dev</Link>
          </div>
          <div>JavaScript web app framework</div>
          <div>Fast, modular, Vite-based</div>
        </WorkItem>
        <WorkItem imgSrc={batiUrl} href="https://batijs.github.io">
          <div>
            <Link>batijs.github.io</Link>
          </div>
          <div>Next-gen web app scaffolder</div>
        </WorkItem>
        <WorkItem
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
          Available for new projects ideally combining these traits:
          <ul className="list-disc">
            <Li className="mt-2">Developing open-source software,</Li>
            <Li>For-good / non-profit,</Li>
            <Li>In combination with my current projects,</Li>
            <Li>
              Opportunity to learn new, reusable technical skills (especially in
              web dev),
            </Li>
            <Li>Flexible working hours and location.</Li>
          </ul>
        </div>
      </Section>
    </>
  );
}

function WorkItem({
  imgSrc,
  href,
  last,
  children,
}: {
  imgSrc: string;
  href: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        "work-item border border-gray-300 rounded max-w-96 " +
        (last ? "" : "mb-6")
      }
    >
      <a href={href} target="_blank">
        <div className="p-3">
          <img className="float-left mr-5 mb-5" src={imgSrc} />
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
