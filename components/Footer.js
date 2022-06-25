export default function Footer() {
  return (
    <>
      <footer>
        <section className="testimonial">
          <h2>
            <a href="https://www.lifefitness.com/en-us/racks-rigs/hd-athletic">HD ATHLETIC</a>
          </h2>
        </section>
        <section className="app-footer-links">
          <ul>
            <li>About</li>
            <li>Company</li>
            <li>Locations</li>
            <li>Contact</li>
            <li>Hours</li>
          </ul>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          <div className="newsletter">
            <h2 className="newsletter-title">Sign up for our newsletter:</h2>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </section>
        <div className="project-credit">
          <p>
            <small>&copy; {new Date().getFullYear()} LifeFitness</small>
          </p>
        </div>
      </footer>
    </>
  );
}
