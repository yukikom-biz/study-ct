import {render} from "react-dom";
import ConstSimpleMessage from "../ConstSimpleMessage";
import HiddenMessage from "../hiddenMessage";
import React from "react";

it('shows the children when the checkbox is checked', () => {
        // const testMessage: string = 'Test Message';
    // const { getByText } = render(<HiddenMessage
    //         message={testMessage}
    //     />,null);
    //
    // const byText = getByText(testMessage);
    // expect(byText).toBeInTheDocument();

        // query* functions will return the element or null if it cannot be found
        // get* functions will return the element or throw an error if it cannot be found
        // expect(screen.queryByText(testMessage)).toBeNull();


        // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
        // fireEvent.click(screen.getByLabelText(/show/i))

        // .toBeInTheDocument() is an assertion that comes from jest-dom
        // otherwise you could use .toBeDefined()
        // expect(screen.getByText(testMessage)).toBeInTheDocument()

    }
);

// it('no props component', function () {
//     render(<ConstSimpleMessage />,null);
// });