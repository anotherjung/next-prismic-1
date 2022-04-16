import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';
import { nanoid } from 'nanoid'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const nonce = nanoid()
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      const initialProps = await Document.getInitialProps(ctx)
      const additionalProps = await ctx.defaultGetInitialProps(ctx, { nonce })
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      return {
        ...initialProps, ...additionalProps, nonce,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const { nonce } = this.props;
    return (
      <Html>
        <Head nonce={nonce}>
        <meta property="csp-nonce" content={nonce} />
          {/* Styled-JSX will add this `nonce` to style tags on Client Side Rendering */}
          {/* https://github.com/vercel/styled-jsx/blob/master/src/lib/stylesheet.js#L31 */}
          {/* https://github.com/vercel/styled-jsx/blob/master/src/lib/stylesheet.js#L240 */}
          <meta property="csp-nonce" content={this.props.nonce} />
          <script nonce={nonce} dangerouslySetInnerHTML={{ __html: `window.__webpack_nonce__ = "${nonce}"` }} />
          <script nonce={nonce} dangerouslySetInnerHTML={{ __html: `window.__style_nonce__ = "${nonce}"` }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}