export default Page;

import React from "react";
import avatarUrl from "../../assets/avatar.jpeg";

function Page() {
  return (
    <main className="font-light max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto my-5 sm:my-10 p-10 sm:border border-gray-300 rounded-md">
      <section className="mx-auto">
        <div className="float-left mb-5 sm:mr-10 w-full sm:w-fit">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
            <img src={avatarUrl} className="scale-105" />
          </div>
        </div>
        <h1 className="text-2xl font-medium">Aurélien Lourot</h1>
        <h2 className="text-xl font-normal">Software Engineer</h2>
        <p className="my-1">Berlin, Germany</p>
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
      </section>
    </main>
  );
}

function Button({
  href,
  fontAwesomeClasses,
}: {
  href: string;
  fontAwesomeClasses: string;
}) {
  return (
    <a href={href} target="_blank">
      <div className="inline-flex items-center justify-center size-8 mr-3 border border-gray-300 rounded">
        <i className={fontAwesomeClasses}></i>
      </div>
    </a>
  );
}
