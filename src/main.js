import { createRoot } from 'react-dom/client';
import { ConfigProvider, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import { App } from './App.js';
import "./main.css"

createRoot(document.getElementById('root')).render(
  <ConfigProvider platform={"ios"}>
    <AdaptivityProvider>
      <AppRoot>
          <App />
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>,
);
