import { Award, Heart, ShieldCheck, Sparkles, Truck } from "lucide-react";
import "../styles/pages/about.css";

const About = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Quality",
      description:
        "Every product is carefully selected to deliver quality, reliability, and value.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Get your favorite gadgets delivered quickly and safely to your doorstep.",
    },
    {
      icon: Award,
      title: "Premium Selection",
      description:
        "Discover a curated collection of modern electronics and smart accessories.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "We focus on creating a simple, reliable, and enjoyable shopping experience.",
    },
  ];

  return (
    <main className="about-page">
      <div className="container">
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="about-label">
              <Sparkles size={16} />
              About WayMart
            </span>

            <h1>
              Technology that fits
              <span> your way.</span>
            </h1>

            <p>
              WayMart is a modern electronics marketplace built for people who
              want great technology without the complicated shopping experience.
            </p>
          </div>

          <div className="about-hero-card">
            <div className="about-hero-dot"></div>

            <span>WAYMART</span>

            <strong>
              Smart.
              <br />
              Simple.
              <br />
              Modern.
            </strong>
          </div>
        </section>

        <section className="about-story">
          <div className="about-section-heading">
            <span>Our Story</span>
            <h2>Built around better shopping.</h2>
          </div>

          <div className="about-story-content">
            <p>
              We created WayMart with one simple idea: buying technology should
              be easy, transparent, and enjoyable.
            </p>

            <p>
              From everyday accessories to powerful computers, mobile devices,
              gaming products, and audio equipment, WayMart brings carefully
              selected products together in one place.
            </p>

            <p>
              Our goal is not just to sell products. We want to build a shopping
              experience that feels fast, modern, trustworthy, and genuinely
              useful.
            </p>
          </div>
        </section>

        <section className="about-features">
          <div className="about-section-heading centered">
            <span>Why WayMart</span>

            <h2>
              Everything you need.
              <br />
              Nothing you don't.
            </h2>

            <p>We keep the experience focused on what matters.</p>
          </div>

          <div className="about-features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article key={feature.title} className="about-feature-card">
                  <div className="about-feature-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-mission">
          <div className="about-mission-content">
            <span>Our Mission</span>

            <h2>
              Make great technology
              <br />
              accessible to everyone.
            </h2>

            <p>
              Whether you're upgrading your setup, building a gaming station,
              replacing an old device, or simply looking for your next favorite
              gadget, WayMart is here to make the journey easier.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
