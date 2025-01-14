import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ textToType, typingSpeed = 150 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting && text.length === textToType.length) {
      // Pause before starting to delete
      typingTimeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === "") {
      // Reset and start typing again
      setIsDeleting(false);
      setLoop((prevLoop) => prevLoop + 1); // Increment loop count
    } else {
      // Update the text by typing or deleting
      typingTimeout = setTimeout(() => {
        const updatedText = isDeleting
          ? textToType.substring(0, text.length - 1)
          : textToType.substring(0, text.length + 1);
        setText(updatedText);
      }, typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, textToType, typingSpeed]);

  return (
    <span
      className="text-[#00CFFD] font-bold underline"
      style={{
        textUnderlineOffset: "4px", // Adjust the gap between text and underline here
      }}
    >
      {text}
    </span>
  );
};

export default TypewriterEffect;
