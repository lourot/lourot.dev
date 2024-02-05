export { Link };

import React from "react";

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
