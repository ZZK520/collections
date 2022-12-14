import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    // <>
      // <div className="sidebar pure-u-1 pure-u-md-1-4">
      //   <div className="header">
      //     <h1 className="brand-title">A Sample Blog</h1>
      //     <h2 className="brand-tagline">Creating a blog layout using Pure</h2>

      //     <nav className="nav">
            
      //       <ul className="nav-list">
      //         <li className="nav-item">
      //           <a className="pure-button" href="http://purecss.io">Pure</a>
      //         </li>
      //       </ul>
      //     </nav>
      //   </div>
      // </div>

      // <div className="content pure-u-1 pure-u-md-3-4">
      //   <div>
      //     <div className="posts">
      //       <h1 className="content-subhead">Pinned Post</h1>

      //       <section className="post">
      //         <header className="post-header">
      //           <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" className="post-avatar" src="/img/common/tilo-avatar.png" />

      //           <h2 className="post-title">Welcome to Pure</h2>

      //           <p className="post-meta">
      //             By <a href="#" className="post-author">Tilo Mitra</a> under <a className="post-category post-category-design" href="#">CSS</a> <a className="post-category post-category-pure" href="#">Pure</a>
      //           </p>
      //         </header>

      //         <div className="post-description">
      //           <p>
      //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      //           </p>
      //         </div>
      //       </section>
      //     </div>

      //     <div className="posts">
      //       <h1 className="content-subhead">Recent Posts</h1>

      //       <section className="post">
      //         <header className="post-header">
      //           {/* <img width="48" height="48" alt="Eric Ferraiuolo&#x27;s avatar" className="post-avatar" src="/img/common/ericf-avatar.png" /> */}

      //           <h2 className="post-title">Everything You Need to Know About Node.js</h2>

      //           <p className="post-meta">
      //             By <a className="post-author" href="#">Eric Ferraiuolo</a> under <a className="post-category post-category-js" href="#">JavaScript</a>
      //           </p>
      //         </header>

      //         <div className="post-description">
      //           <p>
      //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      //           </p>
      //         </div>
      //       </section>

      //       <section className="post">
      //         <header className="post-header">
      //           {/* <img width="48" height="48" alt="Reid Burke&#x27;s avatar" className="post-avatar" src="/img/common/reid-avatar.png" /> */}

      //           <h2 className="post-title">Photos from CSSConf and JSConf</h2>

      //           <p className="post-meta">
      //             By <a className="post-author" href="#">Reid Burke</a> under <a className="post-category" href="#">Uncategorized</a>
      //           </p>
      //         </header>

      //         <div className="post-description">
      //           <div className="post-images pure-g">
      //             <div className="pure-u-1 pure-u-md-1-2">
      //               <a href="http://www.flickr.com/photos/uberlife/8915936174/">
      //                 {/* <img alt="Photo of someone working poolside at a resort"
      //                   className="pure-img-responsive"
      //                   src="http://farm8.staticflickr.com/7448/8915936174_8d54ec76c6.jpg" /> */}
      //               </a>

      //               <div className="post-image-meta">
      //                 <h3>CSSConf Photos</h3>
      //               </div>
      //             </div>

      //             <div className="pure-u-1 pure-u-md-1-2">
      //               <a href="http://www.flickr.com/photos/uberlife/8907351301/">
      //                 {/* <img alt="Photo of the sunset on the beach"
      //                   className="pure-img-responsive"
      //                   src="http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg" /> */}
      //               </a>

      //               <div className="post-image-meta">
      //                 <h3>JSConf Photos</h3>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </section>
      //     </div>

      //     <div className="footer">
      //       <div className="pure-menu pure-menu-horizontal">
      //         <ul>
      //           <li className="pure-menu-item"><a href="http://purecss.io/" className="pure-menu-link">About</a></li>
      //           <li className="pure-menu-item"><a href="http://github.com/pure-css/pure/" className="pure-menu-link">GitHub</a></li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    // </>

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="content pure-u-1 pure-u-md-3-4">
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        </section>
      </div>

        {/* <ul className={utilStyles.list}>
          {allToolsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/tools/${id}`}>{title}</Link>
            </li>
          ))}
        </ul> */}
      
    </Layout>
  );
}