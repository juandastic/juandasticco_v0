// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Fragment } from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // script contents onto page
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-138270849-1');
      `
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="google-site-verification" content="VtzMwHjX11woX_gf2hqlJfiaok5ao9IZihqNqm9qNqM" />
          <meta property="og:title" content="Juan David Gomez" />
          <meta name="author" content="Juan David Gomez" />
          <meta property="og:locale" content="en_US" />
          <meta name="description" content="Front-end Developer that creates Modern and Helpful Web Applications" />
          <meta property="og:description" content="Front-end Developer" />
          <link rel="canonical" href="https://juandastic.co/" />
          <meta property="og:url" content="https://juandastic.co/" />
          <meta property="og:site_name" content="Juan David Gomez" />
          <meta property="og:image" content="https://juandastic.co/static/projects/juandastic.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="" />
          <meta name="twitter:creator" content="@juandastic" />
          <meta name="twitter:title" content="Juan David Gomez" />
          <meta name="twitter:description" content="Front-end Developer. I create Modern and Helpful Web Applications" />
          <meta name="twitter:image" content="https://juandastic.co/static/projects/juandastic.png" />
          <meta name="twitter:image:alt" content="Juan David Gomez" />
           <title>Juan David Gómez | Front-end Developer</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Fragment>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138270849-1"></script>
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          </Fragment>
        </body>
      </Html>
    );
  }
}

export default MyDocument;