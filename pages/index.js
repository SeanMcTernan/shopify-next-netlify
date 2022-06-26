import Head from "next/head";
import ProductListing from "@components/ProductListing";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getProductList } from "@api/getProductList";
import Script from 'next/script'

export default function Home({ products }) {
  const key = process.env.ALGOLIA_FRONTEND_API_KEY
  return (
    <>
      <Script
        id="stripe-js"
        src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"
        onLoad={() => {
          algoliasearchNetlify({
            appId: 'VXS80WCPYY',
            apiKey: process.env.ALGOLIA_FRONTEND_API_KEY,
            siteId: '6e0fc743-62a2-41f9-8b6b-de54d5921004',
            branch: 'main',
            selector: 'div#search',
          })
        }}
      />
      <Head>
        <title>Fitness & Exercise Equipment for Your Facility or Home | Life Fitness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div id="search" style={{ position: 'relative' }}></div>
      <main>
        <ul className="product-grid">
          {products.map((p, index) => {
            return <ProductListing key={`product${index}`} product={p.node} />;
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductList();

  return {
    props: {
      products,
    },
  };
}
