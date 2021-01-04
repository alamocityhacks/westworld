import '../styles/globals.css'
import { ModalProvider } from '../lib/modalContext'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
