import React, { useState /*, useEffect removed */ } from 'react'; // Remove useEffect import
import './main.scss';

export default function App() {
  // --- Data for Code Icons ---
  const codeTools = [
    { name: "Visual Studio Code", src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519', alt: 'Visual Studio Code Logo'},
    { name: "HTML", src: 'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png', alt: 'HTML5 Logo'},
    { name: "Python", src: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png', alt: 'Python Logo'},
    { name: "C", src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png', alt: 'C Language Logo'},
    { name: "C++", src: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png', alt: 'C++ Language Logo'},
    { name: "Java", src: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png', alt: 'Java Logo'},
    { name: "JavaScript", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4fkV1SpW6hK6fS7Ig7FAk6_y2ADAawey9Q&s', alt: 'JavaScript Logo'},
    { name: "Arduino", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxt3aihtIX0TuNK0fOlV4f1Bga5T9D3SWYg&s', alt: 'Arduino Logo'},
    { name: "Linux OS", src: 'https://www.pngplay.com/wp-content/uploads/12/Linux-Transparent-Image.png', alt: 'Linux Logo (Tux)'},
    { name: "Kali Linux", src: 'https://img.icons8.com/carbon_copy/600/F25081/kali-linux.png', alt: 'Kali Linux Logo'},
    { name: "Ubuntu", src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/1024px-UbuntuCoF.svg.png', alt: 'Ubuntu Logo'},
  ];

  // --- State Management ---
  const [activeSocialTooltip, setActiveSocialTooltip] = useState<string | null>(null);
  const [activeCodeTooltip, setActiveCodeTooltip] = useState<string | null>(null);

  // --- Data for Social Icons ---
  const socialIcons = [
    { title: "ariaprks@gmail.com", src: "https://img.icons8.com/ios-filled/50/F25081/email.png", alt: "Email", className: "email-icon" },
    { title: "@aria.anim", src: "https://img.icons8.com/ios-filled/50/F25081/instagram-new.png", alt: "Instagram", className: "instagram-icon" },
    { title: "ariaforehead", src: "https://img.icons8.com/ios-filled/50/F25081/discord-logo.png", alt: "Discord", className: "discord-icon" },
    { title: "LurckeA", src: "https://cdn.simpleicons.org/github/white", alt: "GitHub", className: "github-icon" },
  ];

  // --- Click Handlers ---
  const handleSocialIconClick = (title: string) => {
    setActiveSocialTooltip(prev => (prev === title ? null : title));
    setActiveCodeTooltip(null);
  };

  const handleCodeIconClick = (name: string) => {
    setActiveCodeTooltip(prev => (prev === name ? null : name));
    setActiveSocialTooltip(null);
  };

  // --- Component JSX ---
  return (
    <div className="container">
      {/* Social Icons Area */}
      <div className="top-right-icons">
        {socialIcons.map((icon) => (
          <a 
          key={icon.title}
          href={icon.className === 'github-icon' ? `https://github.com/${icon.title}` : // Add link for GitHub
               icon.className === 'email-icon' ? `mailto:${icon.title}` : // Add mailto for Email
               icon.className === 'instagram-icon' ? `https://instagram.com/${icon.title.substring(1)}` : // Add link for Instagram (remove @)
               icon.className === 'discord-icon' ? 'https://discord.com/users/10156496535444521977' : // Add link for Discord
               '#'
              } // Default link
          target="_blank" // Open links in new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          className={`icon ${icon.className}`}
          onClick={(e) => {
              // Prevent default link behavior ONLY IF it's not meant to be a direct link (like Discord maybe)
              handleSocialIconClick(icon.title); // Handle tooltip toggle
          }}
          title={icon.title}
        >
          <img src={icon.src} alt={icon.alt} />
          {/* Conditionally render the JS tooltip */}
          {activeSocialTooltip === icon.title && (
            <span className="tooltip-text social-tooltip">{icon.title}</span>
          )}
        </a>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="isi">
        <h1 className="main-header" data-text='Arialize'>Arialize</h1>
        <h2 className="full-name">Petrus Aria Prakoso Widarto</h2>
        <div className='about'>
          <h3>About Me</h3>
          <p>
            Ex 3D animator/modeller. <br />
            Currently a web developer, programmer, and trusted warranty voider. <br />
          </p>
        </div>
        <div className="experience">
          <h3>Codes</h3>
          {/* Code Icons (Click Tooltips) */}
          <div className="images-container">
            {codeTools.map((tool) => (
              <div
                key={tool.name}
                className="code-image-wrapper"
                onClick={() => handleCodeIconClick(tool.name)}
              >
                <img src={tool.src} alt={tool.alt} />
                {activeCodeTooltip === tool.name && (
                  <span className="tooltip-text code-tooltip">{tool.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
