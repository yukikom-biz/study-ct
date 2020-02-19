import React from 'react'
import {render} from '@testing-library/react'

test('supports fragments', () => {
    function Test() {
        return (
            <div>
                <code>DocumentFragment</code> is pretty cool!
            </div>
        )
    }
    const {asFragment} = render(<Test/>);
    expect(asFragment()).toMatchSnapshot()
});