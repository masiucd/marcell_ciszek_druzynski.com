import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Page from '../components/Page'

const theme: DefaultTheme = {
  appSize: '100%',
  borderRadius: '4px',
  colors: {
    bg: '#f8f5f2',
    button: '#078080',
    headline: '#232323',
    buttonText: '#232323',
    paragraph: '#222525',
    highlight: '#078080',
    main: '#fffffe',
    stroke: '#232323',
    secondary: '#f45d48',
    tertiary: '#f8f5f2',
  },
  size: {
    h1: '3.052em',
    h2: '2.441em',
    h3: '1.953em',
    h4: '1.563em',
    h5: '1.25em',
    p: '1.15em',
    a: '1em',
    maxWidth: '970px',
    navHeight: '12rem',
  },
  shadow: {
    elevations: [
      '0 0 0 1px rgba(0, 0, 0, 0.05)',
      '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      '0 0 0 3px rgba(66, 153, 225, 0.5)',
    ],
  },
  transition: {
    mainTransition: 'all .3s linear',
    secondaryTransition: 'all 1s ease',
    quickTransition: 'all 200ms ease-in-out',
  },
}

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Emotion and React</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  )
}
export default App
