import Link from "next/link";

type BlogCardProps = {
  id: number;
  title: string;
  preview: string;
};

export default function BlogCard({ id, title, preview }: BlogCardProps) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
      <h2>{title}</h2>
      <p>{preview}</p>
      <Link href={`/blog/${id}`}>
        Read More
      </Link>
    </div>
  );
}