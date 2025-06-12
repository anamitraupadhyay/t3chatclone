import React from 'react';
import styles from './ChatInput.module.css';

const ChatInput = () => {
  return (
    <div className={styles.chatInputContainer}>
      <input
        type="text"
        placeholder="Type your message here..."
        className={styles.input}
      />
      <select className={styles.modelSelect}>
        <option>Gemini 2.5 Flash</option>
      </select>
      <button className={styles.searchButton}>Search</button>
      <button className={styles.attachButton}>
        <span className="material-icons">attach_file</span>
      </button>
    </div>
  );
};

export default ChatInput;
