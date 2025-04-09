import styles from '../styles/Card.module.css';
import React from 'react';
export default function Card({  post }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>{post.body}</p>
      <div className={styles.meta}>
        <span><strong>Post ID:</strong> {post.id}</span>
        <span><strong>User ID:</strong> {post.userId}</span>
      </div>
    </div>
  );
}
