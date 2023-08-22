import "./rating_card.styles.scss";
import starSvg from "../../assets/images/icon-star.svg";
import "./rating_card.styles.scss";
import Circle from "../circle/circle.component";

const Rating = ({ setSubmitted, setRatting, ratting }) => {
  const ratings = [1, 2, 3, 4, 5];
  const clickHandler = () => {
    if (ratting == 0) return;
    setSubmitted(true);
  };
  return (
    <div>
      <div className="box">
        <div className="star">
          <img src={starSvg} alt="star.svg" />
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="ratings">
          {ratings.map((v) => (
            <Circle cont={v} key={v} setRatting={setRatting} />
          ))}
        </div>
        <button onClick={clickHandler}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Rating;
