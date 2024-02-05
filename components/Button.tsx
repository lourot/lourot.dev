export { SquareButton, GithubSponsorButton, PaypalDonateButton };

import React from "react";

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

function GithubSponsorButton() {
  return (
    <SupportButton
      text="Sponsor me"
      iconClassName="fa-brands fa-github"
      href="https://github.com/sponsors/AurelienLourot"
    />
  );
}

function PaypalDonateButton() {
  return (
    <SupportButton
      text="Donate"
      iconClassName="fa-brands fa-paypal"
      href="https://paypal.me/AurelienLourot"
    />
  );
}

function SupportButton({
  text,
  iconClassName,
  href,
}: {
  text: string;
  iconClassName: string;
  href: string;
}) {
  return (
    <a href={href} target="_blank">
      <div className="whitespace-nowrap inline-block px-4 font-medium border border-gray-300 rounded">
        <i className={`text-2xl align-middle leading-10 ${iconClassName}`}></i>
        <span style={{ verticalAlign: "-.08em" }}> {text}</span>
      </div>
    </a>
  );
}
