import React from 'react';
import Head from 'next/head';

function HeadConfig() {
  return (
    <div>
      <Head>
        <title>Le Quiz - O quiz de gatos mais fofo que existe!</title>

        <meta name="title" content="Le Quiz - O quiz de gatos mais fofo que existe!" />
        <meta
          name="description"
          content="Um quiz de curiosidades sobre 🐈 gatinhos, gatas, bichanos e felinos 🐱. A quiz of curiosities about kitty, kitten and cats."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Le Quiz - O quiz de gatos mais fofo que existe!" />
        <meta
          property="og:description"
          content="Um quiz de curiosidades sobre 🐈 gatinhos, gatas, bichanos e felinos 🐱. A quiz of curiosities about kitty, kitten and cats."
        />
        <meta property="og:image" content="https://lequiz.edemarsantos.vercel.app/img/ogimg.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Le Quiz - O quiz de gatos mais fofo que existe!" />
        <meta
          property="twitter:description"
          content="Um quiz de curiosidades sobre 🐈 gatinhos, gatas, bichanos e felinos 🐱. A quiz of curiosities about kitty, kitten and cats."
        />
        <meta property="twitter:image" content="https://lequiz.edemarsantos.vercel.app/img/ogimg.png" />
      </Head>
    </div>
  );
}

export default HeadConfig;
