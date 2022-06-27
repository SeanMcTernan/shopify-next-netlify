import { useState, useEffect } from "react";
import Head from "next/head";
import ProductListing from "@components/ProductListing";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { query } from "@api/query";

export default function AllProducts() {
  const url = process.env.NEXT_PUBLIC_SHOPIFY_API_ENDPOINT
  const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN
  const [data, setData] = useState(null)
  useEffect(async () => {
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token":
            key,
        },
        body: JSON.stringify(query),
      }).then((res) => res.json());

      if (result.errors) {
        console.log({ errors: result.errors });
      } else if (!result || !result.data) {
        console.log({ result });
        return "No results found.";
      }
      setData(result.data.products.edges);
      console.log();
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }, [])
  if (!data) return <p>Loading...</p>
  return (
    <>
      <Head>
        <title>Fitness & Exercise Equipment for Your Facility or Home | Life Fitness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div id="search" style={{ position: 'relative' }}></div>
      <main>
        <ul className="product-grid">
          {data.map((p, index) => {
            return <ProductListing key={`product${index}`} product={p.node} />;
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}