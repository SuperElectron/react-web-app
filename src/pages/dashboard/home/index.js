import React from 'react';
import { Helmet } from 'react-helmet';
import Authorize from 'components/LayoutComponents/Authorize';
import {Divider} from 'antd';
import YouTube from 'react-youtube';

// import data from './data.json'
import styles from './style.module.scss';

class DashboardHome extends React.Component {
  render() {
    const videoOptions = {
      height: '480',
      width: '600',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <Authorize roles={['admin']} redirect to="/dashboard/home">
        <Helmet title="Home" />                
      
        <div className={styles.landing}>
          <p>INTRODUCING</p>
          <h1>Okanagan Getaway</h1>
        </div>

        <Divider><h2><font color="#d34848">Vacation Real-Estate Management</font></h2></Divider>
        
        <section className="card" border-radius="45px">
          <div className={styles.introduction}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
          </div>
        </section>

        <Divider><h2><font color="#d34848">Mission Statement</font></h2></Divider>

        <section className="card">
          <div className={styles.mission}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
            </p>
          </div>
        </section>        

        <Divider><h2><font color="#d34848">Management Services</font></h2></Divider>

        <section className="card" border-radius="45px">
          <div className={styles.services}>
            <img className={styles.img1} src="/resources/images/air-bnb/airbnb-superhost.svg" alt="missing" />
            <p>
              <ul>
                <br />
                <br />
                <li>Marketing</li>
                <li>Day-to-day Management</li>
                <li>Cleaning</li>
              </ul>
            </p>
          </div>
        </section>

        <Divider><h2><font color="#d34848">The Best Location in Canada</font></h2></Divider>

        <div className={styles.videoBox}>
          <YouTube
            videoId="cohNti8_SSo"
            opts={videoOptions}
            /*  eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]  */
            onReady={this._onReady}
          />
        </div>

        
      </Authorize>
    )
  }
}

export default DashboardHome