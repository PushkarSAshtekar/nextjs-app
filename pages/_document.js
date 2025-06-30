// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Document from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </>
    );
  }
}

export default MyDocument;
