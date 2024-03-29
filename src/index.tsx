import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';

import ContextProvider from './contexts/ContextProvider';

// Registering Syncfusion license key
registerLicense("MTY1NjQ0NUAzMjMxMmUzMTJlMzMzNVhpaWFsdkttOUp6dXhtem9lL3Bmb0YzYlRYYXA1Y1lsT2VCWHRlWWVwOEE9;Mgo+DSMBaFt+QHFqVkNrWE5Fc0BAXWFKblJ8R2pTf1xgBShNYlxTR3ZbQlVjSHxadkdgUH1e;Mgo+DSMBMAY9C3t2VFhhQlJBfVtdXGZWfFN0RnNYdVx5flVEcC0sT3RfQF5jTX5bdkRhUH9cdHRQRg==;Mgo+DSMBPh8sVXJ1S0d+X1RPckBDWHxLflF1VWJTfVd6dFdWESFaRnZdQV1nSXZTd0dqWX1acXxV;MTY1NjQ0OUAzMjMxMmUzMTJlMzMzNW41MXVwZ1VDMnQrUVFGRDlNWjRRQ3h3cGViNzFlV2s3blh5dGFWd3ZJaE09;NRAiBiAaIQQuGjN/V0d+XU9Hc1RGQmJMYVF2R2BJflRyfV9GYkwgOX1dQl9gSXpTfkViW3ZecnBRT2A=;ORg4AjUWIQA/Gnt2VFhhQlJBfVtdXGZWfFN0RnNYdVx5flVEcC0sT3RfQF5jTX5bdkRhUH9cdHJURg==;MTY1NjQ1MkAzMjMxMmUzMTJlMzMzNWRuOTNYRFB4S1E5aGFSbk9NVTFNZzJva0tES0xURzJYNHN5dTJQZWRuUmM9;MTY1NjQ1M0AzMjMxMmUzMTJlMzMzNWhGMCs5K1dQTUNkT0Z4M1NpQUxmb3BubzE2b2Z6S0kvaCs3QjZyT3NudDQ9;MTY1NjQ1NEAzMjMxMmUzMTJlMzMzNVg4KzIwTUlvU3dXRXBVVUt5UjE2SXVKOEFIckFjS1VxU1hhQjhBTlNBMms9;MTY1NjQ1NUAzMjMxMmUzMTJlMzMzNVNkVUIyYjEyN2JiVVQxM3g4ejFpTmRzbFVYZVVIVEp4WkJpeXVIZUorZGM9;MTY1NjQ1NkAzMjMxMmUzMTJlMzMzNVhpaWFsdkttOUp6dXhtem9lL3Bmb0YzYlRYYXA1Y1lsT2VCWHRlWWVwOEE9");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);


