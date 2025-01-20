"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to external admin URL
    router.push("https://admin.ranmicon.com");
  }, [router]);

  return (
    <div>
      <p>Redirecting to admin dashboard...</p>
    </div>
  );
}
