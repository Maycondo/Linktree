
import ProssionImage from "./assets/image/image-prossion.jpg";
import { useState } from 'react';
import { motion } from "framer-motion";

import { FaSun, FaMoon } from "react-icons/fa";
import { IoPlanet } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { TfiGithub } from "react-icons/tfi";

const IconSocial = [
  {
    name: "Portfólio",
    href: "https://portifolio-maycon-desenvolvedor-software.vercel.app/",
    icon: IoPlanet,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/maycon_d2003/",
    icon: RiInstagramFill,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/82988172684",
    icon: RiWhatsappFill,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/maycon-douglas-b97786306/",
    icon: TbBrandLinkedinFilled,
  },
  {
    name: "GitHub",
    href: "https://github.com/Maycondo",
    icon: TfiGithub,
  },
];


const PanelLinktree = () => {

  const [tema, setogleTheme] = useState<"ModeLight" | "ModeDark">("ModeLight");

  const ModeLight = <FaSun size={20} />;
  const ModeDark = <FaMoon size={20} />;

  const alternarModo = () => {
    setogleTheme((prevState) => {
      const NewState = prevState === 'ModeLight' ? 'ModeDark' : 'ModeLight';

      document.body.classList.remove(prevState);
      document.body.classList.add(NewState);

      return NewState;
    });
  }


  return (
    <div className="panel-main-and-linktree">
      <div className="Mode_Button">
        <button type="button" onClick={alternarModo} aria-label="Alternar tema">
          <motion.span
            key={tema}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.35 }}
            whileHover={{ rotate: 20 }}
            style={{ display: "flex" }}
          >
            {tema === "ModeDark" ? ModeLight : ModeDark}
          </motion.span>
        </button>
      </div>
      <div className="content-linktree-main">
        <motion.div className="content-image-texts" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} >
          <motion.img
            id="image-prossion"
            src={ProssionImage}
            alt="Foto de perfil de Maycon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <h1 id="user-name-text">Maycon</h1>
          <p id="name-user-instagram">@maycon_d2003</p>
          <h4 id="text-profession">Desenvolvedor de Software</h4>
        </motion.div>
        <motion.div className="midias-icons-social-string" initial="hidden" animate="visible"
          variants={{ hidden: {}, visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3,
              },
            },
          }}
        >
        {IconSocial.map(({ name, href, icon: Icon }) => (
          <motion.a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="icon-social" variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }} transition={{ duration: 0.4, ease: "easeOut" }} whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }} >
            <Icon size={25} />
            <span>{name}</span>
          </motion.a>
        ))}
        </motion.div>

        <div className="icons-midias">
          {IconSocial.map(({ name, href, icon: Icon }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="icon-social" >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PanelLinktree;
