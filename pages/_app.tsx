import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import '../styles/base.scss'

import type { AppProps } from 'next/app'
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
