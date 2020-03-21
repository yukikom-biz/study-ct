import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Counter from "../counter";

afterEach(cleanup);

test('count starts with 0', () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("count").textContent).toBe("Clicked 0 times");
});

test('clicking on button increments counter', () => {
    const { getByText, getByTestId } = render(<Counter />);
    fireEvent.click(getByText("Increment"));
    expect(getByTestId("count").textContent).toBe("Clicked 1 time");
    fireEvent.click(getByText("Increment"));
    expect(getByTestId("count").textContent).toBe("Clicked 2 times");
});


test('window title changes after every increment if checkbox is checked', () => {
    window.document.title = "My Awesome App";
    const { getByText, getByLabelText } = render(<Counter />);

    // When checkbox is unchecked, incrementing has no effect
    fireEvent.click(getByText("Increment"));
    expect(window.document.title).toBe("My Awesome App");

    // Check and assert the document title changes
    const checkbox = getByLabelText("Check to display count in document title");
    fireEvent.click(checkbox);
    expect(window.document.title).toBe("Total number of clicks: 1");

    // Works if you increment multiple times
    fireEvent.click(getByText("Increment"));
    expect(window.document.title).toBe("Total number of clicks: 2");

    // Unchecking will return to the original document title
    fireEvent.click(checkbox);
    expect(window.document.title).toBe("My Awesome App");
});