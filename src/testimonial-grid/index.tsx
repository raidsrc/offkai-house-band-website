import "../styles/style-testimonial.css"
import PlainQuote from "./components/PlainQuote"

export default function TestimonialGrid() {
  const plainQuotes = [
    {
      words: "...I didn't realize it was gonna be a live band and have Yuu shake my bones in the best way was amazing. Like being back at a god-tier music festival.",
      attribution: "LSotek"
    },
    {
      words: "Another quote goes here. Sample text. Uchiage was amazing. I'm totally not biased. ",
      attribution: "raidsrc"
    },
  ]
  return (
    <>
      <div className="grid-overflower">
        <div className="grid-holder">
          <div className="grid">
            <div className="col">
              <div className="grid-item">
                <blockquote className="twitter-tweet ">
                  <p lang="en" dir="ltr">Rehearsal for tomorrow&#39;s relay concert ✅<br />The band sound INCREDIBLE!!!<br /><br />Say
                    hi if you see me around, OffKai~ <a href="https://t.co/12edkXaLR7">pic.twitter.com/12edkXaLR7</a></p>&mdash;
                  WUNDER RiKU 🎵🪽 Songwriter| ✈️ ➡️ OffKai (@WunderRiKU) <a
                    href="https://x.com/WunderRiKU/status/2081090499616907464?ref_src=twsrc%5Etfw">July 25, 2026</a>
                </blockquote>
              </div>

              <div className="grid-item">
                <blockquote className="twitter-tweet ">
                  <p lang="en" dir="ltr">IF YOUR ANIME BAND DOESN&#39;T HAVE HORNS I DON&#39;T WANT IT<br /><br />big bless ups to
                    the house band uchiage and project mikan MY GOATS AND INSPIRATION FOREVERMORE</p>&mdash; Moguri @ Homekai
                  2026 (@MogKnight) <a href="https://x.com/MogKnight/status/2081533481017114900?ref_src=twsrc%5Etfw">July 27,
                    2026</a>
                </blockquote>
              </div>

            </div>
            <div className="col">
              <PlainQuote words={plainQuotes[1].words} attribution={plainQuotes[1].attribution} />

              <div className="grid-item">
                <blockquote className="twitter-tweet ">
                  <p lang="en" dir="ltr">‼️Come to the Offkai Relay: Carousel Concert today at 3PM at the Spotlight
                    Stage‼️<br /><br />Everyone is amazing talented and swag - and genuinely the band is amazing you don’t wanna
                    miss out:)<a href="https://x.com/hashtag/OffkaiGen5?src=hash&amp;ref_src=twsrc%5Etfw">#OffkaiGen5</a> <a
                      href="https://t.co/9PU9LyOQaL">pic.twitter.com/9PU9LyOQaL</a></p>&mdash; wumbojam🪨🤘 (@wumbojam) <a
                        href="https://x.com/wumbojam/status/2081393179304321275?ref_src=twsrc%5Etfw">July 26, 2026</a>
                </blockquote>
              </div>

              <PlainQuote words={plainQuotes[0].words} attribution={plainQuotes[0].attribution} />
            </div>

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



            <script async src="https://platform.x.com/widgets.js" charSet="utf-8"></script>
          </div>
        </div>
      </div>
    </>

  )
}
