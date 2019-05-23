import React from 'react'
import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import { Carousel, Card } from 'antd';
import YouTube from 'react-youtube';
import './index.css';

/*
THINGS TO CHANGE

video - onReady -> click and play...
"WELCOME" -> center text and stylize
Carousel background for "dots" -> change to dark so viewer can select or move it higher above picture/video

*/

// const img1 = "https://static.wixstatic.com/media/7d8a34_799910d376c349d6a3d0f24ec36426c1~mv2.jpg/v1/fill/w_320,h_223,al_c,q_80,usm_0.66_1.00_0.01/7d8a34_799910d376c349d6a3d0f24ec36426c1~mv2.jpg"
const logo = "https://static.wixstatic.com/media/7d8a34_d013069531184d7f8a048120b8cefaa5~mv2.png/v1/crop/x_0,y_2,w_201,h_121/fill/w_281,h_169,al_c,lg_1,q_80/7d8a34_d013069531184d7f8a048120b8cefaa5~mv2.webp"
// const img2 = "https://images.trvl-media.com/hotels/12000000/11650000/11649500/11649484/2e968f99_y.jpg"
const img3 = "https://res.cloudinary.com/resortsandlodges/image/fetch/w_800,h_520,c_fill/https://media.travelnetsolutions.com/6eb0d4dc91d1c1cc717ce372271faa76/original.jpg"
const img4 = "https://t-ec.bstatic.com/images/hotel/max1024x768/922/92268950.jpg"

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
        <Card className="container-fluid">
          <div className="utils__title utils__title--flat mb-3">
            <strong className="text-uppercase font-size-16">WELCOME</strong>
          </div>
          <Carousel dotPosition="top">
            <div>
              <img className="img-responsive image-resize" src={logo} alt="First slide" />
            </div>
            <div>
              <YouTube
                videoId="cohNti8_SSo"
                opts={videoOptions}
                /*  eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]  */
                onReady={this._onReady}
              />
            </div>
            <div>
              <img className="img-responsive image-resize" src={img3} alt="Third slide" />
            </div>
            <div>
              <img className="img-responsive image-resize" src={img4} alt="Fourth slide" />
            </div>
          </Carousel>
        </Card>
      </Authorize>
    )
  }
}

export default DashboardHome

/*
Thank-you for visiting OkanaganGetaways.com we are excited to offer you seasonal accommodations and vacation rentals in some of the best resorts Kelowna has to offer.

Whether you want to be right downtown along the waterfront or in the trendy Mission we have something that will make your vacation or business trip to Kelowna great!

Our suites are fully stocked with everything you need. We supply each unit with high quality linens and towels, we stock all the essentials like shampoo, conditioner, and soaps. In the kitchen we provide coffee and tea, sugar, salt, pepper, ketchup, mustard and cooking oil. The kitchen also has everything you need to prepare your own meals,

you just bring your favorite foods.

Our goal is to provide you with a stress free Okanagan Getaway at our amazing Resorts. The Vacation Rentals we provide are sparkling clean and are perfect for families or business professionals.  We hope that you will consider staying with us on your next trip to Kelowna.
*/
