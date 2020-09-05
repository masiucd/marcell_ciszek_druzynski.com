import { render } from '@testing-library/react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

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

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
