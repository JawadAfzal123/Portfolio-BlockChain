import React from 'react'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai"
const Home = () => {
  return (
    < >
      <div className='home' >
        <main>
          <h1>Verify Me</h1>
          <p>Solution to your problems</p>
        </main>
      </div>
      <div className='home2'>
        <img src='https://dtmvamahs40ux.cloudfront.net/gl-academy/course/course-74-ethical%20hacking.jpg' alt='Graphics' />
        <div>
          <p>We are living in the 21st century that is also termed the era of science and technologies. 
            Technology that is regarded as the application of science has become more advanced in today's generation. People are benefitted from the advent of new technologies every now and then. This has also made their life faster and easier. Several technological developments have taken place in the sector of trading and commerce. 
            I think that many of us must have heard the name of Blockchain but might not be familiar with the actual meaning of this technology.</p>
        </div>
      </div>

      <div className='home3' id='about'>
        <div>
          <h1>Who we Are</h1>
          <p>Blockchain can be stated as the online record book that is shared among all the users. This technology is utilized for recording, storing, and sharing data or information publicly. There is transparency in blocks containing the information and they are highly secured. Blockchain technology was instituted in the year 2008. 
            The credit for inventing this technology goes to Satoshi Nakamoto. He invented this digital record book or ledger to provide aid in transactions of crypto currency Bitcoin.
            
The initial name given by Satoshi Nakamoto to this technology was Block and chain written as separate words. Later in the year 2016, these two separate words were combined and called Blockchain. Blockchain does not give permission of editing any data or information in the blocks. This can only happen if there is the consent of every user. The change is considered rejected if major users are dissatisfied with the change.</p>
        </div>
      </div>

      <div className='home4' id='brands'>
        <div>
          <h1>BRANDS</h1>
          <article>
            <div
              style={{ animationdely: '0.3s' }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{ animationdelay: '0.5s' }}>
              <AiFillTwitterCircle />
              <p>Twitter</p>
            </div>
            <div
              style={{ animationdelay: '0.7s' }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{ animationdelay: '0.9s' }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
