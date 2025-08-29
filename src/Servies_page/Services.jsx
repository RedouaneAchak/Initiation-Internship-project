import './Services.css';
import { Battery, Leaf, Timer, Zap, PenTool, Shield } from 'lucide-react';

const services = [
  {
    icon: Battery,
    title: "Installation Résidentielle",
    description: "Solutions solaires personnalisées pour votre maison",
    features: [
      "Panneaux solaires haute performance",
      "Systèmes de stockage d'énergie",
      "Installation professionnelle",
      "Garantie 25 ans"
    ]
  },
  {
    icon: Leaf,
    title: "Solutions Commerciales",
    description: "Systèmes solaires pour entreprises et industries",
    features: [
      "Installations à grande échelle",
      "Optimisation de la consommation",
      "Retour sur investissement rapide",
      "Maintenance préventive"
    ]
  },
  {
    icon: Timer,
    title: "Maintenance",
    description: "Service et entretien de vos installations solaires",
    features: [
      "Inspections régulières",
      "Nettoyage des panneaux",
      "Réparations rapides",
      "Surveillance à distance"
    ]
  },
  {
    icon: Zap,
    title: "Systèmes Hybrides",
    description: "Solutions combinées pour une efficacité maximale",
    features: [
      "Intégration réseau/solaire",
      "Gestion intelligente",
      "Backup automatique",
      "Économies optimisées"
    ]
  },
  {
    icon: PenTool,
    title: "Conseil Technique",
    description: "Expertise professionnelle pour votre projet",
    features: [
      "Étude de faisabilité",
      "Dimensionnement optimal",
      "Analyse de rentabilité",
      "Support technique"
    ]
  },
  {
    icon: Shield,
    title: "Garantie & Support",
    description: "Accompagnement complet et garantie de qualité",
    features: [
      "Garantie matériel",
      "Support 24/7",
      "Maintenance préventive",
      "Suivi de performance"
    ]
  }
];

export default function Services() {
  return (
    <section className="services-page">
      <h1 id="services">SERVICES</h1>

      <div className="services-grid">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <article key={i} className="service-card">
              <div className="service-icon-wrap">
                <Icon className="service-icon" size={36} />
              </div>

              <h2 className="service-title">{s.title}</h2>
              <p className="service-desc">{s.description}</p>

              <ul className="service-features">
                {s.features.map((f, idx) => (
                  <li key={idx} className="service-element">{f}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

