import React from 'react'
import { Tabs, Select, Table, Typography, Divider } from 'antd'
import { Helmet } from 'react-helmet'
import ChartistGraph from 'react-chartist'
import InfoCard from 'components/CleanUIComponents/InfoCard'
import InfoCard2 from 'components/CleanUIComponents/InfoCard2'
import data from './data.json'

const { TabPane } = Tabs
const { Option } = Select
const { Title, Text } = Typography;

class Dashboard extends React.Component {
  state = {
    bookingGraph: data.bookingGraph,
    bookingInfo: data.bookingInfo,
    bookingData: data.bookingData
  }

  render() {
    const {
      bookingGraph,
      bookingInfo,
      bookingData
    } = this.state

    const chartistOptions = {
      fullWdateth: true,
      showArea: true,
      chartPadding: {
        right: 30,
        left: 0,
      },
      plugins: [
        // Chartist.plugins.tooltip({
        //   seriesName: false,
        // }),
      ],
    }

    const bookingsColumns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => a.date - b.date,
      },
      {
        title: 'Guest',
        dataIndex: 'guest',
        key: 'guest',
        render: text => <a href="javascript: void(0);">{text}</a>,
        sorter: (a, b) => a.guest - b.guest,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
        render: text => `$${text}`,
      },
      {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
        sorter: (a, b) => a.rating - b.rating,
      },
    ]


    return (
      <div>
        <Helmet title="Client Dashboard" />
        <Title>Client View of Rental Stats</Title>
        <Text strong>Vacation Real-Estate Management Made Easy</Text>
        <br />
        <br />
        <Text>
        As a client of Okanagan getaways, you receive live updates on your investment.
        </Text>
        <br />
        <Text>
        This webview reporting is additional to monthly and annual financial reporting services that will always keep you in touch with the success of your investment.
        </Text>
        <Divider />
        
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-xl-8 col-lg-12">
                <div className="mb-5">
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Activity" key="1">
                      <div>
                        <Select defaultValue="lastDay" style={{ width: 120 }}>
                          <Option value="lastDay">This Week</Option>
                          <Option value="lastWeek">Last Week</Option>
                          <Option value="lastMonth">Past Month</Option>
                          <Option value="last3Month">Past Year</Option>
                        </Select>
                      </div>
                      <ChartistGraph
                        data={bookingGraph}
                        options={chartistOptions}
                        className="chart-area height-200 mt-4 chartist"
                        type="Line"
                      />
                      <div className="row">
                        <div className="col-lg-3 col-6">
                          <div className="mb-3">
                            <div className="font-size-16 mb-2">Revenue</div>
                            <div className="font-size-20 text-black">
                              <strong>{bookingInfo.revenue}</strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-6">
                          <div className="mb-3">
                            <div className="font-size-16 mb-2">Tax</div>
                            <div className="font-size-20 text-black">
                              <strong>{bookingInfo.tax}</strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-6">
                          <div className="mb-3">
                            <div className="font-size-16 mb-2">Cleaning Fees</div>
                            <div className="font-size-20 text-black">
                              <strong>{bookingInfo.cleaning}</strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-6">
                          <div className="mb-3">
                            <div className="font-size-16 mb-2">Booking Rate</div>
                            <div className="font-size-20">
                              <strong>{bookingInfo.quantity}</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
                
                <Divider />

                <div>
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Details" key="1">
                      <Table
                        className="utils__scrollTable"
                        scroll={{ x: '100%' }}
                        columns={bookingsColumns}
                        dataSource={bookingData}
                      />
                    </TabPane>
                  </Tabs>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12">
                <div className="row mb-5">
                  <div className="col-xl-12 col-lg-6 col-sm-12">
                    <InfoCard form="stats-large" icon="download" type="primary" />
                  </div>
                  <div className="col-xl-12 col-lg-6 col-sm-12">
                    <InfoCard2 form="stats-large" icon="stack" type="default" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
