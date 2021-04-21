export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__browse">
          <h1>Browse Tours By Activity</h1>
          <ul className="newsletter__list">
              <li className="newsletter__list--item">Outdoor Activites</li>
              <li className="newsletter__list--item">Cultural & Thematic Tours</li>
              <li className="newsletter__list--item">Family Friendly Tours</li>
              <li className="newsletter__list--item">Holiday & Seasonal Tours</li>
              <li className="newsletter__list--item">City Tours</li>
              <li className="newsletter__list--item">Indulgence & Luxury Tours</li>
              <li className="newsletter__list--item">Relaxation Tours</li>
              <li className="newsletter__list--item">Wild & Adventure Tours</li>
          </ul>
        </div>
        <div className="newsletter__news">
            <h3 className="newsletter__news--header">Newsletter</h3>
            <p className="newsletter__news--description">Subscribe for updates & promotions</p>
            <div className="newsletter__news--form">
                <input type="text" placeholder="Enter a valid email address" />
                <button>Submit</button>
            </div>
            <ul className="newsletter__news--links">
                <li><i className="fab fa-facebook-f"></i></li>
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-instagram"></i></li>
                <li><i className="fab fa-youtube"></i></li>
                <li><i className="fab fa-linkedin-in"></i></li>
                <li><i className="fab fa-google-plus-g"></i></li>
            </ul>
        </div>
      </div>
    </section>
  );
}
