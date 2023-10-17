"use client";
import Typewriter from "typewriter-effect";
import StatData from "./inc/statData";
import CardProject from "./inc/cardproject";
export default function Home() {
  const data = [
    {
      title: "Kelom",
      data: "Aplikasi Kelurahan On Mobile untuk membantu kinerja pemerintahan kota Tasikmalaya",
      imgUrl: "/KelomPro.jpg",
    },
    {
      title: "Baguer",
      data: "Aplikasi ini digunakan untuk media penyelenggaraan bantuan terhadap warga yang membutuhkan dengan fitur Bantosan Wargi",
      imgUrl: "/BageurPro.jpg",
    },
    {
      title: "Goso",
      data: "Diskominfo Kota Tasikmalaya",
      imgUrl: "/me.JPG",
    },
    {
      title: "Katasik",
      data: "Diskominfo Kota Tasikmalaya",
      imgUrl: "/me.JPG",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center align-middle items-center w-screen mb-5 gap-1">
        <img
          src={"/me.JPG"}
          className="mask mask-parallelogram-4 h-full w-full object-cover object-center"
        />
        {/* content */}
        <div className="gap-1 p-6">
          <h1 className="text-2xl text-primary">Rikza Fauzan Nurfadilah</h1>
          <h1 className="text-4xl font-extrabold text-secondary mt-2">
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
          <p className="text-accent">
            Membuat keindahnan dengan sejuta codingan.
          </p>
          {/* stat */}
          <StatData />
          <button className="btn btn-accent my-6 grid w-1/2 items-center justify-center align-middle">
            Download CV
          </button>
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
          </div> */}
        </div>
      </div>
      {/* ricent project */}
      <div className="grid mx-7 mt-auto lg:mx-20 ">
        <h1 className="text-2xl mb-4 text-primary">Ricent Project</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {data.map((item, index) => (
            <CardProject
              key={index}
              imgUrl={item.imgUrl}
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
