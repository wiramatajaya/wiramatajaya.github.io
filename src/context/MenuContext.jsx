// src/ThemeContext.js
import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <MenuContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </MenuContext.Provider>
    );
};



// // src/components/Navbar.js
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { ThemeContext } from '../ThemeContext';

// const Navbar = () => {
//     const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

//     return (
//         <nav className={`navbar ${isDarkTheme ? 'dark' : 'light'}`}>
//             <h1>My Website</h1>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//             </ul>
//             <button onClick={toggleTheme}>
//                 {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
//             </button>
//         </nav>
//     );
// };

// export default Navbar;