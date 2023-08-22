import "./thanks.styles.scss";
import thankSvg from "../../assets/images/illustration-thank-you.svg";

const Thank = ({ ratting }) => {
  return (
    <div className="thank_box">
      <img src={thankSvg} alt="thanks image" />
      <div className="rating_message_container">
        <p className="rating_message">You selected {ratting} out of 5</p>
      </div>
      <h1>Thank you</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thank;
