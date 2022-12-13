import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/tools/first">First Tool</Link>
        </li>
        <li>
          <Link href="/tools/second">Second Tool</Link>
        </li>
      </ul>
    </header>
  )
}
