"use client";
import { useQuery } from "@tanstack/react-query";

export function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["health"],
    queryFn: () => fetch("/api/health").then((res) => res.json()),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data?.message}</div>;
}
