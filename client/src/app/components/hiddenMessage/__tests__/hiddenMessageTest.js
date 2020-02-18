import React from 'react'
import ReactDOM from 'react-dom'
import {render} from "react-dom";
// import ConstSimpleMessage from "../ConstSimpleMessage";
//
// it('no props component', function () {
//     render(<ConstSimpleMessage />)
// });

test('supports fragments', () => {
    class Test extends React.Component {
        render() {
            return (
                <div>
                <code>DocumentFragment</code> is pretty cool!
                </div>
        )
        }
    }
    const {asFragment} = render(<Test />)
    expect(asFragment()).toMatchSnapshot()
})