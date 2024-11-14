"use client";
import { ButtonSolid } from "./Button";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();
  return (
    <main className="h-[100%] flex flex-col justify-center items-center">
      <div className="flex flex-row">
        <p className="text-7xl">Learn 10x </p>
        <span className="ms-2 text-7xl font-bold text-[#00b96b]">Faster!</span>
      </div>
      <div>
        <p className="mt-3 text-slate-400">
          Unlock Your Potential with Personalized Quizzes
        </p>
      </div>
      <div className="mt-5">
        <ButtonSolid
          onClick={() => router.push("/allquiz")}
          className="h-[40px]"
          name={"Get Started Now!"}
        />
      </div>
    </main>
  );
}
