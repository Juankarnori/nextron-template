import '../styles/globals.css'
import React from 'react';
import Head from 'next/head';
import type {AppProps} from 'next/app';
import {CssBaseline, ThemeProvider} from '@mui/material';
// import theme from '../lib/theme';
import type {EmotionCache} from "@emotion/cache";
import createEmotionCache from '../lib/create-emotion-cache';
import {CacheProvider} from '@emotion/react';
import { lightTheme } from '../themes';
import { UiProvider } from '../context/ui';

const clientSideEmotionCache = createEmotionCache();

type MyAppProps = AppProps & {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const {Component, pageProps, emotionCache = clientSideEmotionCache} = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <UiProvider>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </UiProvider>
        </CacheProvider>
    )
}
