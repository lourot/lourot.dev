export default HeadDefault;

import React from "react";
import "../assets/thirdparty/google-fonts/roboto-mono-300.css";
import "../assets/thirdparty/google-fonts/roboto-mono-400.css";
import "../assets/thirdparty/google-fonts/roboto-mono-500.css";

function HeadDefault() {
  return (
    <>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Aurélien Lourot" />
      <meta name="description" content="Aurélien Lourot" />
      <meta
        name="keywords"
        content="aurelien, aurélien, lourot, software, developer, berlin, freelance, engineer, consulting"
      />
      {/* So that lourot.dev appears verified on my Mastodon profile */}
      <link rel="me" href="https://fosstodon.org/@lourot" />
    </>
  );
}
