# 📝 Next.js Blog (Pages Router)

A simple blog built with **Next.js Pages Router**, demonstrating:
- Static Site Generation (SSG)
- Server-side Rendering (SSR)
- Client-side search/filtering
- Reusable components
- CSS Modules for styling
- Unit testing with Jest + React Testing Library

---

## 🚀 Approach Taken

1. **Static Generation (SSG)**  
   The home page (`/`) fetches a list of posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) at build time using `getStaticProps`.

2. **Server-side Rendering (SSR)**  
   The post detail page (`/posts/[id]`) uses `getServerSideProps` to fetch a single post dynamically on each request.

3. **Search Functionality**  
   The home page implements client-side filtering to search posts by title.

4. **Reusable Components**  
   A reusable `<Card />` component is used to render post previews.

5. **Styling**  
   Styling is handled using **CSS Modules** (scoped, modular CSS).

6. **Testing**  
   A unit test is written for the `Card` component using **Jest** and **React Testing Library**.

---

## 📦 Assumptions

- Data is fetched from a public API: [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
- No authentication or real backend is used.
- The app is using **Next.js Pages Router** (not App Router).
- CSS Modules are used instead of global styles or frameworks.
- Testing focuses on key UI components only.

---

## 🛠️ How to Set Up & Run

### 1. 📥 Clone the Repo

```bash
git clone https://github.com/your-username/nextjs-blog-pages.git
cd nextjs-blog-pages

```
### 2. 📥 to start project  
```bash 
 1 npm install
 2 npm run dev
```
### 3. 📥 to run test case  
```bash 
npm run test
```

