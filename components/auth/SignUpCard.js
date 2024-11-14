"use client";

import { Button, Form, Input, Spin } from "antd";
import { ButtonSolid } from "../Button";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/utils/constant";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export function SignUpCard() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const initVal = { fullName: "", password: "", username: "" };
  const router = useRouter();
  const handleSubmit = async (val) => {
    try {
      setLoading(true);
      console.log(val);
      const res = await axios.post(API_URL + "/user/create-user", val);
      console.log(res);
      Cookies.set("auth", res?.data?.token, { expires: 1 });
      router.push("/allquiz");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error?.response?.data?.message) {
        form.setFields([
          {
            name: "username",
            errors: ["Username already in use"],
          },
        ]);
      }
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
          name="signUp"
          className="flex flex-col h-[100%]"
          form={form}
        >
          <div className="my-4">
            <p className="text-3xl text-center font-semibold">
              Quiz APP Register
            </p>
          </div>
          <div>
            <span className="">Full Name</span>
            <span className="ms-1 text-red-700">*</span>
            <Form.Item
              name="fullName"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input className="rounded-[3px] mt-2" size="large" />
            </Form.Item>
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
              rules={[{ required: true, message: "Password is required" }]}
              name="password"
            >
              <Input.Password className="rounded-[3px] mt-2" size="large" />
            </Form.Item>
          </div>
          <div className="flex flex-row justify-end mt-2 mb-4">
            <ButtonSolid
              onClick={() => form.submit()}
              className="rounded-[3px] w-full"
              name={"Register"}
            />
          </div>
        </Form>
      </Spin>
    </div>
  );
}
