import { useRouter } from "next/router";
import { API_URL } from "../../lib/api";
import Navbar from "@/components/Navbar";

type Blog = {
  id: number;
  title: string;
  content: string;
};

export default function Blog({ blog }: { blog: Blog }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  if (!blog) {
    return <h2>Blog Not Found</h2>;
  }

  return (
    <div>
      <Navbar />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/blogs`);
  const blogs = await res.json();

  const paths = blogs.map((blog: Blog) => ({
    params: { id: blog.id.toString() },
  }));

  return {
    paths,
    fallback: true, 
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`${API_URL}/blogs/${params.id}`);
  const blog = await res.json();

  return {
    props: { blog },
    revalidate: 10, // ISR
  };
}