
export default function PlainQuote({ data }: {
  data: {
    words: string,
    attribution: string
    link?: string // if link is present, the attribution should link to the person's twitter.
  }
}) {
  const { words, attribution, link } = data
  return (
    <>
      <blockquote className="plain-quote grid-item">
        <p className="words">
          {words}
        </p>
        {
          link
            ?
            <a className="attribution" href={link}>
              {attribution}
            </a>
            :
            <div className="attribution">
              {attribution}
            </div>
        }
      </blockquote>
    </>
  )
}