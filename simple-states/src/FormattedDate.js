import React from "react";

class FormattedDate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>It is {this.props.date.toLocaleTimeString()}</h2>
        )
    }
}

export default FormattedDate;