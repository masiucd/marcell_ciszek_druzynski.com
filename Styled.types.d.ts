import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    appSize: string
    borderRadius: string
    colors: {
      bg: string
      button: string
      headline: string
      buttonText: string
      paragraph: string
      stroke: string
      main: string
      highlight: string
      secondary: string
      tertiary: string
    }
    size: {
      h1: string
      h2: string
      h3: string
      h4: string
      h5: string
      p: string
      a: string
      maxWidth: string
      navHeight: string
    }
    transition: {
      mainTransition: string
      secondaryTransition: string
      quickTransition: string
    }
    shadow: {
      elevations: Array<string>
    }
  }
}
