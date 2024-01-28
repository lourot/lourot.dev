export default HeadDefault;

import React from "react";

function HeadDefault() {
  return (
    <>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Aurélien Lourot" />
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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      />
      {/* So that lourot.dev appears verified on my Mastodon profile */}
      <link rel="me" href="https://fosstodon.org/@lourot" />
    </>
  );
}
