
import ProssionImage from "./assets/image/image-prossion.jpg";
import { useState } from 'react';


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

  const alternarMode = () => {
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
        <button type="button" onClick={alternarMode}>
        {tema === "ModeDark" ? ModeLight : ModeDark}
      </button>
      </div>
      <div className="content-linktree-main">
        <div className="content-image-texts">
          <img id="image-prossion" src={ProssionImage} alt="Foto de perfil de Maycon"/>
          <h1 id="user-name-text">Maycon</h1>
          <p id="name-user-instagram">@maycon_d2003</p>
          <h4 id="text-profession">Desenvolvedor de Software</h4>
        </div>

        <div className="midias-icons-social-string">
          {IconSocial.map(({ name, href, icon: Icon }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="icon-social" >
              <Icon size={25} />
              <span>{name}</span>
            </a>
          ))}
        </div>

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
