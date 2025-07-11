export default function Die(props: any) {

  return (
    <button className={props.isHeld ? 'die held-die' : 'die'}>{props.value}</button>
  )
}