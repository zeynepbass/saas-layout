"use client";

import { useFetchUser } from "@/hooks/fetcher";

export default function GetPage() {
  const { data, loading } = useFetchUser();

  if (loading) return <p>....</p>;

  return (
    <div>
      {data.slice(0, 5).map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
