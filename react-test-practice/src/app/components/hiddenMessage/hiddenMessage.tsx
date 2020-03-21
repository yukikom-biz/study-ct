import React from "react";

type Props = {
    message:string
}

function HiddenMessage(props:Props){
    const [showMessage, setShowMessage] = React.useState(false);
    return (
        <div>
            <label htmlFor="toggle">Show Message</label>
            <input
                id="toggle"
                type="checkbox"
                onChange={e => setShowMessage(e.target.checked)}
                checked={showMessage}
            />
            {showMessage ? props.message : null}
        </div>
    )
}

export default HiddenMessage