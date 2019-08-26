import React from 'react';
import { Helmet } from 'react-helmet';
import Authorize from 'components/LayoutComponents/Authorize';
import {Divider} from 'antd';
import YouTube from 'react-youtube';

import data from './data.json'
import styles from './style.module.scss';

// const { Paragraph } = Typography;

// const logo = "https://static.wixstatic.com/media/7d8a34_d013069531184d7f8a048120b8cefaa5~mv2.png/v1/crop/x_0,y_2,w_201,h_121/fill/w_281,h_169,al_c,lg_1,q_80/7d8a34_d013069531184d7f8a048120b8cefaa5~mv2.webp"

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
        <section className="card" border-radius="25px">
          <div className={styles.landing}>
            <p>INTRODUCING</p>
            <h1>Okanagan Getaway</h1>
          </div>

          <Divider><h2>Vacation Real-Estate Management</h2></Divider>

          <div className={styles.introduction}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
          </div>

          <Divider><h2>Mission Statement</h2></Divider>
          <div className={styles.mission}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
            </p>
          </div>
          
          <Divider><h2>Management Services</h2></Divider>

          <div className={styles.services}>
            <img className={styles.img1} src={data.images[0]} alt="missing" float="left" />
            <p>
              <ul>
                <li>Marketing</li>
                <li>Day-to-day Management</li>
                <li>Cleaning</li>
                <li>Financial Reporting</li>
              </ul>
            </p>
          </div>

          <Divider><h2>Rental Properties</h2></Divider>
          
          <div className={styles.services}>
            <p>
              <ul>
                <li>Discovery Bay</li>
                <li>Playa Del Sol</li>
              </ul>
            </p>
            <img className={styles.img2} src={data.images[1]} alt="missing" />
          </div>

          <Divider><h2>Kelowna: The Ultimate Getaway Location</h2></Divider>

          <div className={styles.videoBox}>
            <YouTube
              videoId="cohNti8_SSo"
              opts={videoOptions}
              /*  eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]  */
              onReady={this._onReady}
            />
          </div>
          <br />
        </section>
      </Authorize>
    )
  }
}

export default DashboardHome