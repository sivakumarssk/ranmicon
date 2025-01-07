"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to external admin URL
    router.push("https://admin.emdcconference.com");
  }, [router]);

  return (
    <div>
      <p>Redirecting to admin dashboard...</p>
    </div>
  );
}
