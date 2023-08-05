import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={styles.button} type={props.type || 'button'}>
      {props.children}
    </button>
  );
};

export default Button;
