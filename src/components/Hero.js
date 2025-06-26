function Hero() {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img
          src="/images/hero.jpg"
          alt="Restaurant interior"
          className="hero-img"
        />
      </div>
      <div className="hero-text">
        <h2>Welcome to Little Lemon</h2>
        <p>Authentic Mediterranean flavors, freshly served.</p>
      </div>
    </section>
  );
}

export default Hero;
