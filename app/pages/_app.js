import './styles.css'
import Navbar from '../components/Navbar'
import { StyledEngineProvider } from '@mui/material/styles';


function MyApp({ Component, pageProps }) {
  return (<StyledEngineProvider injectFirst>
    <Navbar />
    <Component {...pageProps} />
  </StyledEngineProvider>)
}
export default MyApp