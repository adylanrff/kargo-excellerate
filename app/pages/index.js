import { Suspense } from "react"
import { Image, Link } from "blitz"
import Layout from "app/core/layouts/Layout"
import logo from "public/logo.png"
import Trucks from "app/pages/truck/index"

const Home = () => {
  return (
    <div className="container">
      <main>
        <Trucks />
      </main>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
