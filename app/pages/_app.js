import './styles.css'
import Navbar from '../components/Navbar'
import { RoleProvider } from '../lib/context'
import { Suspense } from 'react'


function MyApp({ Component, pageProps }) {
  return (
    <RoleProvider>
      <Suspense fallback={<p>Loading</p>}>
        <div className="root">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </Suspense>
    </RoleProvider>
  )
}
export default MyApp