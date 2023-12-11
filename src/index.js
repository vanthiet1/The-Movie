import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import { LanguageProvider } from './hooks/languageContext';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <I18nextProvider i18n={i18n}>
    <GlobalStyles>
      <Router>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </Router>
    </GlobalStyles>
  </I18nextProvider>
);

reportWebVitals();
