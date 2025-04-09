import styles from "../../styles/Post.module.css"
export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return {
      props: { post },
    };
  }
  
  export default function PostDetail({ post }) {

    console.log('post',post)
    return (
 <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.body}>{post.body}</p>
        <div className={styles.meta}>
          <span><strong>Post ID:</strong> {post.id}</span>
          <span><strong>User ID:</strong> {post.userId}</span>
        </div>
      </div>
    </div>
    );
  }
  