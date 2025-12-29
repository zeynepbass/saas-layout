"use client";

import { useEffect, useState } from "react";
import { GetFunction } from "@/app/services/fetcher";

export function useFetchUser() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetFunction.getAll()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
