import { useState } from "react";
import './Exe9.css'

export default function FeedbackPoll() {
  const [rating, setRating] = useState("");

  const handleSubmit = (selectedRating) => (e) => {
    e.preventDefault();
    setRating(selectedRating);
  };

  return (
    <div className="feedback-poll">
      {!rating ? (
        <>
          <p>How would you rate our tech support?</p>
          <button onClick={handleSubmit("Good")}>Good</button>
          <button onClick={handleSubmit("Neutral")}>Neutral</button>
          <button onClick={handleSubmit("Poor")}>Poor</button>
        </>
      ) : (
        <p>Thank you for your rating: <strong>{rating}</strong></p>
      )}
    </div>
  );
}
