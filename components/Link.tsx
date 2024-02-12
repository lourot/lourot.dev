export { Link, HomeLink };

import React from "react";

function Link({
  href,
  ariaLabel,
  children,
}: {
  href?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  const className = "text-sky-700 visited:text-purple-800 underline";
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("/") ? "" : "_blank"}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <span className={className} aria-label={ariaLabel}>
      {children}
    </span>
  );
}

function HomeLink() {
  return (
    <div>
      <Link href="/" ariaLabel="Back to home page">
        &larr; home
      </Link>
    </div>
  );
}
