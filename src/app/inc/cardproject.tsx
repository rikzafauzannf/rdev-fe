import React from "react";

interface Props {
  index: string;
  imgUrl: string;
  altImg: string;
  title: string;
  detail: string;
  position: string;
}

const CardProject = (props: Props) => {
  const { index, imgUrl, altImg, title, detail, position } = props;
  return (
    <>
      <div
        // key={index}
        className="card w-full bg-base-100 shadow-xl border-2 border-accent"
      >
        <figure>
          <img
            src={imgUrl}
            alt={altImg}
            className="w-full h-60 object-cover object-center"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">
            {title}
            <div className="badge badge-secondary">Front-End</div>
          </h2>
          <p className="text-primary">{detail}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-accent">{position}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProject;
