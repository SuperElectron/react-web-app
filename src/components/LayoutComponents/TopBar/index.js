import React from 'react'
// import HomeMenu from './HomeMenu'
import ProfileMenu from './ProfileMenu'
import LanguageSelector from './LanguageSelector'
import styles from './style.module.scss'

class TopBar extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <div className="mx-5">
          <LanguageSelector />
        </div>
        <div className="mx-5">
          <ProfileMenu />
        </div>
      </div>
    )
  }
}

export default TopBar
