import React from 'react'
import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import {Divider} from 'antd';
import YouTube from 'react-youtube';
import styles from './style.module.scss'


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
            <h2>Okanagan Getaway</h2>
            <p strong>VACATION REAL-ESTATE MANAGEMENT</p>
          </div>

          <Divider />

          <div className={styles.introduction}>
            <h1 strong>
            Title
            </h1>
            
            <p>
            Body superhost
            </p>
            
            <p>
            Body2 Mission statement
            </p>
            
          </div>

          <div className={styles.body}>
            <h1 strong>
            Title: services offered (rental units, rental management)
            </h1>
            
            <p>
            Body: Summary of full services offered
            </p>
            
            <p>
            End: point to sidebar to see more.  Arrow to view video below.
            </p>
          </div>

          <Divider />

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