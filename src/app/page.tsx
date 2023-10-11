"use client";
import Typewriter from "typewriter-effect";
import StatData from "./inc/statData";
import CardProject from "./inc/cardproject";
export default function Home() {
  const data = [
    {
      title: "Kelom",
      data: "Diskominfo Kota Tasikmalaya",
    },
    {
      title: "Baguer",
      data: "Diskominfo Kota Tasikmalaya",
    },
    {
      title: "Goso",
      data: "Diskominfo Kota Tasikmalaya",
    },
    {
      title: "Katasik",
      data: "Diskominfo Kota Tasikmalaya",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center align-middle items-center w-screen h-screen mb-5 gap-1">
        <img
          src={"/me.JPG"}
          className="mask mask-parallelogram-4 h-full w-full object-cover object-center"
        />
        {/* content */}
        <div className="gap-1">
          <h1 className="text-2xl text-primary">Rikza Fauzan Nurfadilah</h1>
          <h1 className="text-4xl font-bold text-secondary">
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
          {/* stat */}
          <StatData />
        </div>
      </div>
      {/* ricent project */}
      <div className="grid mx-7 mt-auto lg:mx-20 ">
        <h1 className="text-2xl mb-4 text-primary">Ricent Project</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {data.map((item, index) => (
            <CardProject
              key={index}
              imgUrl="/me.JPG"
              altImg="Me"
              detail={item.data}
              title={item.title}
              position="active"
              index=""
            />
          ))}
        </div>
      </div>
    </>
  );
}
