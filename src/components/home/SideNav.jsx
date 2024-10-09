import React, { useState } from 'react'
import styles from './SideNav.module.css'
import Button from '@mui/material/Button'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { TbSquareRoundedLetterMFilled } from 'react-icons/tb';
import { IconButton } from '@mui/material';

export default function SideNav() {

  const [isVisiable, setIsVisiable] = useState(0)

  function handleToggleBtnClick() {
    setIsVisiable(cur => !cur);
  }

  return (
    <div className={`${styles.container} ${isVisiable ? styles.shown : ''}`}>
      <button className={styles.toggle_show} onClick={handleToggleBtnClick}>
        <img src="/src/assets/images/right-arrow.png" alt="" />
      </button>
      <div className={styles.buttons_container}>
        <Link to='/start' className={styles.link_btn}>
          <Button variant="contained" className={styles.button} endIcon={<TbSquareRoundedLetterMFilled className={styles.end_icon} />} dir="rtl">
              <span className={styles.btn_label}>
              ایجاد کمپین
              </span>
          </Button>
          <IconButton className={styles.icon_btn}>
            <TbSquareRoundedLetterMFilled />
          </IconButton>
        </Link>
        <Link to='/campaigns' className={styles.link_btn}>
          <Button variant="contained" className={styles.button}  endIcon={<AutoStoriesIcon className={styles.end_icon} />} dir="rtl">
              <span className={styles.btn_label}>
            کمپین ها
              </span>
          </Button>
          <IconButton className={styles.icon_btn}>
            <AutoStoriesIcon />
          </IconButton>
        </Link>
        <Link to="/" className={styles.link_btn}>
          <Button variant="contained" className={styles.button}  endIcon={<RiHomeFill className={styles.end_icon} />} dir='rtl'>
              <span className={styles.btn_label}>
              خانه
              </span>
          </Button>
          <IconButton className={styles.icon_btn}>
            <RiHomeFill />
          </IconButton>
        </Link>
      </div>
    </div>
  )
}