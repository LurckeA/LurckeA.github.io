import React, { useState } from 'react';
import './main.scss';

export default function App() {
  // --- Data for Code Icons (with name for data-tooltip) ---
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

  // --- State ONLY for Social Icon Tooltips (Click-to-show) ---
  const [activeSocialTooltip, setActiveSocialTooltip] = useState<string | null>(null);
  // NO state needed for code image hover tooltips

  // --- Data Structure for Social Icons ---
  const socialIcons = [
    { title: "ariaprks@gmail.com", src: "https://img.icons8.com/ios-filled/50/F25081/email.png", alt: "Email", className: "email-icon" },
    { title: "@aria.anim", src: "https://img.icons8.com/ios-filled/50/F25081/instagram-new.png", alt: "Instagram", className: "instagram-icon" },
    { title: "ariaforehead", src: "https://img.icons8.com/ios-filled/50/F25081/discord-logo.png", alt: "Discord", className: "discord-icon" },
  ];

  // --- Tooltip Toggle Function ONLY for Social Icons ---
  const handleSocialIconClick = (title: string) => {
    setActiveSocialTooltip(prev => (prev === title ? null : title));
  };

  // NO click handler needed for code image hover tooltips

  // --- Component JSX ---
  return (
    <div className="container">
      {/* Social Icons Area (Click Tooltips) */}
      <div className="top-right-icons">
        {socialIcons.map((icon) => (
          <div
            key={icon.title}
            className={`icon ${icon.className}`}
            onClick={() => handleSocialIconClick(icon.title)} // Keep click handler here
          >
            <img src={icon.src} alt={icon.alt} />
            {/* Conditional rendering for social tooltip */}
            {activeSocialTooltip === icon.title && (
              <span className="tooltip-text social-tooltip">{icon.title}</span>
            )}
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="isi">
        <h1 className="main-header" data-text='Arialize'>Arialize</h1>
        <h2 className="full-name">Petrus Aria Prakoso Widarto</h2>

        <div className="experience">
          <h3>Codes</h3>
          {/* Code Icons (Hover Tooltips) */}
          <div className="images-container">
            {codeTools.map((tool) => (
              // Wrapper still useful for positioning the CSS tooltip
              <div
                key={tool.name}
                className="code-image-wrapper"
                data-tooltip={tool.name} // <<< Add data attribute for CSS to read
                // NO onClick handler here
              >
                <img src={tool.src} alt={tool.alt} />
                {/* NO conditional span tooltip here */}
              </div>
            ))}
          </div>

          {/* Text Sections (Experience & Abilities) */}
          <div className="text-container">
            <div className="text-experience">
              <h3>Experiences</h3>
              <ul>
                <li>8 years in choir</li>
                <li>4 years in 3D animation</li>
                <li>3 years in 3D modelling and 3D rigging</li>
                <li>1 year in programming</li>
                <li>1 year in web development</li>
                <li>1 year as student council member</li>
              </ul>
            </div>
            <div className="text-abilities">
              <h3>Abilities</h3>
              <ul>
                <li>3D Animation</li>
                <li>3D Modelling</li>
                <li>3D Rigging</li>
                <li>Programming</li>
                <li>Web Development</li>
                <li>Front-end</li>
                <li>Teamwork</li>
                <li>Leadership</li>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Adaptability</li>
                <li>Language (English, Javanese, Japanese)</li>
                <li>Music (Vocal)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
