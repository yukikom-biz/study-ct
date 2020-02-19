import * as React from 'react';
import {cleanup, render} from '@testing-library/react';
import TimeoutMessage from "../timeoutMessage";
import {act} from "react-dom/test-utils";

jest.useFakeTimers();

afterEach(cleanup);

test('renders with default text', () => {
    const {getByTestId} = render(<TimeoutMessage/>);
    expect(getByTestId("timeout-message").textContent).toBe("This will timeout in 5 seconds");
});

test('text changes after timeout', () => {
    const {getByTestId} = render(<TimeoutMessage/>);
    act(()=>{
        jest.runAllTimers();
    });
    expect(getByTestId("timeout-message").textContent).toBe("Timeout!");
});
