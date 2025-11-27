interface MyAsideCardProps {
  title: string
  paragraph: string
  hr: boolean
}

function AsideCard({ title, paragraph, hr = true }: MyAsideCardProps) {
  if (hr) {
    return (
      <>
        <h5 className="font-bold mb-1 text-xl">{title}</h5>
        <p className="text-sm">{paragraph}</p>
        <hr className="my-[35px]" />
      </>
    )
  } else {
    return (
      <>
        <h5 className="font-bold mb-1 text-xl">{title}</h5>
        <p className="text-sm">{paragraph}</p>
      </>
    )
  }
}

export default AsideCard;