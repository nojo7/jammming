import styles from './Button.module.css';

const Button = ({text, variant, onClick}) => {

  return (
    <>
      {variant === 'primary' && <button onClick={onClick} type='submit' className={styles.primary}>{text}</button>}
      {variant === 'secondary' && <button onClick={onClick} type='submit' className={styles.secondary}>{text}</button>}
    </>
  );
}

export default Button;