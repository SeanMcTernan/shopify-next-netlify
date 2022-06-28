import { AppWrapper } from '../state.js'; // import based on where you put it
import '@styles/globals.css';
import Script from 'next/script'
import { useEffect } from 'react';

export function Application({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
      <Script
        id="search"
        src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"
        onLoad={() => {
          algoliasearchNetlify({
            appId: 'VXS80WCPYY',
            apiKey: process.env.NEXT_PUBLIC_ALGOLIA_FRONTEND_API_KEY,
            siteId: '6e0fc743-62a2-41f9-8b6b-de54d5921004',
            branch: 'main',
            selector: 'div#search',
          }, [])
        }}
      />
    </AppWrapper>
  );
}

export default Application;
