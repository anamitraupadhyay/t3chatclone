import React from 'react';
import Sidebar from './Sidebar';
import WelcomeScreen from './Welcomescreen';
import ChatInput from './ChatInput';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <WelcomeScreen />
        <ChatInput />
      </div>
    </div>
  );
};

export default Layout;
