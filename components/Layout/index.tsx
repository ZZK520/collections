import styles from './index.module.css'
import Header from '../Header'
import {routeConfig} from '../../utils/route'
const headerTitle="我的小物件";
const headerDescription="使用 next.js、purecss 开发";
export default function Layout({ children,home }) {
  return (
    <article id="layout" className="pure-g">
      <article className="sidebar pure-u-1 pure-u-md-1-4">
        <Header routeConfig={routeConfig} title={headerTitle} description={headerDescription}></Header>
      </article>
      <main className={`${styles.content} pure-u-1 pure-u-md-3-4`}>
        <article className={styles.body}>{children}</article>
        <footer className={styles.footer}>
          <section className="pure-menu pure-menu-horizontal">
            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="https://juejin.cn/user/4406498337237736" className="pure-menu-link">Juejin</a></li>
              <li className="pure-menu-item"><a href="https://github.com/ZZK520" className="pure-menu-link">GitHub</a></li>
              <li className="pure-menu-item"><a href="https://zhu_zhi_kang.gitee.io/lost-stars-blog/" className="pure-menu-link">Blog</a></li>
            </ul>
          </section>
        </footer>
      </main>
    </article>

  );
}