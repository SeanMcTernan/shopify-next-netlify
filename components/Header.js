import Link from 'next/link';
import { useAppContext } from 'state';

export default function Header(props) {
  const { itemQuantities } = useAppContext();
  return (
    <header className="app-header">
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
              {itemQuantities > 0 ? (
                <a className="cart cartLink">Shopping Cart ({itemQuantities})</a>
              ) : (
                <a className="cart cartLink">Shopping Cart</a>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <div id="search" style={{ paddingTop: 20 }}></div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    </header>
  );
}
