"use client";
import Link from "next/link";
import { ButtonSolid } from "./Button";
import { useEffect, useState } from "react";
import { readCookie } from "@/utils/readCookie";
import { Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export function Navabar() {
  const [userProfile, setUserProfile] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const ans = async () => {
      const data = await readCookie();
      console.log("nav = ", data);
      setUserProfile(data);
      console.log(data);
    };
    ans();
  }, []);
  console.log(userProfile);
  const handleLogout = () => {
    Cookies.remove("auth");
    router.push("/");
  };
  const items = [
    {
      key: "1",
      label: (
        <p onClick={() => router.push("/allquiz/leaderboard")}>Leaderboard</p>
      ),
    },
    {
      key: "2",
      label: <p onClick={() => router.push("/allquiz")}>All Quizzes</p>,
    },
    {
      key: "4",
      label: (
        <p
          onClick={() =>
            router.push(`/allquiz/responses?userId=${userProfile?.id}`)
          }
        >
          My Response
        </p>
      ),
    },
    {
      key: "5",
      label: <p onClick={() => handleLogout()}>Logout</p>,
    },
  ];

  return (
    <nav className="flex flex-row justify-between items-center px-5 py-5 shadow-md">
      <div className="flex flex-row gap-1">
        <h3 className="text-2xl">Quiz</h3>
        <h3 className="text-2xl font-semibold">APP</h3>
      </div>
      <div>
        {userProfile?.id != null ? (
          <Dropdown
            rootClassName="drop-down"
            menu={{
              items,
            }}
          >
            <Avatar
              className="hover:cursor-pointer"
              size={35}
              icon={<UserOutlined />}
            />
          </Dropdown>
        ) : (
          <Link href={"/login"}>
            <ButtonSolid name={"Login"} />
          </Link>
        )}
      </div>
    </nav>
  );
}
