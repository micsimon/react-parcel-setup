import React, {Suspense} from 'react';
import ReactDOM from 'react-dom'
import './index.scss'

const DynamicApp = React.lazy(() => import('./component/app'));

ReactDOM.render((
        <Suspense fallback={<div>... loading</div>}>
            <DynamicApp/>
        </Suspense>
    ),
    document.getElementById('app'));
