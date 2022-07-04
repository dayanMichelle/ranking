import styles from "../styles/Puntuation.module.css";
const Puntuation = ({puntacion,setPuntuacion}) => {

  const puntuations = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container_puntuation}>
      {puntuations.map((puntuation) => (
        <div
          key={puntuation}
          style={{
            backgroundColor: `${
              puntacion == puntuation ? "hsl(25, 97%, 53%)" : ""
            }`,
            color: `${
                puntacion == puntuation ? "white" : ""
              }`,
          }}
          value={puntuation}
          onClick={(e) => {
            setPuntuacion(puntuation);
          }}
          className={styles.puntuation}
        >
          {puntuation}
        </div>
      ))}
    </div>
  );
};

export default Puntuation;
