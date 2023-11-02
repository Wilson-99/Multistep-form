import React from "react";
import { BiStar } from "react-icons/bi";
import { Input } from "./Input";
import "../Styles/StarRating.sass"

export const StarRating = ({ rating, onRatingChange, feedback }) => {
  return (
    <div className="star-rating">
      <div className="star-label">
        {[1, 2, 3, 4, 5].map((starRating) => (
          <label key={starRating}>
            <Input
              type="radio"
              name="rating"
              value={starRating}
              onChange={() => onRatingChange(starRating)}
              checked={starRating === rating}
              className="star-radio"
            />
            <BiStar
              className={`star-icon ${starRating <= rating ? "selected" : ""}`}
              onClick={() => onRatingChange(starRating)}
            />
          </label>
        ))}
      </div>
      <div className="rating-message">{feedback}</div>
    </div>
  );
};


