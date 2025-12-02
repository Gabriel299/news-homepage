interface MyAsideCardProps {
  title: string
  paragraph: string
  hr: boolean
}

function AsideCard({ title, paragraph, hr = true }: MyAsideCardProps) {
  return (
    <>
      <a href="" className="text-xl font-bold mb-1 leading-relaxed hover:text-soft-orange">{title}</a>
      <p className="text-sm leading-relaxed">{paragraph}</p>
      {hr && <hr className="my-[26px]" />}
    </>
  )
}

export default AsideCard;