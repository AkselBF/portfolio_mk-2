import React, { useState, useEffect } from 'react';

const texts = [
  'I am a frontend developer, new yet creative.',
  'Striving for functionality and beauty is my forte.',
  'I have a passion for learning, and I still crave more.',
  'Looking for dedication and creativity? Here I am!'
];

const TypingEffect: React.FC = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);  // Decreased initial typing speed

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentIndex];
      const isLastChar = charIndex === currentText.length;
      const isDeleting = deleting;

      if (isDeleting) {
        if (charIndex === 0) {
          setDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setTypingSpeed(100);  // Adjust speed for transition to next text
        } else {
          setText(currentText.substring(0, charIndex - 1));
          setCharIndex((prevIndex) => prevIndex - 1);
          setTypingSpeed(25);  // Faster deleting speed
        }
      } else {
        if (isLastChar) {
          setTypingSpeed(1500);  // Shorter pause before deleting starts
          setDeleting(true);
        } else {
          setText(currentText.substring(0, charIndex + 1));
          setCharIndex((prevIndex) => prevIndex + 1);
          setTypingSpeed(50);  // Faster typing speed
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, charIndex, deleting, currentIndex, typingSpeed]);

  return <span>{text}</span>;
};

export default TypingEffect;