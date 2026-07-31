"use client";

import { useEffect, useState } from "react";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2.8 4.4 4.1c-.8.4-1.2 1.3-1 2.2 1.7 7.2 7.3 12.8 14.5 14.5.9.2 1.8-.2 2.2-1l1.3-2.8c.3-.8.1-1.7-.6-2.2l-3-2.1c-.7-.5-1.6-.4-2.2.2l-1.4 1.4a13.5 13.5 0 0 1-4.5-4.5l1.4-1.4c.6-.6.7-1.5.2-2.2l-2.1-3c-.5-.7-1.4-1-2.2-.6Z"/></svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19.5 6.5"/></svg>
);

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [priceFilter, setPriceFilter] = useState<"boissons" | "marques">("boissons");
  const [reviewIndex, setReviewIndex] = useState(0);

  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const products = {
    boissons: [
      ["Thé citron", "4,00 DH"], ["Lait au chocolat", "4,00 DH"],
      ["Café au lait", "4,00 DH"], ["Lait", "4,00 DH"],
      ["Chocolat chaud", "4,00 DH"], ["Cappuccino", "4,00 DH"],
      ["Café expresso", "4,00 DH"], ["Café long", "4,00 DH"],
      ["Café léger", "4,00 DH"],
    ],
    marques: [
      ["Mondial", "4,00 DH"], ["Lavazza", "5,00 DH"],
      ["Carte Noire", "6,00 DH"], ["Expresse", "6,00 DH"],
    ],
  };
  const reviews = [
    {
      quote: "Une gestion fluide au quotidien : la machine reste propre, approvisionnée et disponible pour nos équipes.",
      role: "Responsable de site",
      sector: "Environnement corporate",
    },
    {
      quote: "Le suivi technique et la régularité des passages nous permettent de proposer un vrai service sans charge interne.",
      role: "Direction administrative",
      sector: "Siège d’entreprise",
    },
    {
      quote: "La sélection des boissons a été adaptée aux préférences de nos collaborateurs, avec une mise en place très simple.",
      role: "Office Manager",
      sector: "Centre de services",
    },
  ];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="BIO CAFE — Accueil">
          <strong>BIO CAFE</strong>
          <span>Solutions<br />professionnelles</span>
        </a>
        <button
          className="menu-button"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "open" : ""} aria-label="Navigation principale">
          <a onClick={closeMenu} href="#solutions">Solutions</a>
          <a onClick={closeMenu} href="#service">Services</a>
          <a onClick={closeMenu} href="#tarifs">Tarifs</a>
          <a onClick={closeMenu} href="#clients">Références</a>
          <a onClick={closeMenu} href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow hero-enter enter-1">Distribution · Installation · Service</p>
          <h1 className="hero-enter enter-2">La pause café,<br /><em>entièrement maîtrisée.</em></h1>
          <p className="hero-text hero-enter enter-3">
            Machines professionnelles, approvisionnement régulier et suivi technique :
            une solution complète pensée pour vos équipes et vos espaces.
          </p>
          <div className="hero-actions hero-enter enter-4">
            <a className="button primary" href="#contact">Demander une étude <Arrow /></a>
            <a className="button secondary" href="#solutions">Voir nos solutions</a>
          </div>
          <div className="hero-proof hero-enter enter-5" aria-label="Nos points forts">
            <div><strong>16+ ans</strong><span>Expertise technique</span></div>
            <div><strong>Clé en main</strong><span>Installation & suivi</span></div>
            <div><strong>Offre complète</strong><span>Boissons & snacks</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/hero-production.webp" alt="Distributeur automatique de café professionnel BIO CAFE" />
          <div className="hero-tag"><span>Service</span><strong>Qualité</strong></div>
        </div>
        <p className="vertical-label">BIO CAFE — MAROC</p>
      </section>

      <section className="trust-strip" aria-label="Références BIO CAFE">
        <p>Des espaces de pause gérés pour</p>
        <div className="trust-track">
          {["CNSS", "PEUGEOT", "INTELCIA", "POINT S", "GROUPE OUTSOURCIA", "CNSS", "PEUGEOT", "INTELCIA", "POINT S", "GROUPE OUTSOURCIA"].map((name, index) => (
            <span key={`${name}-${index}`}>{name}</span>
          ))}
        </div>
      </section>

      <section className="intro" id="service">
        <div className="section-kicker reveal" data-reveal><span>01</span> Une solution simple</div>
        <div className="intro-grid">
          <h2 className="reveal" data-reveal>Vous profitez de la pause.<br />Nous gérons <em>tout le reste.</em></h2>
          <div className="intro-copy reveal reveal-delay-1" data-reveal>
            <p>
              BIO CAFE installe et gère vos distributeurs automatiques de boissons
              chaudes, froides et snacks. Du choix de la machine au réassort,
              chaque détail est pris en charge.
            </p>
            <a className="text-link" href="#methode">Découvrir notre méthode <Arrow /></a>
          </div>
        </div>
        <div className="service-cards">
          {[
            ["01", "Installation", "Des équipements fiables, neufs et adaptés à la fréquentation de vos locaux."],
            ["02", "Approvisionnement", "Un réassort régulier, calibré selon les goûts et la consommation de vos équipes."],
            ["03", "Maintenance", "Entretien, contrôle et intervention technique par une équipe expérimentée."],
          ].map(([n, title, text]) => (
            <article className="reveal" data-reveal key={title}>
              <span>{n}</span>
              <div className="service-icon"><Check /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="solutions" id="solutions">
        <div className="section-kicker light reveal" data-reveal><span>02</span> Nos solutions</div>
        <div className="solutions-head">
          <h2 className="reveal" data-reveal>Une machine pour<br /><em>chaque espace.</em></h2>
          <p className="reveal reveal-delay-1" data-reveal>Entreprises, hôpitaux, établissements, espaces publics et sites à forte fréquentation.</p>
        </div>
        <div className="machine-grid">
          <article className="machine-card coffee reveal" data-reveal>
            <div className="machine-content">
              <span>Boissons chaudes</span>
              <h3>Distributeurs<br />de café</h3>
              <p>Expresso, café long, cappuccino, chocolat chaud, thé citron et plus encore.</p>
              <a href="#contact">Étudier cette solution <Arrow /></a>
            </div>
            <img src="/distributeur-cafe.png" alt="Distributeur automatique de café" />
          </article>
          <article className="machine-card snacks reveal reveal-delay-1" data-reveal>
            <div className="machine-content">
              <span>Pause complète</span>
              <h3>Boissons<br />& snacks</h3>
              <p>Boissons fraîches, canettes, eau et collations sélectionnées selon les préférences de vos équipes.</p>
              <a href="#contact">Étudier cette solution <Arrow /></a>
            </div>
            <img src="/distributeur-snacks.png" alt="Distributeur automatique de boissons et snacks" />
          </article>
        </div>
      </section>

      <section className="experience">
        <div className="experience-copy reveal" data-reveal>
          <div className="section-kicker"><span>03</span> Au cœur de vos espaces</div>
          <h2>Une pause qui donne<br /><em>envie de se retrouver.</em></h2>
          <p>Plus qu’une machine : un espace propre, accueillant et toujours prêt, qui valorise le quotidien de vos collaborateurs.</p>
          <div className="experience-points">
            <span><strong>01</strong> Confort au travail</span>
            <span><strong>02</strong> Service disponible</span>
            <span><strong>03</strong> Image professionnelle</span>
          </div>
        </div>
        <div className="experience-image reveal reveal-delay-1" data-reveal>
          <img src="/office-experience.png" alt="Collaborateurs profitant d’un espace café BIO CAFE moderne" />
          <div className="floating-note"><span>Votre espace</span><strong>Toujours accueillant.</strong></div>
        </div>
      </section>

      <section className="method" id="methode">
        <div className="method-photo reveal" data-reveal>
          <img src="/equipe-distributeurs.png" alt="Espace de pause équipé de distributeurs automatiques" />
          <span>Votre espace, notre savoir-faire.</span>
        </div>
        <div className="method-copy reveal reveal-delay-1" data-reveal>
          <div className="section-kicker"><span>04</span> Notre méthode</div>
          <h2>Un service qui s’adapte<br />à <em>votre rythme.</em></h2>
          <ol>
            <li><span>01</span><div><strong>Étude de vos besoins</strong><p>Nous évaluons l’espace, la fréquentation et les attentes de vos collaborateurs.</p></div></li>
            <li><span>02</span><div><strong>Installation & configuration</strong><p>Nous mettons en place la machine, les produits et le mode de paiement adapté.</p></div></li>
            <li><span>03</span><div><strong>Gestion au quotidien</strong><p>Nos équipes assurent le réassort, l’hygiène, le contrôle et la maintenance.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="commitment" id="engagement">
        <div className="reveal" data-reveal>
          <p className="eyebrow">L’engagement BIO CAFE</p>
          <h2>La qualité du café.<br /><em>La qualité du service.</em></h2>
        </div>
        <blockquote className="reveal reveal-delay-1" data-reveal>
          “Notre première exigence est la qualité totale de nos machines,
          de nos produits et de nos services.”
        </blockquote>
        <div className="values reveal" data-reveal>
          {["Hygiène irréprochable", "Produits de qualité", "Suivi régulier", "Équipe expérimentée"].map((value) => (
            <span key={value}><Check /> {value}</span>
          ))}
        </div>
      </section>

      <section className="price-list" id="tarifs">
        <div className="price-intro">
          <div className="section-kicker"><span>05</span> Carte & tarifs</div>
          <h2>Des prix clairs.<br /><em>Pour tous les goûts.</em></h2>
          <p>
            Retrouvez l’intégralité des tarifs communiqués dans notre offre.
            Les boissons fraîches et snacks sont sélectionnés selon vos besoins
            et font l’objet d’une proposition adaptée.
          </p>
          <div className="price-tabs" role="tablist" aria-label="Catégories de prix">
            <button
              className={priceFilter === "boissons" ? "active" : ""}
              onClick={() => setPriceFilter("boissons")}
              role="tab"
              aria-selected={priceFilter === "boissons"}
            >Boissons chaudes</button>
            <button
              className={priceFilter === "marques" ? "active" : ""}
              onClick={() => setPriceFilter("marques")}
              role="tab"
              aria-selected={priceFilter === "marques"}
            >Sélection de marques</button>
          </div>
        </div>
        <div className="price-visual reveal" data-reveal>
          <img src="/boissons-prix.webp" alt="Sélection de boissons chaudes BIO CAFE" />
          <span>Prix TTC par consommation</span>
        </div>
        <div className="price-table reveal reveal-delay-1" data-reveal role="tabpanel">
          <div className="price-table-head"><span>Produit</span><span>Prix</span></div>
          {products[priceFilter].map(([name, price], index) => (
            <div className="price-row" key={name}>
              <span className="price-number">{String(index + 1).padStart(2, "0")}</span>
              <strong>{name}</strong>
              <span>{price}</span>
            </div>
          ))}
          <p className="price-note">Tarifs issus de la proposition commerciale BIO CAFE.</p>
        </div>
      </section>

      <section className="pricing">
        <div>
          <div className="section-kicker"><span>06</span> Une formule flexible</div>
          <h2>La pause à partir de<br /><em>4,00 DH.</em></h2>
        </div>
        <div className="pricing-card reveal reveal-delay-1" data-reveal>
          <span>Option entreprise</span>
          <h3>Subventionnez la pause<br />de vos collaborateurs.</h3>
          <p>
            Gardez le tarif standard ou prenez en charge une partie de chaque
            consommation. La facturation mensuelle est basée sur le relevé réel du compteur.
          </p>
          <div className="split">
            <div><strong>2,00 DH</strong><span>Collaborateur</span></div>
            <div className="plus">+</div>
            <div><strong>2,00 DH</strong><span>Entreprise</span></div>
          </div>
        </div>
      </section>

      <section className="clients" id="clients">
        <div className="clients-head">
          <div>
            <div className="section-kicker light"><span>07</span> Ils nous font confiance</div>
            <h2>Des références qui<br /><em>parlent pour nous.</em></h2>
          </div>
          <p>
            BIO CAFE accompagne des sièges d’entreprises et organisations exigeantes
            dans la gestion quotidienne de leurs espaces de pause.
          </p>
        </div>
        <div className="logo-wall" aria-label="Clients BIO CAFE">
          {[
            ["/client-cnss.png", "CNSS"],
            ["/client-peugeot.png", "Peugeot"],
            ["/client-intelcia.png", "Intelcia"],
            ["/client-points.png", "Point S"],
            ["/client-outsourcia.png", "Groupe Outsourcia"],
          ].map(([src, name]) => (
            <div className="logo-card reveal" data-reveal key={name}><img src={src} alt={name} /><span>{name}</span></div>
          ))}
        </div>
      </section>

      <section className="testimonials" id="avis">
        <div className="testimonial-image">
          <img src="/espace-client.webp" alt="Espace de pause professionnel équipé par BIO CAFE" />
          <div className="image-stat"><strong>5</strong><span>références<br />présentées</span></div>
        </div>
        <div className="testimonial-content">
          <div className="section-kicker"><span>08</span> L’expérience client</div>
          <p className="stars" aria-label="5 étoiles">★★★★★</p>
          <blockquote>“{reviews[reviewIndex].quote}”</blockquote>
          <div className="review-meta">
            <div><strong>{reviews[reviewIndex].role}</strong><span>{reviews[reviewIndex].sector}</span></div>
            <div className="review-controls">
              <button
                aria-label="Avis précédent"
                onClick={() => setReviewIndex((reviewIndex - 1 + reviews.length) % reviews.length)}
              >←</button>
              <span>{reviewIndex + 1} / {reviews.length}</span>
              <button
                aria-label="Avis suivant"
                onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
              >→</button>
            </div>
          </div>
          <p className="review-caption">
            Synthèse des retours les plus fréquemment exprimés sur le service BIO CAFE.
          </p>
        </div>
      </section>

      <section className="expertise-photo">
        <div className="expertise-copy reveal" data-reveal>
          <div className="section-kicker light"><span>09</span> Expertise terrain</div>
          <h2>Plus de 16 ans<br /><em>d’expérience technique.</em></h2>
          <p>Entretien préventif, hygiène, contrôle, réparation et continuité de service.</p>
          <a className="button cream" href="#contact">Planifier une étude <Arrow /></a>
        </div>
        <div className="expertise-visual reveal reveal-delay-1" data-reveal>
          <img src="/technical-service.png" alt="Technicien BIO CAFE assurant la maintenance d’un distributeur" />
          <div className="service-badge"><strong>16+</strong><span>années de<br />savoir-faire</span></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Votre projet commence ici</p>
        <h2>Parlons de votre<br /><em>prochaine pause café.</em></h2>
        <p>Une première étude simple, sans engagement, adaptée à vos locaux et à vos équipes.</p>
        <div className="contact-actions">
          <a className="button cream" href="tel:+212664757055"><PhoneIcon /> 06 64 75 70 55</a>
          <a className="button outline-light" href="tel:+212626005450"><PhoneIcon /> 06 26 00 54 50</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <strong>BIO CAFE</strong>
          <p>Du café de qualité<br />à la qualité de service.</p>
        </div>
        <div><span>Solutions</span><a href="#solutions">Distributeurs café</a><a href="#solutions">Boissons & snacks</a><a href="#service">Gestion complète</a></div>
        <div><span>Contact</span><a href="tel:+212664757055">06 64 75 70 55</a><a href="tel:+212626005450">06 26 00 54 50</a><p>Maroc</p></div>
        <div className="footer-cta"><span>Besoin d’un distributeur ?</span><a href="#contact">Demander une étude <Arrow /></a></div>
        <p className="copyright">© 2026 BIO CAFE. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
