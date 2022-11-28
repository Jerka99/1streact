// import { useState } from "react";

const Bars = (props) => {
    // const [position, changePosition] = useState();
    // const toggleClass = () => {
    //     changePosition(!props.stt0)
    // }

    return<>
 <div /*onClick={toggleClass}*/ className={`bar-holder ${props.stt0 ? "active" : ""}`} > 
    <div className="bars bar1"></div>
    <div className="bars bar2"></div>
</div>
    </>
}

export default Bars;