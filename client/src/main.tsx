import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {hot, setConfig} from 'react-hot-loader';
// import { configureStore, history } from 'app/store';
import './assets/reset.css';
import Routes from "./app/routes";
import {Router} from "react-router";
import { createBrowserHistory } from "history";

// import { GASetup } from 'app/utils/googleAnalyticsUtil';
// import { ToastProvider } from 'app/hooks/useToast';
// import ErrorBoundary from 'app/middleware/ErrorBoundary';
// import { trackingConfigure } from 'app/tracking/trackingUtil';
// import { TrackingProvider } from 'app/hooks/useTracking';
// import VersionManager from 'app/components/version/VersionManager';
// import MaintenanceManager from 'app/components/maintenance/MaintenanceManager';

// todo : トラッキングとか、GTMとかいずれ勉強したいなーという気持ちを込めて。コメント
// trackingConfigure();
// GtmSetup(googleConfigure.GTM);
// GASetup(googleConfigure.GA.gaId);

// const store = configureStore();
const history = createBrowserHistory();

const App = hot(module)(() => <Routes/>);
setConfig({logLevel: 'no-errors-please'});

ReactDOM.render(
    <Router  history={history}>
    <App/>
    </Router>,
    document.getElementById('root')
);
