import './App.scss'
import Header from './components/header'
import Footer from './components/footer'
import ConsultationButton from './components/colsutationButton'
import LearnMoreButton from './components/learnMore'
import Accordion from './components/accordion'
import WebDevImg from './assets/WebDev.png'
import DigitalMarketingImg from './assets/DigitalStrategy.png'
import { useEffect, useState } from 'react'

function App() {

  const [isOutlined, setIsOutlined] = useState(true);

  const toggleOutline = () =>{
    setIsOutlined(!isOutlined);
  }
  
  useEffect(()=>{
    const elements = document.querySelectorAll('*');
    elements.forEach((element) =>{
      if(isOutlined){
        element.style.outline = 'none';
      }else{
        element.style.outline = '1px solid red';
      }
    })
  },[isOutlined]);

  return (
    <>
      <Header />
      <main>
        <section id='hero_section'>
          <div className='hero_img'>
          </div>
          <div className='hero_typo'>
            <h1>We Crush Your Competitors, Goals, And Sales Records - Without The B.S</h1>
            <ConsultationButton />
          </div>
        </section>
        <section id='services_section'>
          <div className='services'>
            <div className='webNMobileAppDev'>
              <div className='image'>
                <img src={WebDevImg} alt='Web Dev Image'></img>
              </div>
              <div className='content'>
                <h2>Web and Mobile App Development</h2>
                <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                <LearnMoreButton />
              </div>
            </div>
            <div className='digitalMarketingStrategy'>
              <div className='image'>
                <img src={DigitalMarketingImg}></img>
              </div>
              <div className='content'>
                <h2>Digital Strategy Consulting</h2>
                <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                <LearnMoreButton />
              </div>
            </div>
          </div>
        </section>
        <section id='about_section'>
          <div className='faqs'>
            <h2>Frequently asked questions</h2>
            <Accordion title="What is Webflow and why is it the best website builder?">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, libero non deserunt voluptatem soluta ipsa itaque officiis culpa quod repudiandae at nam, accusamus iste recusandae quia molestias sapiente excepturi aliquam! </p>
            </Accordion>
            <Accordion title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque aliquid at veritatis est, repellat sed maxime repellendus porro quam, voluptatum sequi impedit culpa ab atque. Repellendus dolores at commodi!</p>
            </Accordion>
            <Accordion title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reiciendis! Est iste corrupti odio sapiente cupiditate vero perferendis magnam enim, temporibus minima distinctio, repudiandae, illum voluptatum. Expedita molestias voluptate ducimus.
              Consectetur labore nisi, rerum quos autem placeat accusamus dicta officia fuga exercitationem totam obcaecati nihil excepturi ipsum tenetur amet saepe at. Rerum consequatur porro mollitia numquam voluptatum maxime iusto eius!</p>
            </Accordion>
          </div>
        </section>
      </main>
      <button className='show_outline' onClick={toggleOutline}>Toggle Outline (Development)</button>
      <Footer />
    </>
  )
}

export default App
