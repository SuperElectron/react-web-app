import React from 'react'
import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import { Typography, Divider } from 'antd';
import YouTube from 'react-youtube';

const { Title, Paragraph, Text } = Typography;

// const logo = "https://static.wixstatic.com/media/7d8a34_d013069531184d7f8a048120b8cefaa5~mv2.png/v1/crop/x_0,y_2,w_201,h_121/fill/w_281,h_169,al_c,lg_1,q_80/7d8a34_d013069531184d7f8a048120b8cefaa5~mv2.webp"

class DashboardHome extends React.Component {
  render() {
    const videoOptions = {
      height: '576',
      width: '1024',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <Authorize roles={['admin']} redirect to="/dashboard/home">
        <Helmet title="Dashboard Home" />                
        <Title>Welcome to Okanagan Getaway</Title>
        <Text strong>Vacation Real-Estate Management Made Easy</Text>
        <Divider />
        <div>
          <YouTube
            videoId="cohNti8_SSo"
            opts={videoOptions}
            /*  eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]  */
            onReady={this._onReady}
          />
        </div>
        <Divider />
        <Text strong>Thank-you for visiting OkanaganGetaways.com!</Text>
        <Paragraph>  
        We are excited to offer you seasonal accommodations and vacation rentals in some of the best resorts Kelowna has to offer.  Whether you want to be right downtown along the waterfront or in the trendy Mission we have something that will make your vacation or business trip to Kelowna great!
        </Paragraph>
        <Paragraph>
        Our suites are fully stocked with everything you need. We supply each unit with high quality linens and towels, we stock all the essentials like shampoo, conditioner, and soaps. In the kitchen we provide coffee and tea, sugar, salt, pepper, ketchup, mustard and cooking oil. The kitchen also has everything you need to prepare your own meals,
        you just bring your favorite foods.  Our goal is to provide you with a stress free Okanagan Getaway at our amazing Resorts.
        </Paragraph>
        <Paragraph>
        The Vacation Rentals we provide are sparkling clean and are perfect for families or business professionals.  We hope that you will consider staying with us on your next trip to Kelowna.
        </Paragraph>
      </Authorize>
    )
  }
}

export default DashboardHome