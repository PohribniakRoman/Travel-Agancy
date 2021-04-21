export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <nav className="banner__nav">
          <nav className="banner__nav--logo"><div>TA</div>Trevel Agancy</nav>
          <nav className="banner__nav--menu">
            <nav className="banner__nav--menu-item">Home</nav>
            <nav className="banner__nav--menu-item">Blog</nav>
            <nav className="banner__nav--menu-item">Contacts</nav>
            <nav className="banner__nav--menu-item">Page 1</nav>
            <nav className="banner__nav--menu-item">Page 2</nav>
          </nav>
        </nav>
        <div className="banner__offer">
            <h1 className="banner__offer--header">Travel</h1>
            <p className="banner__offer--description">Here are my favorite travel and adventure quotes, paired with images from my journeys around the world.</p>
            <button className="banner__offer--button">Read more</button>
        </div>
      </div>
    </section>
  );
}
