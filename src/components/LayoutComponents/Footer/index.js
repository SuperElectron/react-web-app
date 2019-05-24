import React from 'react'
import { Button } from 'antd'
import styles from './style.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.inner}>
      <div className="row">
        <div className="col-lg-9">
          <p><strong>Okanagan Getaways - Premier Vacation Rental Management</strong></p>
          <p>CONTACT US!</p>
          <p>PHONE: 778-583-4495</p>
          <p>LOCATION: Kelowna, BC, Canada</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="row">
          <div className="col-sm-6">
            <a
              href="https://www.okanagangetaways.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <Button type="danger">VIEW WEB</Button>
            </a>
          </div>
          <div className="col-sm-6">
            <div className={styles.copyright}>
              <img
                src="https://static.wixstatic.com/media/7d8a34_d013069531184d7f8a048120b8cefaa5~mv2.png/v1/crop/x_0,y_2,w_201,h_121/fill/w_220,h_132,al_c,lg_1/7d8a34_d013069531184d7f8a048120b8cefaa5~mv2.png"
                rel="noopener noreferrer"
                alt="logo"
              />
              <span>
                © 2019{' '}
                <a href="http://OkanaganGetaways.ca/" target="_blank" rel="noopener noreferrer">
                  KeshMc Inc.
                </a>
                <br />
                All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
