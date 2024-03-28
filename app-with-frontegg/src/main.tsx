import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { contextOptions } from './contextOptions.ts';

import { FronteggProvider } from '@frontegg/react';


const authOptions = {
  // keepSessionAlive: true // Uncomment this in order to maintain the session alive
 };

ReactDOM.createRoot(document.getElementById('root')!).render(
<FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
  <App />
</FronteggProvider>,
)

