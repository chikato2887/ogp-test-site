import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
					<Link href={"/questions/1"} >
						<div className={styles.card}>
							<h2>question1</h2>
						</div>
					</Link>

          <Link href={"/questions/2"}>
						<div className={styles.card}>
							<h2>question2</h2>
						</div>
					</Link>

					<Link href={"/questions/3"}>
						<div className={styles.card}>
							<h2>question3</h2>
						</div>
					</Link>

					<Link href={"/questions/4"}>
						<div className={styles.card}>
							<h2>question4</h2>
						</div>
					</Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
