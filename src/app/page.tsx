"use client";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center align-middle items-center w-screen h-screen gap-0 ">
        <img src={"/me.JPG"} className="mask mask-parallelogram-4" />
        <div className="gap-1">
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
          <div className=" shadow mt-6 grid grid-cols-1 lg:grid-cols-2">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Work</div>
              <div className="stat-value">Diskominfo</div>
              <div className="stat-desc">Kota Tasikmalaya</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Periode</div>
              <div className="stat-value">2023</div>
              <div className="stat-desc">1 Januari - 30 Desember</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
