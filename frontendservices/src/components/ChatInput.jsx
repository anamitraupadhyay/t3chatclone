import React from 'react';
import styles from './ChatInput.module.css';
import axios from 'axios';

const ChatInput = ({ setResponse }) => {
  const [inputValue, setInputValue] = React.useState('');
  //const [answer, setAnswer] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  async function generateAnswer(e) {
  e.preventDefault(); // prevent form from refreshing
  const apiKey = import.meta.env.VITE_API_KEY;
  setLoading(true);
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        "contents": [
        {
            "parts": [
            {
              "text": inputValue
            }
          ]
        }
      ]
     },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //console.log(" Gemini Response:", response.data);
    setResponse(response.data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error(" Gemini API Error:", error.response?.data || error.message);
  }finally{
    setLoading(false);
  }
}
  return (
    <div className={styles.chatInputContainer} style={{display:'block'}}>
      <form className='form' style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'0.4rem'}}>
        <input
          type="text"
          placeholder="Type your message here..."
          className={styles.input} 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select className={styles.modelSelect}>
          <option>Gemini 2.5 Flash</option>
        </select>
        {loading ? (
          <div className={styles.loader}></div>
          ) : (
            <button type="submit" className={styles.searchButton} onClick={generateAnswer}>Search</button>
          )}
        <button type="button" className={styles.attachButton}>
          <span className="material-icons">attach_file</span>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
