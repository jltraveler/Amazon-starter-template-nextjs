import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { store } from '../app/store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps: {
  session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}


export default MyApp
