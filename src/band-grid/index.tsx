import { useState } from "react"
import '../styles/style-band.css'
import ray from "../assets/ray.jpg"
import zal from "../assets/zal.jpg"
import soneji from "../assets/soneji.jpg"
// import obamium fro.m "./assets/obamium.jpeg"
// import bidome from "../assets/joe bidome.png"
import harrison from "../assets/harrison fjord.jpg"
import yiv from "../assets/yiv.jpg"
import yang from "../assets/yang.jpg"
import lightfiend from "../assets/lightfiend.jpg"
import nimo from "../assets/ninomae nimo.jpg"
import ang from "../assets/ang.jpg"
import naifs from "../assets/naifs.jpg"
import raySm from "../assets/ray-sm.jpg"
import zalSm from "../assets/zal-sm.jpg"
import sonejiSm from "../assets/soneji-sm.jpg"
import harrisonSm from "../assets/harrison fjord-sm.jpg"
import yivSm from "../assets/yiv-sm.jpg"
import yangSm from "../assets/yang-sm.jpg"
import lightfiendSm from "../assets/lightfiend-sm.jpg"
import nimoSm from "../assets/ninomae nimo-sm.jpg"
import angSm from "../assets/ang-sm.jpg"
import naifsSm from "../assets/naifs-sm.jpg"
import {
  WebComponent, YtComponent, IgComponent, XComponent
} from './components'

function BandGrid() {
  const members = [
    {
      name: "Ray", instrument: "Drums", img: ray, imgSm: raySm, socials: {
        web: "https://raidsrc.me/links",
        yt: 'https://youtube.com/@raidsrc',
        // ig: 'https://instagram.com/raidsrc',
        // x: 'https://x.com/raidsrc',
      },
    },
    {
      name: "Yang", instrument: "Keyboard", img: yang, imgSm: yangSm, socials: {
        ig: 'https://example.com',
      },
    },
    {
      name: "Lightfiend", instrument: "Bass", img: lightfiend, imgSm: lightfiendSm, socials: {
        x: 'https://x.com/lxtfnd',
      },
    },
    {
      name: "Ninomae Nimo", instrument: "Guitar", img: nimo, imgSm: nimoSm, socials: {
        x: 'https://x.com/ninomaenimo',
      },
    },
    {
      name: "Yiv", instrument: "Guitar", img: yiv, imgSm: yivSm, socials: {
        x: 'https://x.com/yiversonh',
      },
    },
    {
      name: "Ang", instrument: "Trombone", img: ang, imgSm: angSm, socials: {
        x: 'https://x.com/absoluteangles',
      },
    },
    {
      name: "Soneji", instrument: "Tenor saxophone", img: soneji, imgSm: sonejiSm, socials: {
        web: 'https://soneji.moe',
        x: 'https://x.com/justsoneji',
      },
    },
    {
      name: "Zal", instrument: "Trumpet", img: zal, imgSm: zalSm, socials: {
        x: 'https://x.com/zalmusicyt',
      },
    },
    {
      name: "Harrison Fjord", instrument: "Keyboard", img: harrison, imgSm: harrisonSm, socials: {
        x: 'https://x.com/harrison_fjord',
      },
    },
    {
      name: "Naifs", instrument: "Tech", img: naifs, imgSm: naifsSm, socials: {
        x: 'https://x.com/naifs_eri',
      },
    },
  ]
  return (
    <>
      {
        members.map((member) => {
          return <BandMemberComponent key={member.name} member={member} />
        })
      }
    </>
  )
}

function BandMemberComponent({ member }: {
  member: Record<string, string | unknown>
}) {
  const [hoverStyleClass, setHoverStyleClass] = useState("hidden")
  const name = member.name as string
  const instrument = member.instrument as string
  const img = member.img as string
  const imgSm = member.imgSm as string
  const socials = member.socials as Record<string, string>
  const handleMouseover = () => {
    setHoverStyleClass("visible")
  }
  const handleMouseout = () => {
    setHoverStyleClass("hidden")
  }
  return (
    <div className="member-component" id={`${name.toLocaleLowerCase()}-member-component`} >
      <div className="image-and-overlaid-text" onMouseOver={handleMouseover} onMouseOut={handleMouseout} >
        <img src={img} alt={`photo of ${name.toLocaleLowerCase()}`} id={`${name.toLocaleLowerCase()}-img`} className="no-glow" 
        srcSet={`${img} 800w, ${imgSm} 480w`} 
        // i've never used srcset and sizes before so here's the cliffsnotes
        // the big image is 800 px wide approximately, the small one is 480 px. w unit is the same as px. 
        sizes={`(min-width: 660px) 80vw, 40vw`}
        // if our screen is bigger than 660px, use the image that is 80 vw wide, otherwise find one that's larger and shrink it to fill the 80 vw slot. otherwise use the image that is smaller than that but larger than 40vw and shrink it to fit.
        />
        <div className={`text ${hoverStyleClass}`}>
          <div>{name}</div>
          <div>{instrument}</div>
        </div>
      </div>
      <div className="social-links">
        {
          Object.entries(socials).map((soc) => {
            const type = soc[0]
            const link = soc[1]
            switch (type) {
              case 'web':
                return <WebComponent link={link} key={link} />
              case 'yt':
                return <YtComponent link={link} key={link} />
              case 'x':
                return <XComponent link={link} key={link} />
              case 'ig':
                return <IgComponent link={link} key={link} />
              default:
                return <></>
            }
          })
        }
      </div>
    </div>
  )
}

export default BandGrid
