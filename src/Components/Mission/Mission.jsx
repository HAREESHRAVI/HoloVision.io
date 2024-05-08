import React from 'react'
import './Mission.css'
import mission from '../../assets/mission.png';
import vision from '../../assets/vision.png';
const Mission = () => {
  return (
    <>
    <div className="mission-container">
        <div className="mission-heading"><h1>Mission</h1></div>
        <div className="mission-contents">
          <div className="mission-description">Revive the past through holographic technology, preserving the essence of extinct flora and fauna to inspire conservation efforts.</div>
          <div className="mission-image">
            <img src={mission} alt="" />
          </div>
        </div>
        </div>
        <div className="vision-container">
          <div className="vision-heading"><h1>Vision</h1></div>
          <div className="vision-contents">
          <div className="vision-description">Revive the past through holographic technology, preserving the essence of extinct flora and fauna to inspire conservation efforts.</div>
          <div className="vision-image">
            <img src={vision} alt="" />
          </div>
        </div>
        <div className="vision-content"> Envision a future where holographic experiences reconnect humanity with Earth's lost biodiversity, fostering a profound appreciation for our planet's natural history.</div>
        </div>
    
    </>
  )
}

export default Mission