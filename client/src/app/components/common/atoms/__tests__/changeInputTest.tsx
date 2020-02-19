import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ChangeInput from "../changeInput";

afterEach(cleanup);

test('displays the correct greeting', () => {
    const { getByLabelText, getByTestId } = render(<ChangeInput />);
    const input = getByLabelText("user-name");
    const greeting = getByTestId("change-input-greeting");

    // default set
    expect(input.value).toBe("");
    expect(greeting.textContent).toBe("Welcome, Anonymous User!");

    fireEvent.change(input, { target: { value: "Rafael" }});
    expect(input.value).toBe("Rafael");
    expect(greeting.textContent).toBe("Welcome, Rafael!");
});