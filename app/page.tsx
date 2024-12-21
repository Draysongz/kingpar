"use client";
import React, { Suspense, useState, useEffect } from "react";
import Loading from "./loading/page";
import Start from "./start/page";
import Daily from "./daily/page";
import { useUser } from "@/context/context";
import { useSearchParams } from "next/navigation";
import WebApp from "@twa-dev/sdk";

export const dynamic = "force-dynamic";

function HomeContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const { setUser, user } = useUser();
  const searchParams = useSearchParams();
  const referralCode = searchParams.get("referralCode");

  useEffect(() => {
    if (currentPage < 3) {
      const timer = setTimeout(() => {
        setCurrentPage((prevPage) => prevPage + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  // const telegramInitData =
  //   "query_id=AAElBO5_AAAAACUE7n8cjIn7&user=%7B%22id%22%3A2146305061%2C%22first_name%22%3A%22Crypto%22%2C%22last_name%22%3A%22Dray%22%2C%22username%22%3A%22Habibilord%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FxDxhUL3lIVFxD395BqphdSr4obwbuBmLwEzvXuVGMNA.svg%22%7D&auth_date=1733171445&signature=cL8XAHC71aY4ejLNgBtfKfwD_VY22is6o3Tgmks0WGCc9KzecorzpC9b2eqNc3Gmu8zXVK94C6_2to7xszFFBQ&hash=6d3d8d93ad9eee8a7cd490856006415f1cf97a7e47ea9eaa42b9c06b2c12e57b";

  useEffect(() => {
    if (typeof window !== "undefined") {
       WebApp.expand();
       const telegramInitData = WebApp.initData;

      if (telegramInitData) {
        fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            initData: telegramInitData,
            referralCode: referralCode,
          }),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch user data");
            }
            return res.json();
          })
          .then((data) => {
            if (data.error) {
              setError(data.error);
              console.log(error);
            } else {
              console.log("User data:", data);
              setUser(data.user);
            }
          })
          .catch((err) => {
            console.error(err);
            setError("Failed to fetch user data");
          });
      } else {
        setError("No user data available");
      }
    }
  }, [referralCode]);

  if (!user) {
    return <Loading />;
  }

  return (
    <div>
      {currentPage === 1 && <Start />}
      {currentPage === 2 && <Loading />}
      {currentPage === 3 && <Daily />}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeContent />
    </Suspense>
  );
}
