import "../../styles/components/features.css";
import { Truck, ShieldCheck, BadgeCheck, Headset } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Get your orders delivered quickly with our trusted shipping partners.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Multiple safe payment options with encrypted transactions.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description:
      "Every product is carefully selected to meet high quality standards.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Our support team is always ready to help whenever you need us.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-tag">Why Choose Us</span>
            <h2>Why Shop With WayMart?</h2>
            <p>We make online shopping simple, secure, and enjoyable.</p>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <Icon size={32} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
