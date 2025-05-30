import React from "react";

export default function RecommendationForm() {
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.heading}>Leave a Recommendation</h2>
        <input
          type="text"
          placeholder="Name (Optional)"
          style={styles.input}
        />
        <textarea placeholder="Message" style={styles.textarea} />
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "1000px",
    gap: "10px",
  },
  heading: {
    textAlign: "center",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    minHeight: "150px", // Increased height
    resize: "vertical",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#fff",
    color: "purple",
    border: "1px solid purple",
    borderRadius: "4px",
    padding: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    width: "200px", // Made button smaller
  },
};
