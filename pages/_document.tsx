import React from 'react'
import Document, {Head, Main, NextScript, Html, DocumentContext, DocumentInitialProps} from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="eng-us">
                <Head>
                    <title>Happy senior</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
                          rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript />
                </body>
            </Html>
        )
    }
}
