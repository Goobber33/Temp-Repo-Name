import React from 'react';
import { motion } from 'framer-motion';

// Import the image
import mainImage from './main.jpg';

const HomePage = ({ onLogout }) => {
    const pageVariants = {
        initial: {
            y: "100%",
            opacity: 0
        },
        animate: {
            y: "0%",
            opacity: 1
        },
        exit: {
            y: "-100%",
            opacity: 0
        }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
    };

    const style = {
        backgroundImage: `url(${mainImage})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire page
        backgroundPosition: 'center', // Center the image
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        position: 'relative'
    };

    const titleStyle = {
        marginTop: '0',
        marginBottom: '20px',
        textAlign: 'center',
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '100%'
    };

    const logoutButtonStyle = {
        position: 'absolute',
        top: '90px',
        left: '50%',
        transform: 'translateX(-50%)'
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            style={style}
        >
            <h1 style={titleStyle}>Welcome to the Game!</h1>
            <button className="btn btn-primary" onClick={onLogout} style={logoutButtonStyle}>Logout</button>
            <div style={containerStyle}>
                <button className="btn btn-danger fs-4">START</button>
            </div>
        </motion.div>
    );
};

export default HomePage;
