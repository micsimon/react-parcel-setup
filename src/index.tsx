import React, {Suspense} from 'react';
import ReactDOM from 'react-dom'
import './index.scss'
import {Provider} from "react-redux";
import createStore from "./redux/createStore";


const disableReactDevTools = (): void => {
    const noop = (): void => undefined;
    const DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;

    if (typeof DEV_TOOLS === 'object') {
        for (const [key, value] of Object.entries(DEV_TOOLS)) {
            DEV_TOOLS[key] = typeof value === 'function' ? noop : null;
        }
    }
};

disableReactDevTools();

const store = createStore();

const DynamicApp = React.lazy(() => import('./component/App'));

ReactDOM.render((
        <Provider store={store}>
            <Suspense fallback={<div>... loading</div>}>
                <DynamicApp/>
            </Suspense>
        </Provider>
    ),
    document.getElementById('app'));
