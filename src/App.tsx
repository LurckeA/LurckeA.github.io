import React, { useState } from 'react'; // Import React and the useState hook for managing component state
import './main.scss'; // Import the SCSS styles for this component

// Define the main App component
export default function App() {
  // Array storing URLs for the code language/tool icons
  const codeImages = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519',
    'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png',
    'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png',
    'https://cdn-icons-png.flaticon.com/512/6132/6132222.png',
    'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4fkV1SpW6hK6fS7Ig7FAk6_y2ADAawey9Q&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxt3aihtIX0TuNK0fOlV4f1Bga5T9D3SWYg&s',
    'https://www.pngplay.com/wp-content/uploads/12/Linux-Transparent-Image.png',
    'https://img.icons8.com/carbon_copy/600/F25081/kali-linux.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/1024px-UbuntuCoF.svg.png',
  ];

  // --- State for Tooltip Visibility ---
  // Uses the useState hook to manage which tooltip is currently active.
  // 'activeTooltip' holds the 'title' of the active icon, or 'null' if none are active.
  // 'setActiveTooltip' is the function used to update this state.
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // --- Data for Social Icons ---
  // An array of objects, each representing a social icon with its properties.
  // This makes it easy to map over and render the icons consistently.
  const socialIcons = [
    { // First item: Email
      title: "ariaprks@gmail.com", // Text content for the tooltip and key
      src: "https://img.icons8.com/ios-filled/50/F25081/email.png", // Image source URL
      alt: "Email", // Alternative text for accessibility
      className: "email-icon" // Additional CSS class for specific styling if needed
    },
    { // Second item: Instagram
      title: "@aria.anim",
      src: "https://img.icons8.com/ios-filled/50/F25081/instagram-new.png",
      alt: "Instagram",
      className: "instagram-icon"
    },
    { // Third item: Discord
      title: "ariaforehead",
      src: "https://img.icons8.com/ios-filled/50/F25081/discord-logo.png",
      alt: "Discord",
      className: "discord-icon"
    },
  ];

  // --- Click Handler for Social Icons ---
  // This function is triggered when a social icon's div is clicked.
  const handleIconClick = (title: string) => {
    // Update the 'activeTooltip' state.
    // It uses the functional update form of setState (prev => ...) to safely toggle:
    // If the clicked icon's title ('title') is the same as the previous state ('prev'),
    // it means the active icon was clicked again, so set state to 'null' (hide tooltip).
    // Otherwise, set the state to the clicked icon's 'title' (show its tooltip).
    setActiveTooltip(prev => (prev === title ? null : title));
  };

  // --- Component Render Method ---
  return (
    // Main container div for the entire application layout
    <div className="container">

      {/* Social Icons Section */}
      {/* This div wraps the social icons. Its class name is used for positioning (absolute on desktop, static on mobile) */}
      <div className="top-right-icons">
        {/* Map over the 'socialIcons' array to render each icon */}
        {socialIcons.map((icon) => (
          // Each icon is wrapped in a div. The 'key' prop is essential for React's list rendering.
          <div
            key={icon.title} // Use the unique title as the key
            className={`icon ${icon.className}`} // Base 'icon' class plus specific class (e.g., 'email-icon')
            onClick={() => handleIconClick(icon.title)} // Attach the click handler
          >
            {/* Render the icon image */}
            <img src={icon.src} alt={icon.alt} />

            {/* --- Conditionally Rendered Tooltip --- */}
            {/* This span is only rendered if the 'activeTooltip' state matches this icon's 'title' */}
            {activeTooltip === icon.title && (
              // The 'tooltip-text' class is used for styling the tooltip bubble via CSS
              <span className="tooltip-text">{icon.title}</span>
            )}
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="isi">
        {/* Main Heading with data-text attribute for CSS animation */}
        <h1 className="main-header" data-text='Arialize'>Arialize</h1>
        {/* Sub-heading with full name */}
        <h2 className="full-name">Petrus Aria Prakoso Widarto</h2>

        {/* Experience Section Wrapper */}
        <div className="experience">
          {/* Sub-section heading */}
          <h3>Codes</h3>
          {/* Container for code language/tool icons */}
          <div className="images-container">
            {/* Map over the 'codeImages' array to render each image */}
            {codeImages.map((src, index) => (
              <img key={index} src={src} alt={`Code language icon ${index + 1}`} /> // Use index as key (ensure list is static) and provide basic alt text
            ))}
          </div>

          {/* Container for the two text columns (Experiences and Abilities) */}
          <div className="text-container">
            {/* Left Column: Experiences */}
            <div className="text-experience">
              <h3>Experiences</h3>
              <ul>
                {/* List of experiences */}
                <li>8 years in choir</li>
                <li>4 years in 3D animation</li>
                <li>3 years in 3D modelling and 3D rigging</li>
                <li>1 year in programming</li>
                <li>1 year in web development</li>
                <li>1 year as student council member</li>
              </ul>
            </div>

            {/* Right Column: Abilities */}
            <div className="text-abilities">
              <h3>Abilities</h3>
              <ul>
                {/* List of abilities */}
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
