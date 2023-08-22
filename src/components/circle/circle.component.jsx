import "./circle.styles.scss";

const Circle = ({ cont, setRatting }) => {
  const clickHandler = () => {
    setRatting(cont);
  };
  return (
    <div onClick={clickHandler} className="rating_circle">
      {cont}
    </div>
  );
};

export default Circle;
