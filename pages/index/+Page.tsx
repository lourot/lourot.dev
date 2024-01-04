export default Page;

import React from "react";
import avatarUrl from "../../assets/avatar.jpeg";

function Page() {
  return (
    <main className="max-w-4xl mx-auto p-5 sm:p-10">
      <section className="mx-auto pb-10 border-b border-gray-300">
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
            <Button
              href="https://github.com/AurelienLourot"
              fontAwesomeClasses="fa-brands fa-github"
            />
            <Button
              href="https://twitter.com/AurelienLourot"
              fontAwesomeClasses="fa-brands fa-twitter"
            />
            <Button
              href="https://www.linkedin.com/in/lourot/"
              fontAwesomeClasses="fa-brands fa-linkedin"
            />
            <Button
              href="mailto:hi@lourot.dev"
              fontAwesomeClasses="fa-solid fa-envelope"
            />
          </div>
        </span>
      </section>
      <section className="mx-auto pt-10">
        <div className="mb-5">
          Writing good and bad software for quite some time. From embedded
          systems to Web via DevOps, among others. Excited about programming,
          with opinions, doubts and attention to detail.
        </div>
        <div className="mb-5">
          Currently spending most of my time building Vike, a web framework
          similar to Next.js and Nuxt.
        </div>
        <div className="mb-5">
          Available part-time for new projects which would combine as many of
          these points as possible:
          <ul className="list-disc">
            <Li className="mt-2">Developing open-source software, and/or</Li>
            <Li>For-good / non-profit, and/or</Li>
            <Li>
              In combination with my current projects (Vike, Frameright), and/or
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
          advice, for example on an issue related to web frameworks.
        </div>
      </section>
    </main>
  );
}

function Button({
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
          "inline-flex items-center justify-center size-8 mr-3 border border-gray-300 rounded " +
          className
        }
      >
        <i className={fontAwesomeClasses}></i>
      </div>
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
