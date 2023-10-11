"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="grid justify-items-center align-middle items-center w-full h-screen">
        <>
          <Image
            src={"/me.JPG"}
            alt={"me"}
            width={300}
            height={300}
            className="mask mask-parallelogram-4 w-1/4"
          />
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
        </>
      </div>
    </>
  );
}
