import React, { useState } from "react";
import UsernameInput from "./components/userNameInput";
import SaveButton from "./components/SaveButton";

export default function App() {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Welcome, ${username || "Guest"}!\nBio: ${bio}`);
  };

  return (
    <div
      style={{
        backgroundColor: "#001F3F", // Navy page background
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        color: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "#002b5c", // Navy card
          padding: "2rem 2.5rem",
          borderRadius: "1rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
          width: "380px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "relative", // needed for top-right avatar
        }}
      >
        {/* Avatar placeholder at top-right */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#00FF7F33", // light green circle
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#00FF7F",
            fontSize: "0.8rem",
          }}
        >
          <img
            src="/LANDING.jpg"
            alt="Avatar"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>

        <h2
          style={{
            color: "#00FF7F", // Green heading
            fontWeight: "600",
            fontSize: "1.5rem",
            margin: 0,
          }}
        >
          Welcome to Our App
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          {/* Username Input */}
          <UsernameInput
            value={username}
            onChange={(value: string) => setUsername(value)}
          />

          {/* Bio textarea placeholder */}
          <label htmlFor="bio-textarea" className="font-medium text-gray-700 ">
            Bio:
          </label>
          <textarea
            placeholder="Enter your bio..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            style={{
              width: "100%",
              padding: "0.8rem",
              borderRadius: "0.5rem",
              border: "none",
              outline: "none",
              fontSize: "1rem",
              resize: "vertical",
              minHeight: "60px",
              backgroundColor: "#fff",
              color: "black",
              boxShadow: "inset 0 2px 6px rgba(0,0,0,0.3)",
            }}
            id="bio-textarea"
          />

          {/* Save Button */}
            <SaveButton
            text="Continue"
            onClick={() => handleSubmit(new Event("submit") as unknown as React.FormEvent)}
            disabled={!username.trim()}
          />
        </form>
      </div>
    </div>
  );
}
