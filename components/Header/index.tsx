import Link from 'next/link'
import styles from './index.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
    <h1 className="brand-title">我的工具集</h1>
    <h2 className="brand-tagline">使用 next.js、pure.css 开发</h2>
    <ol className={styles.list}>
      <li>
        <Link href="/" >Home</Link>
      </li>
      <li>
        <Link href="/tools/">Tool</Link>
      </li>
      <li>
        <Link href="/posts/">Post</Link>
      </li>
    </ol>
  </header>
  )
}
