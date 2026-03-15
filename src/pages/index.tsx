import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { API_URL } from "@/lib/api";

type Blog = {
  id: number;
  title: string;
  preview: string;
};

export default function Home({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      <Navbar />

      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id} id={blog.id} title={blog.title} preview={blog.preview}/>
        ))}
      </div> */}
      
      <div className="container">
        <div className="grid">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              preview={blog.preview}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/blogs `);
  const blogs = await res.json();

  return {
    props: { blogs },
  };
}