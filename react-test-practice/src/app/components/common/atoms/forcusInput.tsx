import * as React from 'react';

const FocusInput = () => {
    const inputRef = React.useRef(null);
    return (
        <div>
            <input
                type="text"
                aria-label="focus-input"
                ref={inputRef}
                placeholder="Focus me!"
            />
            <button onClick={() => inputRef.current.focus()}>
                Click to Focus
            </button>
        </div>
    )
};

export default FocusInput;