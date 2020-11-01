import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                    className='home__image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt="Amazon Banner"
                />

                <div className="home__row">
                    <Product 
                        id='12321341'
                        title='The lean startup: How Constant Innovation Creates Radically Seccessful Businesses Paperback' 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={3}
                    />
                    <Product 
                        id='49538094'
                        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
                        price={239.0}
                        image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id='4903850'
                        title='Huawei Watch GT FTN-B19 acero inoxidable con Correa Híbrido de Sillin Marron - acero'
                        price={87.40}
                        image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQKHdDs6DmEZGJqP50x_J2ZBoYdQmX0mQdujv4Nrnq2kwXr-Ppw83wkFAfPsjwoZVCHkWwT4s4iww8Uqj9hF-pgWZ4KUEJ2pw&usqp=CAY"
                        rating={3}
                    />
                    <Product 
                        id='23445990'
                        title='Echo Studio – High-fidelity smart speaker with Philips Hue Bulbs – Alexa smart home starter kit'
                        price={229.93}
                        image='https://images-na.ssl-images-amazon.com/images/I/71KEIWsn0tL._AC_SL1000_.jpg'
                        rating={4}
                    />
                    <Product 
                        id='3254354345'
                        title='Apple iPad Pro (11 pulgadas, Wi-Fi + celular, 1 TB) - Plata (2ª generación), Gris espacial' 
                        price={1029.92}
                        image='https://images-na.ssl-images-amazon.com/images/I/815ztYEEwYL._AC_SL1500_.jpg'
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id='4903850'
                        title='Samsung 49" CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) - 120Hz Refresh, Ultrawide Screen QLED Computer Monitor, 5120 x 1440p Resolución, 4ms Response, FreeSync 2 con HDR, HDMI'
                        price={999.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home