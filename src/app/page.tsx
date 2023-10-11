"use client";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center align-middle items-center w-full h-screen">
        <img src={"/me.JPG"} className="mask mask-parallelogram-4" />
        <div>
          <h1 className="text-2xl">Rikza Fauzan Nurfadilah</h1>
          <h1 className="text-4xl font-bold">
            <Typewriter
              options={{
                strings: [
                  "Front-End Dev",
                  "NextJs",
                  "TailwindCSS",
                  "Bootstrap",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </>
  );
}
