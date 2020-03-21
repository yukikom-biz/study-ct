import ConstSimpleMessage from "../ConstSimpleMessage";
import HiddenMessage from "../hiddenMessage";
import React from "react";
import {fireEvent, render, screen} from '@testing-library/react'


it('shows the children when the checkbox is checked', () => {
        const testMessage: string = 'Test Message';
        render(<HiddenMessage message={testMessage}/>);
        expect(screen.queryByText(testMessage)).toBeNull();
        fireEvent.click(screen.getByLabelText(/show/i));
        expect(screen.getByText(testMessage)).toBeInTheDocument();
    }
);

it('no props component', function () {
    render(<ConstSimpleMessage/>);
});