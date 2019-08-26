import React from 'react'
import { Helmet } from 'react-helmet'
import { Typography, Divider, Carousel, Breadcrumb, Rate, Button, Tabs } from 'antd';
import ChartCard from 'components/CleanUIComponents/ChartCard'
import Authorize from 'components/LayoutComponents/Authorize'
import styles from './style.module.scss'
import data from './data.json'

const { Title, Text } = Typography;
const { TabPane } = Tabs

class DashboardService extends React.Component {
  state = {
    imgActiveStatus: [],
    images: data.images,
    name: data.name,
    rate: data.rate,
    price: data.price,
    shortDescr: data.shortDescr,
    services: data.services,
    finances:data.finances,
    results: data.results,
  }

  componentWillMount() {
    this.generateImgStatus()
  }

  generateImgStatus = () => {
    const { imgActiveStatus, images } = this.state
    images.forEach((img, index) => {
      imgActiveStatus[index] = 'not-active'
      if (index === 0) {
        imgActiveStatus[0] = 'active'
      }
    })
  }

  setActiveImg = imgNumber => {
    const { imgActiveStatus } = this.state
    imgActiveStatus.forEach((imgStatus, index) => {
      imgActiveStatus[index] = 'not-active'
      if (imgNumber === index) {
        imgActiveStatus[index] = 'active'
      }
    })
    this.setState({
      imgActiveStatus,
    })
  }

  refSlider = node => {
    this.slider = node
  }

  changeSlide = (e, index) => {
    e.preventDefault()
    this.slider.slick.innerSlider.slickGoTo(index)
    this.setActiveImg(index)
  }
  
  render() {
    const {
      imgActiveStatus,
      images,
      name,
      rate,
      price,
      shortDescr,
      services,
      finances,
      results,
    } = this.state

    return (
      <Authorize roles={['admin']} redirect to="/dashboard/home">
        <Helmet title="Service" />
        <Title>Services</Title>
        <Text strong>Vacation Real-Estate Management Made Easy</Text>
        <Divider />
        <strong className="text-uppercase font-size-16">Statistics</strong>
        <div className="row">
          <div className="col-xl-4">
            <ChartCard
              title="Reviews"
              amount="275"
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [1, 2, 4, 8, 16, 32, 64],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-4">
            <ChartCard
              title="Summer Average Nightly Booking"
              amount="$240.00"
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [120, 130, 128, 125, 121, 127, 132],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
        </div>
        <Divider />

        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Marketing and Management</strong>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4">
                <div className={styles.item}>
                  <div className={styles.img}>
                    <div className={styles.status}>
                      <span className={styles.statusTitle}>Sample</span>
                    </div>
                    <div className={`${styles.like} ${styles.selectedLike}`}>
                      <i className="icmn-heart" />
                    </div>
                    <Carousel ref={this.refSlider} autoplay={false} dots={false} effect="fade">
                      {images.map(image => (
                        <div key={image}>
                          <img className={styles.img} src={image} alt="" />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
                <div className={`${styles.photos} clearfix`}>
                  {images.map((image, index) => (
                    <a
                      href="javascript: void(0)"
                      key={image}
                      onClick={e => {
                        this.changeSlide(e, index)
                      }}
                      className={`${styles.photosItem} ${
                        imgActiveStatus[index] === 'active' ? styles.photosItemActive : ''
                      }`}
                    >
                      <img src={image} alt="" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="col-lg-8">
                <div className={styles.breadcrumbs}>
                  <Breadcrumb separator="">
                    <Breadcrumb.Item>
                      <span className={styles.breadcrumbItem}>
                        <a href="javascript: void(0);">Marketing</a>
                      </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <span className={styles.breadcrumbItem}>
                        <a href="javascript: void(0);">Bookings</a>
                      </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <span className={styles.breadcrumbItem}>
                        <a href="javascript: void(0);">Day-to-Day Management</a>
                      </span>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className={styles.sku}>
                  <br />
                  <div className={styles.raiting}>
                    <Rate value={rate} disabled allowHalf />
                  </div>
                </div>
                <h4 className={styles.mainTitle}>
                  <strong>{name}</strong>
                </h4>
                <div className={styles.price}>
                  {`$${price}`}
                </div>
                <hr />
                <div className={`mb-1 ${styles.descr}`}>
                  <p>{shortDescr}</p>
                </div>
                <hr />
                <div className={styles.controls}>
                  <Button type="primary" size="large">
                    <a href="https://www.airbnb.ca/rooms/17963682" className="btn btn-link" target="_blank" rel="noopener noreferrer">
                      <i className="icmn-heart mr-1" />
                      View this suite on Air BnB now!
                    </a>
                  </Button>
                  <a href="/contact" className="btn btn-link">
                    <i className="icmn-heart mr-1" />
                    Inquire about your suite
                  </a>
                </div>

                <div className={styles.info}>
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Services" key="1">
                      {services.map(property => (
                        <div className="mb-1" key={property.name}>
                          <strong className="mr-1">{`${property.name}: `}</strong>
                          {property.value}
                        </div>
                      ))}
                    </TabPane>
                    <TabPane tab="Results" key="2">
                      {results.map(property => (
                        <div className="mb-1" key={property.name}>
                          <strong className="mr-1">{`${property.name}: `}</strong>
                          {property.value}
                        </div>
                      ))}
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>Financial Reporting</strong>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4">
                <div className={styles.info}>
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Services" key="1">
                      {finances.map(property => (
                        <div className="mb-2" key={property.name}>
                          <strong className="mr-2">{`${property.name}: `}</strong>
                          {property.value}
                        </div>
                      ))}
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Authorize>
    )
  }
}

export default DashboardService
