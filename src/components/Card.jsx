import styles from "../styles/Card.module.css";
import Puntuation from "./Puntuation";
import { useState } from "react";
const Card = () => {
  const [send, setSend] = useState(false);
  const handleSubmit = (e) => {
    setSend(true);
  };
  const [puntacion, setPuntuacion] = useState("");
  return !send ? (
    <div className={styles.card}>
      <div className={styles.star}>
        <img src="./images/icon-star.svg" />
      </div>

      <form className={styles.card__form} onSubmit={handleSubmit}>
        <h3>How did we do?</h3>
        <p className={styles.card__form_parrafo}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <Puntuation puntacion={puntacion} setPuntuacion={setPuntuacion} />
        <button className={styles.card__form_button} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  ) : (
    <div className={styles.card_send}>
      <img src="./images/illustration-thank-you.svg" />
      <p className={styles.span}>You seleted {puntacion} out of 5 </p>
      <p className={styles.title}>Thank you!</p>
      <p className={styles.card__parrafo}>
        We appreciate ypu taking the time to give a raiting. If you ever need
        more support don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Card;
