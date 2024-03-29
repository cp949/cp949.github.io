import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import OpenPostDialogEventHandler from 'src/components/custom-event-handlers/OpenPostDialogEventHandler'
import createEmotionCache from 'src/createEmotionCache'
import StoreProvider from 'src/store/StoreProvider'
import theme from 'src/theme'
// import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import '../styles/markdown-ocodia.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>cp949</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <StoreProvider rootStoreInitialState={undefined}>
                    <>
                        <Component {...pageProps} />
                        <OpenPostDialogEventHandler />
                    </>
                </StoreProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}
