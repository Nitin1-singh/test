"use client";
import { Radio, Space } from "antd";
import { ButtonGhost, ButtonSolid } from "../Button";
import { useState } from "react";

export function MainSide({
  currentQuestionNo,
  questionDetail,
  questionNo,
  options,
  setCurrentQuestionNo,
  data,
  setData,
  setUserResponse,
  userResponse,
  val,
  setVal,
}) {
  const onChange = (option) => {
    setVal(option?.target?.value);
  };
  return (
    <div className="w-[70%] h-full border border-gray-300">
      <div className="border-b border-gray-300">
        <p className="font-semibold my-4 ps-4">Question No.{questionNo}</p>
      </div>
      <div className="px-4 h-[70%] overflow-y-auto">
        <div className="mt-4">
          <p>{questionDetail}</p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <Radio.Group value={val} onChange={onChange}>
            <Space direction="vertical">
              {options?.map((val, index) => (
                <Radio value={index}>{val}</Radio>
              ))}
            </Space>
          </Radio.Group>
        </div>
      </div>
      <div className="flex h-[20%] flex-row justify-between px-4 border-t border-gray-300 items-center">
        <div className="flex gap-4 ">
          <ButtonGhost
            onClick={() => {
              setData((prev) => {
                const ans = prev?.map((user, index2) =>
                  index2 === currentQuestionNo
                    ? user?.attemp === "ans" || user?.attemp === "revisit_ans"
                      ? { ...user, attemp: "revisit_ans" }
                      : { ...user, attemp: "revisit" }
                    : user
                );
                return [...ans];
              });
              setCurrentQuestionNo((prev) => {
                if (prev + 1 >= data?.length) {
                  setVal(userResponse[0]?.val);
                  return 0;
                } else {
                  setVal(userResponse[prev + 1]?.val);
                  return prev + 1;
                }
              });
            }}
            name={"Mark For Review & Next"}
          />
          <ButtonGhost
            onClick={() => {
              setData((prev) => {
                const ans = prev?.map((user, index2) =>
                  index2 === currentQuestionNo
                    ? { ...user, attemp: "not_ans" }
                    : user
                );
                return [...ans];
              });
              setUserResponse((prev) => {
                const newState = { ...prev };
                if (newState[currentQuestionNo]) {
                  // If the option already exists, update its value
                  console.log("del");
                  delete newState[currentQuestionNo];
                  return newState;
                }
                // Return the updated copy of the state
                return newState;
              });
              setVal(null);
            }}
            name={"Clear Response"}
          />
        </div>
        <div className="flex gap-4">
          {currentQuestionNo > 0 ? (
            <ButtonGhost
              onClick={() => {
                setData((prev) => {
                  const ans = prev?.map((user, index2) => {
                    if (index2 === currentQuestionNo) {
                      console.log(user);
                      if (
                        user?.attemp == undefined ||
                        user?.attemp == null ||
                        user?.attemp === "not_vis"
                      ) {
                        return { ...user, attemp: "not_ans" };
                      }
                    }
                    return { ...user };
                  });
                  return [...ans];
                });
                setCurrentQuestionNo((prev) => {
                  setVal(userResponse[prev - 1]?.val);
                  return prev - 1;
                });
              }}
              name={"Previous"}
            />
          ) : null}
          <ButtonSolid
            onClick={() => {
              setUserResponse((prev) => {
                const newState = { ...prev };
                if (val === null) {
                  return { ...newState };
                }

                if (newState[currentQuestionNo]) {
                  // If the option already exists, update its value
                  newState[currentQuestionNo].val = val;
                } else {
                  // If the option does not exist, create a new entry
                  newState[currentQuestionNo] = {
                    val: val,
                    type: data[currentQuestionNo]?.type,
                  };
                }

                // Return the updated copy of the state
                return { ...newState };
              });
              setData((prev) => {
                const ans = prev?.map((user, index2) =>
                  index2 === currentQuestionNo
                    ? val === null || val === undefined || val === "not_ans"
                      ? { ...user, attemp: "not_ans" }
                      : { ...user, attemp: "ans" }
                    : user
                );
                return [...ans];
              });
              setCurrentQuestionNo((prev) => {
                if (prev + 1 >= data?.length) {
                  setVal(userResponse[0]?.val);
                  return 0;
                } else {
                  setVal(userResponse[prev + 1]?.val);
                  return prev + 1;
                }
              });
            }}
            name={"Save & Next"}
          />
        </div>
      </div>
    </div>
  );
}
