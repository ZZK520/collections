import styles from './index.module.css'
import Link from 'next/link'
import Header from '../Header'
export default function Layout({ children, home }) {
  return (
    <article id="layout" className="pure-g">
      <article className="sidebar pure-u-1 pure-u-md-1-4">
        {/* <header className={styles.header}>
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
        </header> */}
        <Header></Header>
      </article>
      <main className={`${styles.content} pure-u-1 pure-u-md-3-4`}>
        <article className={styles.body}>{children}</article>
        <footer className={styles.footer}>
          <section className="pure-menu pure-menu-horizontal">
            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="https://juejin.cn/user/4406498337237736" className="pure-menu-link">Juejin</a></li>
              <li className="pure-menu-item"><a href="https://github.com/ZZK520" className="pure-menu-link">GitHub</a></li>
            </ul>
          </section>
        </footer>
      </main>
    </article>

  );
}