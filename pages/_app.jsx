import '../styles/app/reset.css';
import '../styles/app/shared.css';

import { useEffect } from 'react';

/**
 * Main _app file
 * @return {JSXElement} The dynamic rendered component
 */
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.querySelector('#__next').style.height = '100%';
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
