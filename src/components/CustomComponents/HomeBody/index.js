import React from 'react'
import style from './style.module.scss'

class HomeBody extends React.Component {

  render() {
    return (

      <div className={style.HomeBody}>
        <h1 strong>
        Thank-you for visiting OkanaganGetaways.com!
        </h1>
        <h2>  
        We are excited to offer you seasonal accommodations and vacation rentals in some of the best resorts Kelowna has to offer.  Whether you want to be right downtown along the waterfront or in the trendy Mission we have something that will make your vacation or business trip to Kelowna great!
        </h2>
        <br />
        <h2>
        Our suites are fully stocked with everything you need. We supply each unit with high quality linens and towels, we stock all the essentials like shampoo, conditioner, and soaps. In the kitchen we provide coffee and tea, sugar, salt, pepper, ketchup, mustard and cooking oil. The kitchen also has everything you need to prepare your own meals, you just bring your favorite foods.  Our goal is to provide you with a stress free Okanagan Getaway at our amazing Resorts.
        </h2>
        <h2>
        The Vacation Rentals we provide are sparkling clean and are perfect for families or business professionals.  We hope that you will consider staying with us on your next trip to Kelowna.
        </h2>
      </div>
    )
  }
}

export default HomeBody
