import React from 'react'
import { Carousel } from 'antd'
import styles from './style.module.scss'


const img1 = "https://images.trvl-media.com/hotels/12000000/11650000/11649500/11649484/2e968f99_y.jpg"
const img2 = "https://res.cloudinary.com/resortsandlodges/image/fetch/w_800,h_520,c_fill/https://media.travelnetsolutions.com/6eb0d4dc91d1c1cc717ce372271faa76/original.jpg"
// const img3 = "https://t-ec.bstatic.com/images/hotel/max1024x768/922/92268950.jpg"
const img3 = "https://static.wixstatic.com/media/7d8a34_799910d376c349d6a3d0f24ec36426c1~mv2.jpg/v1/fill/w_320,h_223,al_c,q_80,usm_0.66_1.00_0.01/7d8a34_799910d376c349d6a3d0f24ec36426c1~mv2.jpg"


class SliderCard extends React.Component {
  static defaultProps = {
    inverse: false,
  }

  render() {
    const { inverse } = this.props
    return (
      <div className={`${styles.card} ${inverse ? styles.inverse : ''}`}>
        <Carousel autoplay>
          <div className={styles.item}>
            <a href="javascript: void(0);" className={styles.body}>
              <img alt='1' src={img1} />
              <div className={styles.icon}>
                <i className="icmn-accessibility" />
              </div>
              <h2>Discovery Bay</h2>
              <p>Premier location in the heart of downtown</p>
            </a>
          </div>
          <div className={styles.item}>
            <a href="javascript: void(0);" className={styles.body}>
              <img alt='2' src={img2} />
              <div className={styles.icon}>
                <i className="icmn-download" />
              </div>
              <h2>Playa Del Sol</h2>
              <p>Steps from Gyro Beach</p>
            </a>
          </div>
          <div className={styles.item}>
            <a href="javascript: void(0);" className={styles.body}>
              <img alt='3' src={img3} />
              <div className={styles.icon}>
                <i className="icmn-download" />
              </div>
              <h2>Vacation Rental Management</h2>
              <p>Inquire below for pricing and Summer 2019 promotions!</p>
            </a>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default SliderCard
