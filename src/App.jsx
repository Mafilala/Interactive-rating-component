import { useState } from "react";
import Rating from "./components/rating-card/rating_card.component";
import Thank from "./components/thanks_card/thanks.component";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [ratting, setRatting] = useState(0);
  return (
    <>
      {submitted ? (
        <Thank ratting={ratting} />
      ) : (
        <Rating
          setSubmitted={setSubmitted}
          setRatting={setRatting}
          ratting={ratting}
        />
      )}
    </>
  );
}

export default App;
