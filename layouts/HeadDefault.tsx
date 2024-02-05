export default HeadDefault;

import React from "react";

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
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
        rel="stylesheet"
      />
      {/* So that lourot.dev appears verified on my Mastodon profile */}
      <link rel="me" href="https://fosstodon.org/@lourot" />
    </>
  );
}
