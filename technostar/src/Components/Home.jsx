import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
function Home() {
  return (
    <>
      <div className='home'id='home'>
        <main>
          <h1>TechyStar</h1>
          <p>A Solution to the all Problems</p>
        </main>
      </div>
      <div className='home2'>
        <img src={vg} />
        <div>
          <p>
            We are your one and only solution to the tech problems
            you face
            everday. We are leading tech company whose aim is to
            increase the
            problem solving ability in children
          </p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who We Are?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolores omnis voluptas hic laborum sunt molestias? Magni aliquid, ipsum praesentium repellat eos suscipit assumenda nemo expedita nam nobis unde provident?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium enim, molestiae expedita provident maxime odio animi error saepe temporibus ullam inventore, fuga ducimus facere. Numquam eligendi fugiat aut et minima!
          </p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
          <div style={{animationDelay:'0.3s',}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{animationDelay:'0.5s',}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{animationDelay:'0.7s',}}>
            <AiFillYoutube/>
            <p>YouTube</p>
          </div>
          <div style={{animationDelay:'1s',}}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home