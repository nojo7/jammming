import styles from './Button.module.css';

const Button = ({text, variant, onClick}) => {

  return (
    <>
      {variant === 'searchBar' &&
        <button 
          onClick={onClick}
          type='submit'
          className={styles.searchBarButton}
          >
            {text}
        </button>}
      {variant === 'playlist' &&
      <button 
        onClick={onClick}
        type='submit'
        className={styles.playlistButton}
        >
          {text}
      </button>}
    </>
  );
}

export default Button;