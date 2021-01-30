import Head from 'next/head'

function HeadConfig() {
  return (
    <div>
      <Head>
        <title>Le Quiz - um quiz sobre gatos e gatas</title>
        <meta property="og:title" content="Le Quiz - sobre gatos e gatas" key="title" />
        <meta property="og:description" content="Uma página de desafios sobre gatos e gatas. A page with a quiz about cats and kittens."/>
        <meta property="og:image" content="https://mywebsite.net/assets/opengraph/theogimage.jpg"/>
      </Head>
    </div>
  )
}

export default HeadConfig
