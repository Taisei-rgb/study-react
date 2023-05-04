import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Links } from '@/components/Links'
import { Headline } from '@/components/Headline'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header page='index' />
      <main className={styles.main}>
        <Headline title='Index Page' />
        <Container />
        <Links />
      </main>
    </>
  )
}
