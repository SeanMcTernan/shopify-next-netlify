import Link from 'next/link';

export default function Header() {
  const logo = require('../public/lflogo.svg').default;
  return (
    <header className="app-header">
      <div>
        <img src={'https://www.lifefitness.com/resource/crblob/1164/260e4ad4ec1b7642864fbe5a149d147c/logo-svg-data.svg'} alt={''} />
      </div>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/">
              <a>All Products</a>
            </Link>
          </li>
          {/* <li className="main-nav-item">
            <Link href="/cheeses"><a>Cheeses</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/meats"><a>Meats</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/boards"><a>Boards</a></Link>
          </li> */}
          <li className="main-nav-item">
            <Link href="/cart">
              <a className="cart cartLink">Shopping Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
