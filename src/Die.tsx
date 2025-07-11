export default function Die(props: any) {
  return (
    <button className="die">
      <span>{props.value}</span>
    </button>
  )
}