"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface DetailData {
  id: string;
  imageSrc: string;
  title: string;
  date: string;
  excerpt: string;
}

const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<DetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/api/v1/blogs/${id}`);
          if (!response.ok) {
            throw new Error("Blog not found");
          }
          const data = await response.json();
          setData(data.blog);
        } catch (error) {
          setError("Error fetching data");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  if (loading) return <p className="flex justify-center items-center">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <section className="max-w-[1100px] w-full mx-auto py-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-600">{data.date}</p>
        <div className="text-gray-600 line-clamp-3">{data.excerpt}</div>
        <img
          src={`http://localhost:3001/${data.imageSrc}`}
          alt={data.title}
          className="w-full h-auto mb-4 object-cover"
        />
  
      </div>
    </section>
  );
};

export default DetailPage;
