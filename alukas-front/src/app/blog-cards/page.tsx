"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const BlogCards = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/blogs");
        if (!response.ok) {
          throw new Error("Failed to load blogs");
        }
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        setError("Failed to load blogs");
      }
    };

    fetchBlogs();
  }, []);

  const handlePostBlog = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("http://localhost:3001/api/v1/blogs", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newBlog = await response.json();
        setBlogs((prevBlogs) => [newBlog.blog, ...prevBlogs]);
        setTitle("");
        setDescription("");
        setImage(null);
      } else {
        throw new Error("Failed to post the blog");
      }
    } catch (error) {
      console.error("Failed to post the blog", error);
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className="max-w-[1400px] w-full mx-auto py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {blogs.length > 0 ? (
          blogs.map((card) => (
            <div key={card._id} className="flex flex-col gap-6">
              <div>
                <Link href={`/details/${card._id}`} className="relative block overflow-hidden group">
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={`http://localhost:3001/${card.image}`}
                      className="transition-transform transform group-hover:scale-110 duration-500 ease-in-out w-full h-full object-cover"
                      alt={card.title}
                    />
                  </div>
                  <div className="mt-3">
                    <h1 className="text-[26px] font-medium">{card.title}</h1>
                    <p className="text-gray-600 line-clamp-3">
                      {card.description}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>No blogs available</div>
        )}
      </div>

      <form onSubmit={handlePostBlog} className="mt-8">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          className="block w-full p-2 border border-gray-300 rounded mb-3"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Blog Description"
          className="block w-full p-2 border border-gray-300 rounded mb-3"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          className="block w-full p-2 border border-gray-300 rounded mb-3"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Create Blog
        </button>
      </form>
    </section>
  );
};

export default BlogCards;
