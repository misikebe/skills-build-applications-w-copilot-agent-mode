
// Set REACT_APP_CODESPACE_URL from environment or fallback
if (!process.env.REACT_APP_CODESPACE_URL) {
  // Try to infer from window.location if running in browser
  const host = window.location.host;
  const protocol = window.location.protocol;
  process.env.REACT_APP_CODESPACE_URL = `${protocol}//${host.replace('-3000', '-8000')}`;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
