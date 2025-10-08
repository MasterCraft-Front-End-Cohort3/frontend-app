import React from "react";

interface UsernameInputProps {
  value: string;
  onChange: (value: string) => void;
}

const UsernameInput: React.FC<UsernameInputProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="username" className="font-medium text-gray-700 ">
        Username:
      </label>
      <input
        id="username"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
         style={{
              width: "100%",
              padding: "0.8rem",
              borderRadius: "0.5rem",
              border: "none",
              outline: "none",
              fontSize: "1rem",
              resize: "vertical",
              minHeight: "10px",
              backgroundColor: "#fff",
              color: "black",
              boxShadow: "inset 0 2px 6px rgba(0,0,0,0.3)",
            }}
        placeholder="Enter your username"
       // className="border border-gray-300 rounded-lg px-3 py-2 ml-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default UsernameInput;
