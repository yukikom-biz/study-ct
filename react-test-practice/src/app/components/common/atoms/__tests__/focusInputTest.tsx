import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import FocusInput from "../forcusInput";

afterEach(cleanup);

test('clicking on button trigger focus on input', () => {
    const { getByPlaceholderText, getByText } = render(<FocusInput />);
    fireEvent.click(getByText("Click to Focus"));
    const input = getByPlaceholderText('Focus me!');
    expect(input).toBe(document.activeElement);
});

test('FocusInput matches snapshot', () => {
    const { container } = render(<FocusInput />);
    expect(container.firstChild).toMatchSnapshot();
});