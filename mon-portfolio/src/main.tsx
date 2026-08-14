import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ReactGA from 'react-ga4';

ReactGA.initialize('G-EVY3613F93'); 

// Envoyer la première vue de page
ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


