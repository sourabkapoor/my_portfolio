import React, { useEffect, useState } from "react";
import './TypeWriter.styles.scss';

const TypeWriter = ({ texts, typingSpeed = 100, pauseSpeed, deleteSpeed = 50 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  
  useEffect(() => {
    const text = texts[currentTextIndex];
    
    // Function to handle typing and deleting text
    const typeDeleteText = () => {
      // console.log("called with string: ", text)

      if (isDeleting) {
        // Deleting the text in reverse order
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setCharIndex((prev) => prev - 1);

        // Once the text is fully deleted, switch to the next text
        if (charIndex === 0) {
          setTimeout(() => {
            setDisplayedText("")
            setIsDeleting(false);
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, pauseSpeed);
        }
      } else {
        // Typing the text
        if (charIndex < text.length) {
          setDisplayedText((prev) => prev.concat(text.charAt(charIndex)));
          setCharIndex((prev) => prev + 1);
        } else {
          // Once the text is fully typed, start deleting it
          setIsDeleting(true);
        }
      }
    };

    const intervalId = setInterval(typeDeleteText, isDeleting ? deleteSpeed : typingSpeed);

    // Cleanup function to clear the interval when the component unmounts or text changes
    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts, typingSpeed, deleteSpeed, isDeleting, charIndex, pauseSpeed]);


  return (
    <div className="typing-effect">
      {displayedText}
    </div>
  );
};

export default TypeWriter;
