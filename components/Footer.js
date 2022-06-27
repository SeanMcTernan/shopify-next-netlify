export default function Footer() {
  const { ALGOLIA_API_KEY } = process.env;
  const body = {
    appId: 'VXS80WCPYY',
    apiKey: ALGOLIA_API_KEY,
    siteId: '6e0fc743-62a2-41f9-8b6b-de54d5921004',
    branch: 'main',
    selector: 'div#search',
  };
  return (
    <>
      <footer>
        <section className="testimonial">
          <h2>
            <a href="https://www.lifefitness.com/en-us/racks-rigs/hd-athletic">HD ATHLETIC</a>
          </h2>
        </section>
        <p className="text-muted" style={{ textAlign: "center" }}>
          <small>&copy; {new Date().getFullYear()} LifeFitness</small>
        </p>
      </footer>
    </>
  );
}
