import React from "react";
import "./Tick.css";

class Tick extends React.Component {
    render() {
        return <p><span className="tick-label">Tick:</span> {this.props.date}</p>
    }
}

export default Tick;    