import styles from './BeatifullBtn.module.css';

function BeatifullBtn( { className = '', children } ) {
    return (
      <div className={`${styles['compaign-info__box']} ${className}  ${styles.btn_hover} ${styles.color_1}`}>
        {children}
      </div>
    );
}

export default BeatifullBtn;