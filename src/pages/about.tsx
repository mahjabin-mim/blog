import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Image
          src="/propic.png"
          alt="Profile Picture"
          width={200}
          height={200}
          className="profileImage"
        />

        <h1 className="title">About Me</h1>

        <p className="description">
          Hello! I am Mahjabin Mim. <br />
          I am a CSE student and I love web development.
        </p>
      </div>
    </>
  );
}