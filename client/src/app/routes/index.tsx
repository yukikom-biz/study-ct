import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
// import ErrorPage from 'app/components/error/ErrorPage';
// import {useMeta} from 'app/meta/CommonMeta';
import 'element-scroll-polyfill';
import LP from '../components/top/LP'
import MaintenancePage from "../components/maintenance/MaintenancePage";

export const pathStrings = {
    register: '/register',
    mypage: '/mypage',
    contact: '/contact',
    settings: {
        root: '/setting'
    },
    help: '/help',
    error: '/error',
    notFound: '/not-found',
};

const Routes = () => {
    return (
        <>
            <Switch>
                {/*<Route exact path="/" component={TopPage()}/>*/}
                <Route exact path="/" component={LP}/>
                {/*<Route exact path={pathStrings.landingPage} component={LandingPageContainer} />*/}
                <Route exact path="/maintenance" component={MaintenancePage}/>
                {/*<Route exact path="/forgotPassword" component={ForgotPasswordPage} />*/}
                {/*<Route exact path="/forgotPassword/reset" component={ResetPasswordPage} />*/}
                {/*<Route*/}
                {/*    exact*/}
                {/*    path="/error"*/}
                {/*    component={useMeta(ErrorPage, {*/}
                {/*        title: 'エラーが発生しました'*/}
                {/*    })}*/}
                {/*/>*/}
                {/*<Route exact path={pathStrings.register} component={Register}/>*/}
                {/*<Route exact path={pathStrings.register + '/:page'} component={Register}/>*/}
            </Switch>
        </>
    );
};

export default Routes;
