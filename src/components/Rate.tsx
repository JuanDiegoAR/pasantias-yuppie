import star from "../images/star.svg";
import halfStar from "../images/halfStar.svg";
import emptyStar from "../images/emptyStar.svg";
import "../styles/rate.css";

export const Rate = ({ rate }: { rate: number }) => {
  const completes = Math.trunc(rate);
  const partial = rate % 1 > 0.29 && rate % 1 < 0.71;
  const complete = rate % 1 > 0.79;

  const show = [];
  for (let i = 0; i < completes; i++) {
    show.push(star);
  }

  if (partial) show.push(halfStar);
  if (complete) show.push(star);

  for (let i = show.length; i < 5; i++) {
    show.push(emptyStar);
  }

  const result = show;

  return (
    <div className="stars-container">
      {result.map((image, index) => {
        return <img src={image} alt={`${index}`} key={index} />;
      })}
    </div>
  );
};
