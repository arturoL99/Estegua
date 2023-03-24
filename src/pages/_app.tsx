import '@/styles/globals.css'
import '@/styles/utilities.scss'
import "../components/Header/Header.scss"
import "../components/Courses/Courses.scss"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
