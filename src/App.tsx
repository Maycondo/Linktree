import ProssionImage from "./assets/image/image-prossion.jpg";
import { motion } from "framer-motion";
import "./index.css";

import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaFileDownload,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const links = [
  {
    name: "Portfólio",
    href: "https://portifolio-maycon-desenvolvedor-software.vercel.app/",
    icon: FaArrowRight,
  },
  { name: "GitHub", href: "https://github.com/Maycondo", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/maycon-douglas-b97786306/",
    icon: FaLinkedinIn,
  },
  { name: "Currículo", href: "/curriculo.pdf", icon: FaFileDownload },
  { name: "Contato", href: "mailto:seuemail@exemplo.com", icon: FaEnvelope },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/maycon_d2003/",
    icon: FaInstagram,
  },
  { name: "WhatsApp", href: "https://wa.me/82988172684", icon: FaWhatsapp },
];

const PanelLinktree = () => {
  return (
    <main className="lt">
      <header className="lt-top">
        <span className="lt-badge">
          <i className="lt-dot" />
          Disponível
        </span>
        <img className="lt-avatar" src={ProssionImage} alt="Foto de perfil de Maycon" />
      </header>

      <motion.section className="lt-hero" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} >
        <h1 className="lt-name">
          <span>Maycon</span>
          <span className="lt-name-2">Douglas</span>
        </h1>
        <p className="lt-sub">
          Transformo ideias em soluções digitais com React, Node.js e Python.
        </p>
      </motion.section>

      <nav className="lt-list" aria-label="Links principais">
        {links.map(({ name, href, icon: Icon }, i) => (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="lt-item" >
            <span className="lt-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="lt-label">{name}</span>
            <Icon className="lt-icon" size={14} />
          </a>
        ))}
      </nav>

      <footer className="lt-social">
        {socials.map(({ name, href, icon: Icon }) => (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="lt-sq" >
            <Icon size={16} />
          </a>
        ))}
      </footer>
    </main>
  );
};

export default PanelLinktree;