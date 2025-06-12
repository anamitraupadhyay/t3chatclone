import React from 'react';
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
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';
function DuplicateSideBar() {
    
   
  const style = {
    backgroundColor: 'red',
    height: '100px',
    width: '100px',
    display: 'block'
  };

  return (
    <div style={style}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  )
}
export default DuplicateSideBar;