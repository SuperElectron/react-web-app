import React from 'react'
import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import { Typography, Divider } from 'antd';
import SliderCard from 'components/CleanUIComponents/SliderCard'


const { Title, Text } = Typography;

class DashboardResorts extends React.Component {
  render() {

    return (
      <Authorize roles={['admin']} redirect to="/dashboard/home">
        <Helmet title="Resorts" />
        <Title>Be a part of our 5-star team and our success!</Title>
        <Text strong>Vacation Real-Estate Management Made Easy</Text>
        <Divider />
        <div>
          <SliderCard />
        </div>
      </Authorize>
    )
  }
}

export default DashboardResorts
