import { useState } from "react"
import ray from "./assets/ray.jpg"
import zal from "./assets/zal.png"
import soneji from "./assets/soneji.png"
// import obamium from "./assets/obamium.jpeg"
import bidome from "./assets/joe bidome.png"
import yiv from "./assets/yiv.jpg"
import yang from "./assets/yang.png"
import lightfiend from "./assets/lightfiend.jpg"
import nimo from "./assets/nimo.png"
import ang from "./assets/ang.jpg"
import naifs from "./assets/naifs.jpg"
import {
  WebComponent, YtComponent, IgComponent, XComponent
} from './components'

function BandGrid() {
  const members = [
    {
      name: "Ray", instrument: "Drums", img: ray, socials: {
        web: "https://raidsrc.me/links",
        yt: 'https://youtube.com/@raidsrc',
        // ig: 'https://instagram.com/raidsrc',
        // x: 'https://x.com/raidsrc',
      },
    },
    {
      name: "Yang", instrument: "Keyboard", img: yang, socials: {
        ig: 'https://example.com',
      },
    },
    {
      name: "Lightfiend", instrument: "Bass", img: lightfiend, socials: {
        x: 'https://x.com/lxtfnd',
      },
    },
    {
      name: "Ninomae Nimo", instrument: "Guitar", img: nimo, socials: {
        x: 'https://x.com/ninomaenimo',
      },
    },
    {
      name: "Yiv", instrument: "Guitar", img: yiv, socials: {
        x: 'https://x.com/yiversonh',
      },
    },
    {
      name: "Ang", instrument: "Trombone", img: ang, socials: {
        x: 'https://x.com/absoluteangles',
      },
    },
    {
      name: "Soneji", instrument: "Tenor saxophone", img: soneji, socials: {
        web: 'https://soneji.moe',
        x: 'https://x.com/justsoneji',
      },
    },
    {
      name: "Zal", instrument: "Trumpet", img: zal, socials: {
        x: 'https://x.com/zalmusicyt',
      },
    },
    {
      name: "Harrison Fjord", instrument: "Keyboard", img: bidome, socials: {
        x: 'https://x.com/harrison_fjord',
      },
    },
    {
      name: "Naifs", instrument: "Tech", img: naifs, socials: {
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
        <img src={img} id={`${name.toLocaleLowerCase()}-img`} className="no-glow" />
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
