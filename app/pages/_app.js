import './styles.css'
import Navbar from '../components/Navbar'
import { RoleProvider } from '../lib/context'


function MyApp({ Component, pageProps }) {
  return (
    <RoleProvider>
      <Navbar />
      <Component {...pageProps} />
    </RoleProvider>
  )
}
export default MyApp