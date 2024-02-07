import React from 'react'
import { Slider } from '../slider/Slider'
import { Promo } from '../promo/Promo'
import {Products} from '../products/Products'
import {Banner} from '../banner/Banner'
import {Popular} from '../popular/Popular'
import {Support} from '../support/Support'
import {Subscribe} from '../subscribe/Subscribe'


const Home = () => {
  return (
    <div>
        <Slider/>
        <Promo/>
        <Products/>
        <Banner/>
        <Popular/>
        <Support/>
        <Subscribe/>
    </div>
  )
}


export default Home;
