import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid Input</h2>
        </div>
        <div className={styles.content}>
          <span className="actions">Content</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
