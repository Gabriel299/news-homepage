interface MyAsideCardProps {
  title: string
  paragraph: string
  hr: boolean
}

function AsideCard({ title, paragraph, hr = true }: MyAsideCardProps) {
  if (hr) {
    return (
      <>
        <a href="" className="font-bold mb-1 text-xl leading-relaxed hover:text-soft-orange">{title}</a>
        <p className="text-sm leading-relaxed">{paragraph}</p>
        <hr className="my-[30px]" />
      </>
    )
  } else {
    return (
      <>
        <a href="" className="font-bold mb-1 text-xl leading-relaxed hover:text-soft-orange">{title}</a>
        <p className="text-sm leading-relaxed">{paragraph}</p>
      </>
    )
  }
}

export default AsideCard;