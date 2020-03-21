import * as React from 'react';
import {cleanup, fireEvent, render, wait} from '@testing-library/react';
import Fetch from "../fetch";

afterEach(cleanup);

test('starts without any joke', () => {
    const {queryByTestId} = render(<Fetch/>);
    expect(queryByTestId("fetch-joke")).toBeNull();
});

test('after clicking on button, displays loading message', () => {
    const {getByTestId, getByText} = render(<Fetch/>);
    fireEvent.click(getByText("Get a Chuck Norris joke"));
    expect(getByTestId("fetch-loading").textContent).toBe("Loading...");
});

test('after clicking on button, displays joke if API succeeds', async () => {
    const joke = "Chuck Norris counted to infinity. Twice.";

    // Mock API
    jest.spyOn(global, 'fetch')
        .mockImplementation(() => Promise.resolve({
            status: 200,
            json: () => Promise.resolve({
                value: joke
            })
        }));

    const {getByTestId, getByText} = render(<Fetch/>);
    fireEvent.click(getByText("Get a Chuck Norris joke"));
    await wait(() => getByTestId("fetch-joke"));

    expect(getByTestId("fetch-joke").textContent).toBe(joke);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/random");

    // Clear mock
    global.fetch.mockClear();
});