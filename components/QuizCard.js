import Link from "next/link";
import { ButtonSolid } from "./Button";
import { IoCodeSlashOutline } from "react-icons/io5";
export function QuizCard({ quizName, noOfQuestion, quizId, responses, user }) {
  return (
    <div className="w-[300px] h-fit border border-gray-200 rounded-[3px] px-4 py-4 mt-4">
      <div className="bg-[#00b96b] h-[150px] flex items-center rounded-[3px]">
        <IoCodeSlashOutline size={80} className="mx-auto" color="white" />
      </div>
      <div className="flex flex-col">
        <p className="mt-2">{quizName}</p>
        <p className="text-gray-400 mb-3">{noOfQuestion} question(s)</p>
        <div className="flex flex-row justify-between">
          <Link className="" href={`/exam/${quizId}`}>
            <ButtonSolid
              className="rounded-[3px] font-semibold"
              name={"Take Quiz"}
            />
          </Link>
          <Link className="" href={`/allquiz/responses?userId=${user?.id}`}>
            <ButtonSolid
              disable={!responses}
              className="rounded-[3px] font-semibold"
              name={"View Response"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
