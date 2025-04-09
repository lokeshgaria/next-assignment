import  React ,{ useState } from 'react';
import Link from 'next/link';
import Card from '../component/Card';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  const [search, setSearch] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  console.log('posts',posts)
  return (
    <div className={styles.container}>
      <h1>Blog Posts</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.postsGrid}>
        {filteredPosts.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <Card post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
