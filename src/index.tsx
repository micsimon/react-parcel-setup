import React, {Suspense} from 'react';
import ReactDOM from 'react-dom'
import './index.css'

const DynamicApp = React.lazy(() => import('./component/app'));

ReactDOM.render((
        <Suspense fallback={<div>... loading</div>}>
            <DynamicApp/>
        </Suspense>
    ),
    document.getElementById('app'));
