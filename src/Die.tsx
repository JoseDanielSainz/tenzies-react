export default function Die(props: any) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return (
    <button
      style={styles}
      onClick={props.hold}
    >{props.value}</button>
  )
}