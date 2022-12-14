import Link from 'next/link'
import styles from './index.module.css'

export default function Header({ routeConfig,title,description }) {
  const data = Object.keys(routeConfig);
  return (
    <header className={styles.header}>
      <h1 className="brand-title">{title}</h1>
      <h2 className="brand-tagline">{description}</h2>
      <ol className={styles.list}>
        {
          data.map(item=>{
            const {path,description,title}=routeConfig[item];
            return <li key={item}><Link href={path} >{title}</Link></li>
          })
        }
      </ol>
    </header>
  )
}
