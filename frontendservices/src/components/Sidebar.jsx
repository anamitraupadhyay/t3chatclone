
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faUsers,
  faCog,
  faSignOutAlt,
  faDisplay,
  faBars,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import DuplicateSideBar from './DuplicateSidebar';


const Sidebar = () => {
  const [showDuplicate, setShowDuplicate] = useState(false); // ✅ useState instead of flag

  const toggleSidebar = () => {
    setShowDuplicate(prev => !prev); // ✅ Toggle state
  };
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <div>
    <div className={styles.sidebar}>
      <div>
        {/* Top Bar with Menu Icon and Title */}
        <div className={styles.header} style={{ display: 'flex', alignItems: 'center', gap: '5rem', marginBottom: '1rem' }}>
          <FontAwesomeIcon onClick={toggleSidebar} icon={faBars} className={styles.menuIcon}  />
          <div className={styles.title}>T3.chat</div>
        </div>
        {/* New Chat Button */}
        <button className={styles.newChatButton}>
          New Chat
        </button>

        {/* Search Input with Icon */}
        <div className={styles.searchContainer}  style={{ display: 'flex', alignItems: 'center',borderBottomColor: '#6e2141', borderBottomWidth: '1px', borderBottomStyle: 'solid' }}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} style={{fontSize:'12px'}} />
          <input
            type="text"
            placeholder="Search your threads..."
            className={styles.searchInput}
          />
        </div>
      </div>
      {/* Bottom login/logout */}
      <div style={{marginTop: 'auto', paddingBottom: '20px'}}>
        <button className={styles.loginButton} onClick={handleLoginClick}>
          <FontAwesomeIcon icon={faSignOutAlt}/> Login
        </button>
      </div>
    </div>
    {/* Duplicate Sidebar Component */}
    {showDuplicate && <DuplicateSideBar />}
    </div>
  );
};

export default Sidebar;
