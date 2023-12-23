import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(

  <GlobalStyles>
    <Router>
      <App />
    </Router>
  </GlobalStyles>

);

reportWebVitals();
