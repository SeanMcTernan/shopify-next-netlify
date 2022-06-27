import Link from 'next/link';
import Script from 'next/script'

export default function Header() {
  return (
    <header className="app-header">
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
          })
        }}
      />
      <div>
        <img src={'https://www.lifefitness.com/resource/crblob/1164/260e4ad4ec1b7642864fbe5a149d147c/logo-svg-data.svg'} alt={''} />
      </div>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/">
              <a>Top Products</a>
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="/allProducts">
              <a>All Products</a>
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="/"><a>About</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/"><a>Contact</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/cart">
              <a className="cart cartLink">Shopping Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div id="search"></div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    </header>
  );
}
