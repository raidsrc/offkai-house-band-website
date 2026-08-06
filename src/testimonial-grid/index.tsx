import "../styles/style-testimonial.css"
import PlainQuote from "./components/PlainQuote"
import aida from "./assets/aida.jpg"
import lsotek from "./assets/lsotek.png"
import riyo from "./assets/riyo.jpg"
import tofie from "./assets/tofie.jpg"

export default function TestimonialGrid() {
  const plainQuotes = [
    {
      words: <>Thank you [Ray] so much for drumming! I saw a snippet of the performance and it sounded AMAZING. You went <span className="bold">crazy</span>! You went <span className="bold">sicko mode</span>.</>,
      attribution: "Aida Lyra",
      link: "https://x.com/aida_lyra",
      pic: aida
    },
    {
      words: <>...I didn't realize it was gonna be a live band and have <a href="https://x.com/hiiragiyuu_vt" target="_blank" rel="noreferrer">Yuu</a> shake my bones in the best way was amazing. Like being back at a <span className="bold">god-tier music festival</span>.</>,
      attribution: "LSotek",
      link: "https://x.com/lsotek",
      pic: lsotek
    },
    {
      words: <>Thank you so much <a href="https://x.com/ninomaenimo" target="_blank" rel="noreferrer">Nimo</a> for all the hard work! You guys are seriously the best- <span className="bold">I had the time of my life</span>!</>,
      attribution: "Otoharu Riyo",
      link: "https://x.com/otoharuriyo",
      pic: riyo
    },
    {
      words: <>...thank you all so much for sharing your amazing talents with us at the relay concert... as someone who composes almost entirely digitally, live music is like pure magic to me and <span className="bold">I would be honored to have the opportunity to share the stage with you all again</span>... thank you so much again for your hard work!</>,
      attribution: "Tofie",
      link: "https://x.com/tofiemusic",
      pic: tofie
    }
  ]
  return (
    <>
      <div className="grid-overflower">
        <div className="grid-holder">
          <div className="grid">
            <div className="col">
              <div className="grid-item">
                <blockquote className="twitter-tweet ">
                  <p lang="en" dir="ltr">🥺💖<br /><br />There aren&#39;t enough words in the world to express how I feel after this
                    show. Thank you to Uchiage, Mikan Project, OffKai Expo Staff, my fellow Relay Carousel performers, and
                    everyone who came out to the show tonight. Tonight&#39;s show has been carved into my heart😭💕 <a
                      href="https://t.co/SBzYYYeKYu">https://t.co/SBzYYYeKYu</a> <a
                        href="https://t.co/SygtIog0oc">pic.twitter.com/SygtIog0oc</a></p>&mdash; 柊優 | Hiiragi Yuu🖤🌙🔜OFFKAI Gen
                  5 (@HiiragiYuu_Vt) <a href="https://x.com/HiiragiYuu_Vt/status/2081575235434713430?ref_src=twsrc%5Etfw">July
                    27, 2026</a>
                </blockquote>
              </div>

            </div>
            <div className="col">
              <PlainQuote data={plainQuotes[0]} />

              <div className="grid-item">
                <blockquote className="twitter-tweet ">
                  <p lang="en" dir="ltr">‼️Come to the Offkai Relay: Carousel Concert today at 3PM at the Spotlight
                    Stage‼️<br /><br />Everyone is amazing talented and swag - and genuinely the band is amazing you don’t wanna
                    miss out:)<a href="https://x.com/hashtag/OffkaiGen5?src=hash&amp;ref_src=twsrc%5Etfw">#OffkaiGen5</a> <a
                      href="https://t.co/9PU9LyOQaL">pic.twitter.com/9PU9LyOQaL</a></p>&mdash; wumbojam🪨🤘 (@wumbojam) <a
                        href="https://x.com/wumbojam/status/2081393179304321275?ref_src=twsrc%5Etfw">July 26, 2026</a>
                </blockquote>
              </div>

              <PlainQuote data={plainQuotes[1]} />
            </div>

            <div className="col">

              <PlainQuote data={plainQuotes[3]} />

              <PlainQuote data={plainQuotes[2]} />

              <div className="grid-item">
                <blockquote className="twitter-tweet ">
                  <p lang="en" dir="ltr">IF YOUR ANIME BAND DOESN&#39;T HAVE HORNS I DON&#39;T WANT IT<br /><br />big bless ups to
                    the house band uchiage and project mikan MY GOATS AND INSPIRATION FOREVERMORE</p>&mdash; Moguri @ Homekai
                  2026 (@MogKnight) <a href="https://x.com/MogKnight/status/2081533481017114900?ref_src=twsrc%5Etfw">July 27,
                    2026</a>
                </blockquote>
              </div>

              <div className="grid-item">
                <blockquote className="twitter-tweet ">
                  <p lang="en" dir="ltr">Rehearsal for tomorrow&#39;s relay concert ✅<br />The band sound INCREDIBLE!!!<br /><br />Say
                    hi if you see me around, OffKai~ <a href="https://t.co/12edkXaLR7">pic.twitter.com/12edkXaLR7</a></p>&mdash;
                  WUNDER RiKU 🎵🪽 Songwriter| ✈️ ➡️ OffKai (@WunderRiKU) <a
                    href="https://x.com/WunderRiKU/status/2081090499616907464?ref_src=twsrc%5Etfw">July 25, 2026</a>
                </blockquote>
              </div>

            </div>
            <script async src="https://platform.x.com/widgets.js" charSet="utf-8"></script>
          </div>
        </div>
      </div>
    </>

  )
}
