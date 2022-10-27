import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    function face(num){
        if(num === 1){
        return (<div className="die-face first-face" style={styles}
            onClick={props.holdDice}>
                <span className="dot">
                </span>
            </div>)
        }else if(num === 2){
        return (<div className="die-face second-face" style={styles}
            onClick={props.holdDice}>
                <span className="dot">
                </span>
                <span className="dot">
                </span>
            </div>)
        }else if(num === 3){
          return (<div className="die-face third-face" style={styles}
            onClick={props.holdDice}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>)
        }else if(num === 4){
           return (<div className="fourth-face die-face" style={styles}
            onClick={props.holdDice}>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>)
        }else if(num === 5){
           return (<div className="fifth-face die-face" style={styles}
            onClick={props.holdDice}>
            
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                
                <div className="column">
                    <span className="dot"></span>
                </div>
                
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

            </div>)
        }else if(num === 6){
           return (<div className="sixth-face die-face" style={styles}
            onClick={props.holdDice}>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                        <span className="dot"></span>
                </div>
            </div>)
        }
    }
    return (
       face(props.value)
    )
}