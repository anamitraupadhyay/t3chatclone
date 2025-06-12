import React from 'react';
import styles from './WelcomeScreen.module.css';

const WelcomeScreen = () => {
  return (
    <div className={styles.welcomeContainer}>
      <h1 className={styles.heading}>How can I help you?</h1>

      <div className={styles.buttonGroup}>
        {['Create', 'Explore', 'Code', 'Learn'].map((label) => (
          <button key={label} className={styles.welcomeButton}>
            {label}
          </button>
        ))}
      </div>

      <div className={styles.questionList}>
        {[
          'How does AI work?',
          'Are black holes real?',
          'How many Rs are in the word "strawberry"?',
          'What is the meaning of life?',
        ].map((q, i) => (
          <div key={i} className={styles.questionItem}>
            {q}
          </div>
        ))}
      </div>
      <p className={styles.footerText} style={{display:'flex',color:'#a6a4a4'}}>
        Make sure you agree to our <a style={{marginLeft:'5px',marginRight:'5px',color:'white'}}>Terms</a> and our <a  style={{marginLeft:'5px',color:'white'}}>Privacy Policy</a>
      </p>
    </div>
  );
};
export default WelcomeScreen;
