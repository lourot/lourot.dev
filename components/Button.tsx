export {
  SquareButton,
  GithubSponsorButton,
  BuymeacoffeeButton,
  PaypalDonateButton,
};

import React from "react";

function SquareButton({
  title,
  href,
  fontAwesomeClasses,
}: {
  title: string;
  href: string;
  fontAwesomeClasses: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={title}>
      <div
        className="inline-flex items-center justify-center size-10 border border-gray-300 rounded"
        title={title}
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
      textStyle={{ verticalAlign: "-.08em" }}
      iconClassName="text-xl fa-brands fa-github"
      iconStyle={{ lineHeight: "2.5rem" }}
      href="https://github.com/sponsors/lourot"
    />
  );
}

function BuymeacoffeeButton() {
  return (
    <SupportButton
      text="Buy me a coffee"
      textStyle={{ lineHeight: "2.4rem", verticalAlign: "-.08em" }}
      iconClassName="fa-solid fa-mug-hot"
      iconStyle={{ verticalAlign: ".02em" }}
      href="https://buymeacoffee.com/lourot"
    />
  );
}

function PaypalDonateButton() {
  return (
    <SupportButton
      text="Donate"
      textStyle={{ verticalAlign: "-.08em" }}
      iconClassName="text-xl fa-brands fa-paypal"
      iconStyle={{ lineHeight: "2.5rem" }}
      href="https://paypal.me/AurelienLourot"
    />
  );
}

function SupportButton({
  text,
  textStyle,
  iconClassName,
  iconStyle,
  href,
}: {
  text: string;
  textStyle?: React.CSSProperties;
  iconClassName: string;
  iconStyle?: React.CSSProperties;
  href: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={text}>
      <div
        className="whitespace-nowrap inline-block px-4 font-medium border border-gray-300 rounded"
        style={{ height: "2.6rem" }}
      >
        <i className={`align-middle ${iconClassName}`} style={iconStyle}></i>
        <span className="ml-3 align-middle" style={textStyle}>
          {text}
        </span>
      </div>
    </a>
  );
}
