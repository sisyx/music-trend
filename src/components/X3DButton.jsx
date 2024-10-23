import styles from "./X3DButton.module.css"
function X3DButton({index, children}) {
    return ( 
        <div className={styles.btn}>
            <div className={styles.btn_children} data-aos="fade-down" data-aos-duration={`${index * 200 + 500}`}>
                {children}
            </div>
        </div>
     );
}

export default X3DButton;