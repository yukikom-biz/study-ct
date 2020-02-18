// import { addParameters, configure } from '@storybook/react';
// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import '../src/assets/reset.css';
//
// const customViewports = {
//     iPhone: {
//         name: 'iPhone6/6s/7/8',
//         styles: {
//             width: '375px',
//             height: '667px'
//         }
//     },
//     PC: {
//         name: 'PC',
//         styles: {
//             width: '768px',
//             height: '100vh'
//         }
//     }
// };
//
// addParameters({
//     viewport: {
//         viewports: {
//             ...customViewports,
//             ...INITIAL_VIEWPORTS
//         },
//         defaultViewport: 'iPhone'
//     }
// });
//
// const req = require.context('../src', true, /.stories.tsx$/);
//
// const loadStories = () => {
//     req.keys().forEach(req);
// };
//
// configure(loadStories, module);

// sample
module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
};