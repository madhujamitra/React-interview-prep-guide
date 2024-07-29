import { useState } from "react";
import { EmptyStar, FilledStar } from "../components/stars";

export default function Landingpage() {

    
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
    {Array(5)
      .fill(0)
      .map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            style={{ cursor: "pointer" }}
          >
            {starValue <= (hover || rating) ? <FilledStar /> : <EmptyStar />}
          </span>
        );
      })}
  </div>
  );
}
