import '@/styles/globals.css'
import '@/styles/utilities.scss'
import "../components/Header/Header.scss"
import "../components/Courses/Courses.scss"
import "../components/Social/Social.scss"
import "../components/Hamburger/Hamburger.scss"
import "../components/AboutMe/AboutMe.scss"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
