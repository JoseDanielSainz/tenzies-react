export default function Die(props: any) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return (
    <button
      style={styles}
      onClick={props.hold}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value},
      ${props.isHeld ? "held" : "not held"}`}
    >
      {props.value === 1 ?
        <>
          <div className="pip" id="slot-five"></div>
        </>
        :
        props.value === 2 ?
          <>
            <div className="pip" id="slot-one"></div>
            <div className="pip" id="slot-nine"></div>
          </>
          :
          props.value === 3 ?
            <>
              <div className="pip" id="slot-one"></div>
              <div className="pip" id="slot-five"></div>
              <div className="pip" id="slot-nine"></div>
            </>
            :
            props.value === 4 ?
              <>
                <div className="pip" id="slot-one"></div>
                <div className="pip" id="slot-three"></div>
                <div className="pip" id="slot-seven"></div>
                <div className="pip" id="slot-nine"></div>
              </>
              :
              props.value === 5 ?
                <>
                  <div className="pip" id="slot-one"></div>
                  <div className="pip" id="slot-three"></div>
                  <div className="pip" id="slot-five"></div>
                  <div className="pip" id="slot-seven"></div>
                  <div className="pip" id="slot-nine"></div>
                </>
                :
                props.value === 6 ?
                  <>
                    <div className="pip" id="slot-one"></div>
                    <div className="pip" id="slot-three"></div>
                    <div className="pip" id="slot-four"></div>
                    <div className="pip" id="slot-six"></div>
                    <div className="pip" id="slot-seven"></div>
                    <div className="pip" id="slot-nine"></div>
                  </>
                  :
                  null
      }


    </button>
  )
}