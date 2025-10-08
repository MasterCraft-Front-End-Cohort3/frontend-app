import React from "react";

interface SaveButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const SaveButton: React.FC<SaveButtonProps> = ({ text, onClick, disabled }) => (
  <button
    type="submit"
    onClick={onClick}
    disabled={disabled}
    style={{
      backgroundColor: "#00FF7F",
      color: "black",
      fontWeight: "bold",
      padding: "0.75rem 1.5rem",
      borderRadius: "0.5rem",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      fontSize: "1rem",
      transition: "background 0.2s",
    }}
  >
    {text}
  </button>
);

export default SaveButton;