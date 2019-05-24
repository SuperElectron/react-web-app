import React from 'react'
import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import SliderCard from '../../../components/CleanUIComponents/SliderCard'


class DashboardResorts extends React.Component {
  render() {

    return (
      <Authorize roles={['admin']} redirect to="/dashboard/home">
        <Helmet title="Dashboard Resorts" />
        <div>
          <strong className="text-uppercase font-size-16">We manage the best suits and maintain 5 star customer review ratings!</strong>
        </div>
        <div>
          <SliderCard />
        </div>
      </Authorize>
    )
  }
}

export default DashboardResorts
