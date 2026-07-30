import { useState } from "react"

function BandGrid() {
  const members = [
    {
      name: "Ray", instrument: "Drums", socials: {
        yt: 'https://youtube.com/@raidsrc',
        x: 'https://x.com/raidsrc',
        ig: 'https://instagram.com/raidsrc',
      },
    },
    {
      name: "Yang", instrument: "Keyboard", socials: {
        ig: 'https://example.com',
      },
    },
    {
      name: "Lightfiend", instrument: "Bass", socials: {
        x: 'https://x.com/lxtfnd',
      },
    },
    {
      name: "Lightfiend", instrument: "Bass", socials: {
        x: 'https://x.com/lxtfnd',
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
  const socials = member.socials as Record<string, string>
  const handleMouseover = () => {
    setHoverStyleClass("visible")
  }
  const handleMouseout = () => {
    setHoverStyleClass("hidden")
  }
  return (
    <div className="member-component" >
      <div className="image-and-overlaid-text">
        <img src="./assets/obamium.jpeg" onMouseOver={handleMouseover} onMouseOut={handleMouseout} />
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
              case 'yt':
                return <YtComponent link={link} />
              case 'x':
                return <XComponent link={link} />
              case 'ig':
                return <IgComponent link={link} />
              default:
                return <></>
            }
          })
        }
      </div>
    </div>
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
