import * as React from 'react';
import {render, cleanup, fireEvent} from "@testing-library/react";
import Timeout from "../timeout";
import {act} from "react-dom/test-utils";


afterEach(cleanup);
jest.useFakeTimers();

// integration
test('clicking on button displays timeout message', () => {
    const { getByText, queryByTestId, getByTestId } = render(<Timeout />);
    const button = getByText("Click to trigger timeout");
    expect(queryByTestId("timeout-message")).toBeNull();
    fireEvent.click(button);
    expect(getByTestId("timeout-message").textContent).toBe("This will timeout in 5 seconds");

    act(()=>{
        jest.advanceTimersByTime(5000);
    });

    expect(getByTestId("timeout-message").textContent).toBe("Timeout!");
});

test('clicking on button makes it disabled', () => {
    const { getByText } = render(<Timeout />);
    const button = getByText("Click to trigger timeout");
    expect(button.disabled).toBeFalsy();
    fireEvent.click(button);
    expect(button.disabled).toBeTruthy();
});