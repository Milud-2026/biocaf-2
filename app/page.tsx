"use client";

import { useState } from "react";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2.8 4.4 4.1c-.8.4-1.2 1.3-1 2.2 1.7 7.2 7.3 12.8 14.5 14.5.9.2 1.8-.2 2.2-1l1.3-2.8c.3-.8.1-1.7-.6-2.2l-3-2.1c-.7-.5-1.6-.4-2.2.2l-1.4 1.4a13.5 13.5 0 0 1-4.5-4.5l1.4-1.4c.6-.6.7-1.5.2-2.2l-2.1-3c-.5-.7-1.4-1-2.2-.6Z"/></svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19.5 6.5"/></svg>
);

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
          <a onClick={closeMenu} href="#engagement">Notre engagement</a>
          <a onClick={closeMenu} href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow">Distribution · Installation · Service</p>
          <h1>La pause café,<br /><em>entièrement maîtrisée.</em></h1>
          <p className="hero-text">
            Machines professionnelles, approvisionnement régulier et suivi technique :
            une solution complète pensée pour vos équipes et vos espaces.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Demander une étude <Arrow /></a>
            <a className="button secondary" href="#solutions">Voir nos solutions</a>
          </div>
          <div className="hero-proof" aria-label="Nos points forts">
            <div><strong>16+ ans</strong><span>Expertise technique</span></div>
            <div><strong>Clé en main</strong><span>Installation & suivi</span></div>
            <div><strong>Offre complète</strong><span>Boissons & snacks</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/hero-production.png" alt="Distributeur automatique de café professionnel BIO CAFE" />
          <div className="hero-tag"><span>Service</span><strong>Qualité</strong></div>
        </div>
        <p className="vertical-label">BIO CAFE — MAROC</p>
      </section>

      <section className="intro" id="service">
        <div className="section-kicker"><span>01</span> Une solution simple</div>
        <div className="intro-grid">
          <h2>Vous profitez de la pause.<br />Nous gérons <em>tout le reste.</em></h2>
          <div className="intro-copy">
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
            <article key={title}>
              <span>{n}</span>
              <div className="service-icon"><Check /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="solutions" id="solutions">
        <div className="section-kicker light"><span>02</span> Nos solutions</div>
        <div className="solutions-head">
          <h2>Une machine pour<br /><em>chaque espace.</em></h2>
          <p>Entreprises, hôpitaux, établissements, espaces publics et sites à forte fréquentation.</p>
        </div>
        <div className="machine-grid">
          <article className="machine-card coffee">
            <div className="machine-content">
              <span>Boissons chaudes</span>
              <h3>Distributeurs<br />de café</h3>
              <p>Expresso, café long, cappuccino, chocolat chaud, thé citron et plus encore.</p>
              <a href="#contact">Étudier cette solution <Arrow /></a>
            </div>
            <img src="/distributeur-cafe.png" alt="Distributeur automatique de café" />
          </article>
          <article className="machine-card snacks">
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

      <section className="method" id="methode">
        <div className="method-photo">
          <img src="/equipe-distributeurs.png" alt="Espace de pause équipé de distributeurs automatiques" />
          <span>Votre espace, notre savoir-faire.</span>
        </div>
        <div className="method-copy">
          <div className="section-kicker"><span>03</span> Notre méthode</div>
          <h2>Un service qui s’adapte<br />à <em>votre rythme.</em></h2>
          <ol>
            <li><span>01</span><div><strong>Étude de vos besoins</strong><p>Nous évaluons l’espace, la fréquentation et les attentes de vos collaborateurs.</p></div></li>
            <li><span>02</span><div><strong>Installation & configuration</strong><p>Nous mettons en place la machine, les produits et le mode de paiement adapté.</p></div></li>
            <li><span>03</span><div><strong>Gestion au quotidien</strong><p>Nos équipes assurent le réassort, l’hygiène, le contrôle et la maintenance.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="commitment" id="engagement">
        <div>
          <p className="eyebrow">L’engagement BIO CAFE</p>
          <h2>La qualité du café.<br /><em>La qualité du service.</em></h2>
        </div>
        <blockquote>
          “Notre première exigence est la qualité totale de nos machines,
          de nos produits et de nos services.”
        </blockquote>
        <div className="values">
          {["Hygiène irréprochable", "Produits de qualité", "Suivi régulier", "Équipe expérimentée"].map((value) => (
            <span key={value}><Check /> {value}</span>
          ))}
        </div>
      </section>

      <section className="pricing">
        <div>
          <div className="section-kicker"><span>04</span> Une formule flexible</div>
          <h2>La pause à partir de<br /><em>4,00 DH.</em></h2>
        </div>
        <div className="pricing-card">
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
