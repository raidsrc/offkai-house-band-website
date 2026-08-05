
export default function PlainQuote({ words, attribution }: {
  words: string,
  attribution: string
}) {
  return (
    <>
      <blockquote className="plain-quote grid-item">
        <p className="words">
          {words}
        </p>
        <div className="attribution">
          {attribution}
        </div>
      </blockquote>
    </>
  )
}