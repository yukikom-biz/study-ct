import * as React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import MultipleFetches from "../multipleFetch";

afterEach(cleanup);

describe('API tests', () => {
    // Group API tests so we can clear the mock more easily
    afterEach(() => global.fetch.mockClear());

    test('displays post if API succeeds', async () => {
        // Mock API
        jest.spyOn(global, 'fetch')
            .mockImplementationOnce(() => Promise.resolve({
                status: 200,
                json: () => Promise.resolve({
                    title: "How to Become a Bad Developer"
                })
            }))
            .mockImplementationOnce(() => Promise.resolve({
                status: 200,
                json: () => Promise.resolve([
                    { id: 1, name: "Rafael" },
                    { id: 2, name: "Andressa" }
                ])
            }));

        const { getByTestId, getByText, getAllByTestId } = render(<MultipleFetches />);
        fireEvent.click(getByText("Fetch post and comments"));

        await wait();

        expect(global.fetch).toHaveBeenCalledTimes(2);
        expect(global.fetch.mock.calls[0][0]).toBe("https://jsonplaceholder.typicode.com/posts/1");
        expect(global.fetch.mock.calls[1][0]).toBe("https://jsonplaceholder.typicode.com/posts/1/comments");

        expect(getByTestId("fetch-post").textContent).toBe("How to Become a Bad Developer");
        expect(getByText("All fetched!")).toBeTruthy();

        const authors = getAllByTestId("comment-author");
        expect(authors[0].textContent).toBe("Rafael");
        expect(authors[1].textContent).toBe("Andressa");
    });
});