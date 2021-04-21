export default function Why() {
  return (
    <section className="why">
      <div className="container">
        <h1 className="why__header">Why Choose Us</h1>
        <p className="why__description">
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands
        </p>
        <section className="why__blocks">
          <div className="why__blocks--item">
            <div className="why__blocks--img"></div>
          </div>
          <div className="why__blocks--item">
              <div className="why__blocks--box"></div>
              <div className="why__blocks--box">
                  <div><i className="fas fa-globe-americas"></i></div>
                  <h1>Passionate Travel</h1>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia</p>
              </div>
              <div className="why__blocks--box">
                  <div><i className="fas fa-map-marked-alt"></i></div>
                  <h1>Beautiful Places</h1>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia</p>
              </div>
              <div className="why__blocks--box"></div>
          </div>
        </section>
      </div>
    </section>
  );
}
