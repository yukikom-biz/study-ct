'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// config after eject: we're in ./config/
module.exports = {
    appPath: resolveApp('.'),
    appSourcePath: resolveApp('src'),
    appPublic: resolveApp('src/assets'),
    appBuild: resolveApp('dist'),
    appHtml: resolveApp('src/assets/index.html'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src/app'),
    appTsConfig: resolveApp('tsconfig.json'),
    yarnLockFile: resolveApp('yarn.lock'),
    appNodeModules: resolveApp('node_modules'),
};
