export default Page;

import React from "react";
import avatarUrl from "../../assets/avatar.jpeg";
import vikeUrl from "../../assets/vike.svg";
import batiUrl from "../../assets/bati.svg";
import framerightUrl from "../../assets/frameright.png";

function Page() {
  return (
    <main className="max-w-4xl mx-auto p-5 sm:p-10">
      <Section>
        <div className="float-left mb-5 sm:mr-10 w-full sm:w-fit">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
            <img src={avatarUrl} className="scale-105" />
          </div>
        </div>
        <span className="block w-fit mx-auto sm:inline">
          <h1 className="text-2xl font-medium">Aurélien Lourot</h1>
          <h2 className="text-xl font-normal">Software Engineer</h2>
          <p className="my-1 font-light">Berlin, Germany</p>
          <div className="text-xl my-2 text-gray-800">
            <SquareButton
              href="https://github.com/AurelienLourot"
              fontAwesomeClasses="fa-brands fa-github"
            />
            <SquareButton
              href="https://twitter.com/AurelienLourot"
              fontAwesomeClasses="fa-brands fa-twitter"
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
        </span>
      </Section>
      <Section>
        <div>
          Writing good and bad software for quite some time. From embedded
          systems to Web via DevOps, among others. Excited about programming,
          with opinions, doubts and attention to detail.
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
        <SponsorButton />
      </Section>
      <Section last>
        <div className="mb-5">
          Spending most of my time building{" "}
          <Link href="https://vike.dev">Vike</Link>, a web app framework similar
          to Next.js and Nuxt.
        </div>
        <div className="mb-5">
          Available part-time for new projects ideally combining these traits:
          <ul className="list-disc">
            <Li className="mt-2">Developing open-source software, and/or</Li>
            <Li>For-good / non-profit, and/or</Li>
            <Li>
              In combination with my current projects (
              <Link href="https://vike.dev">Vike</Link>,{" "}
              <Link href="https://docs.frameright.io/introduction/">
                Frameright
              </Link>
              ), and/or
            </Li>
            <Li>
              Opportunity to learn new, reusable technical skills (especially in
              web dev).
            </Li>
          </ul>
        </div>
        <div>
          Reach out if you think we can be a match. I'm also available for
          occasional exchanges and consulting in case you or your team needs
          advice, for example on an issue related to web app frameworks.
        </div>
      </Section>
    </main>
  );
}

function Section({
  className,
  last,
  children,
}: {
  className?: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={
        "mx-auto py-10 " + (last ? "" : "border-b border-gray-300 ") + className
      }
    >
      {children}
    </section>
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

function SquareButton({
  className,
  href,
  fontAwesomeClasses,
}: {
  className?: string;
  href: string;
  fontAwesomeClasses: string;
}) {
  return (
    <a href={href} target="_blank">
      <div
        className={
          "inline-flex items-center justify-center size-8 mr-2 border border-gray-300 rounded " +
          className
        }
      >
        <i className={fontAwesomeClasses}></i>
      </div>
    </a>
  );
}

function SponsorButton() {
  return (
    <a href="https://github.com/sponsors/AurelienLourot" target="_blank">
      <span className="inline-block px-4 py-2 font-medium border border-gray-300 rounded">
        <span className="sponsor-text">
          <i className="fa-regular fa-heart"></i> LA_TEMP
        </span>
      </span>
    </a>
  );
}

function Li({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <li className={"ml-6 " + className}>{children}</li>;
}

function Link({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  const className = "text-sky-700 underline";
  if (href) {
    return (
      <a href={href} target="_blank" className={className}>
        {children}
      </a>
    );
  }
  return <span className={className}>{children}</span>;
}
