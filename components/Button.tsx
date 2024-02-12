export {
  SquareButton,
  GithubSponsorButton,
  BuymeacoffeeButton,
  PaypalDonateButton,
};

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
          "inline-flex items-center justify-center size-8 border border-gray-300 rounded " +
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
      textStyle={{ verticalAlign: "-.08em" }}
      iconClassName="text-xl fa-brands fa-github"
      iconStyle={{ lineHeight: "2.5rem" }}
      href="https://github.com/sponsors/AurelienLourot"
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
    <a href={href} target="_blank">
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
