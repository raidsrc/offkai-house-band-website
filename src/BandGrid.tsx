import { useState } from "react"
import ray from "./assets/ray.png"
import zal from "./assets/zal.png"
import soneji from "./assets/soneji.png"
import obamium from "./assets/obamium.jpeg"
// import yiv from "./assets/yiv.png"
import yang from "./assets/yang.png"
import lightfiend from "./assets/lightfiend.png"
import nimo from "./assets/nimo.png"

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
      name: "Yiv", instrument: "Guitar", img: obamium, socials: {
        x: 'https://x.com/yiversonh',
      },
    },
    {
      name: "Ang", instrument: "Trombone", img: obamium, socials: {
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
      name: "Harrison Fjord", instrument: "Keyboard", img: obamium, socials: {
        x: 'https://x.com/harrison_fjord',
      },
    },
    {
      name: "Naifs", instrument: "Tech", img: obamium, socials: {
        x: 'https://x.com/harrison_fjord',
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
        <img src={img} id={`${name.toLocaleLowerCase()}-img`} className="no-glow"/>
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



function WebComponent({ link }: {
  link: string
}) {
  return (
    <a href={link} target="_blank" aria-label="Website" className="web-component">
      <svg width="100px" height="100px" viewBox="2.5 2.5 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 16.5H19.5M5.5 8.5H19.5M4.5 12.5H20.5M12.5 20.5C12.5 20.5 8 18.5 8 12.5C8 6.5 12.5 4.5 12.5 4.5M12.5 4.5C12.5 4.5 17 6.5 17 12.5C17 18.5 12.5 20.5 12.5 20.5M12.5 4.5V20.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z" strokeWidth="1.2" stroke="#555" />
      </svg>
    </a>

  )
}

function YtComponent({ link }: {
  link: string
}) {
  return (
    <a href={link} target="_blank" aria-label="YouTube" className="yt-component">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 24 12a31.8 31.8 0 0 0-.5-5.8z" />
        <path d="M9.5 8.5v7l6-3.5z" fill="#fff" />
      </svg>
    </a>

  )
}
function XComponent({ link }: {
  link: string
}) {
  return (
    <a href={link} target="_blank" aria-label="X" className="x-component">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.55l-5.13-6.72L5.19 22H2l7.61-8.7L1.5 2h6.71l4.64 6.13L18.244 2zm-1.15 18h1.8L7.23 3.89H5.31L17.094 20z" />
      </svg>
    </a>

  )
}
function IgComponent({ link }: {
  link: string
}) {
  return (
    <a href={link} target="_blank" aria-label="Instagram" className="ig-component">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11.5 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
      </svg>
    </a>
  )
}


export default BandGrid
