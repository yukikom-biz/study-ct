import * as React from 'react';
import {useState} from "react";
import TimeoutMessage from "../atoms/timeoutMessage";

const Timeout = () => {
    const [hasClicked, setHasClicked] = useState(false);
    return (
        <div>
            <button disabled={hasClicked} onClick={() => setHasClicked(true)}>
                Click to trigger timeout
            </button>
            {hasClicked && <TimeoutMessage />}
        </div>
    );
};

export default Timeout;