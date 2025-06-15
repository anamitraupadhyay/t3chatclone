import React from 'react';
import styles from './Welcomescreen.module.css';
import { TypeAnimation } from 'react-type-animation';

const WelcomeScreen = ({ response }) => {
  function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // bold
    .replace(/__(.*?)__/g, "<u>$1</u>"); // underline (optional if you use __text__)
}
  return (
    <div className={styles.welcomeContainer}>
      {response
        ? <div className="answer-container" style={{backgroundColor:'#1a0e18', padding:'20px', borderRadius:'10px',marginRight:'60px'}}>
         <div
          className="answer-container"
          style={{
            padding: "20px",
            borderRadius: "10px",
            marginRight: "60px"
          }}
        >
      <h2 className={styles.heading}>Answer</h2>
      <ul style={{ paddingLeft: "20px", lineHeight: "1.6", color: "white" }}>
      {
        response
  ?.split("\n")
  .filter(line => line.trim() !== "")
  .map((line, index) => (
    <div key={index} style={{ textAlign: "left", marginBottom: "10px" }}>
      <TypeAnimation
        sequence={[line.replace(/\*\*(.*?)\*\*/g, "$1")]} // remove bold markdown
        speed={50}
        wrapper="span"
        cursor={false}
      />
    </div>
  ))}
      </ul>
    </div>

        </div>
      :(
      <div>
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
      )}
    </div>
  );
};
export default WelcomeScreen;
