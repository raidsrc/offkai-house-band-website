export default function PlainQuote({ data }: {
  data: {
    words: React.ReactNode,
    attribution: string,
    link: string
    pic: string
  }
}) {
  const { words, attribution, link, pic } = data
  return (
    <>
      <blockquote className="plain-quote grid-item">
        <p className="words">
          {words}
        </p>
        <div className="pic-and-author">
          <img className="pic" src={pic}></img>
          <a className="attribution" href={link} target="_blank" rel="noreferrer">
            {attribution}
          </a>
        </div>
      </blockquote>
    </>
  )
}