import React from 'react';
import Navbar from '../Navbar/Navbar';

//returns react functional component
const Layout: React.FC = ({ children }) => {
    
    return (
        <>
        <Navbar />
        <main>{children}</main>
        </>
    );
};
export default Layout;