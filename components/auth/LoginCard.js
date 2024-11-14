"use client";

import { Form, Input, message, Spin } from "antd";
import { ButtonSolid } from "../Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { API_URL } from "@/utils/constant";
import Cookies from "js-cookie";

export function LoginCard() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const initVal = { password: "", username: "" };
  const router = useRouter();
  const handleSubmit = async (val) => {
    try {
      setLoading(true);
      console.log(val);
      const res = await axios.post(API_URL + "/user/login-user", val);
      console.log(res);
      Cookies.set("auth", res?.data?.token, { expires: 7 });
      router.push("/allquiz");
      setLoading(false);
      message.destroy();
      message.success("Login Successfully");
    } catch (error) {
      setLoading(false);
      if (error?.response?.data?.message) {
        form.setFields([
          {
            name: "username",
            errors: ["Invalid username or password"],
          },
          {
            name: "password",
            errors: ["Invalid username or password"],
          },
        ]);
        return;
      }
      message.destroy();
      message.error("Internal Server Error");
      console.log("error = ", error);
    }
  };
  return (
    <div className="border border-slate-300 w-[400px] min-h-[400px] rounded-[5px] px-5">
      <Spin
        size="large"
        indicator={<LoadingOutlined spin />}
        spinning={loading}
      >
        <Form
          initialValues={initVal}
          onFinish={handleSubmit}
          name="login"
          className="flex flex-col h-[100%]"
          form={form}
        >
          <div className="my-4">
            <p className="text-3xl text-center font-semibold">Quiz APP Login</p>
          </div>
          <div>
            <span className="">Username</span>
            <span className="ms-1 text-red-700">*</span>
            <Form.Item
              rules={[{ required: true, message: "Username is required" }]}
              name="username"
            >
              <Input className="rounded-[3px] mt-2" size="large" />
            </Form.Item>
          </div>
          <div className="">
            <span>Password</span>
            <span className="ms-1 text-red-700">*</span>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password className="rounded-[3px] mt-2" size="large" />
            </Form.Item>
          </div>
          <p>
            Don&rsquo;t have a account{" "}
            <Link className="underline" href={"/signUp"}>
              Sign Up
            </Link>
            ?
          </p>
          <div className="flex flex-row justify-end mt-3">
            <ButtonSolid
              onClick={() => form.submit()}
              className="rounded-[3px] w-full"
              name={"Login"}
            />
          </div>
          <div className="w-full flex flex-row items-center mt-2">
            <p className="w-[45%] border-[0.7px] border-gray-300" />
            <span className="text-center w-[10%]">OR</span>
            <p className="w-[45%] h-[2px] border-[0.7px] border-gray-300" />
          </div>
          <div className="flex flex-row justify-end mt-2 mb-4">
            <Link className="w-full" href={"/signUp"}>
              <ButtonSolid className="rounded-[3px] w-full" name={"Register"} />
            </Link>
          </div>
        </Form>
      </Spin>
    </div>
  );
}
