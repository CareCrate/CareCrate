import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Layout from '@/components/layout'
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: 'light'
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: {
              variant: 'contained'
            },
            style: {
              backgroundColor: '#C2AFF0', // Purple
              opacity: '80%',
              transition: 'background-color .2s, box-shadow .2s, color .2s',
              '&:hover': {
                backgroundColor: '#C2AFF0',
                opacity: '100%'
              }
            }
          }
        ]
      }
    }
  });

  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CssBaseline>
      </ThemeProvider>
    </SessionProvider>
  )
}
