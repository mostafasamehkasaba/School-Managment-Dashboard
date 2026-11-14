"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get("q") ?? "";

  const [value, setValue] = useState(currentQuery);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // keep the input in sync when the URL changes (back/forward, navigation)
  useEffect(() => {
    setValue((prev) => (prev.trim() === currentQuery ? prev : currentQuery));
  }, [currentQuery]);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const updateUrl = (next: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const q = next.trim();

    if (q) params.set("q", q);
    else params.delete("q");

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value;
    setValue(next);

    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => updateUrl(next), 300);
  };

  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
      <Image src="/search.png" alt="" width={14} height={14} />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search..."
        aria-label="Search"
        className="w-[200px] p-2 bg-transparent outline-none"
      />
    </div>
  );
};

const TableSearch = () => (
  <Suspense fallback={null}>
    <SearchInput />
  </Suspense>
);

export default TableSearch;
