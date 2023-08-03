import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Invalid Input</h2>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
