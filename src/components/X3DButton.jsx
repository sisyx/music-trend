import styles from "./X3DButton.module.css"
function X3DButton({children}) {
    return ( 
        <div className={styles.btn}>
            <div className={styles.btn_children}>
                {children}
            </div>
        </div>
     );
}

export default X3DButton;