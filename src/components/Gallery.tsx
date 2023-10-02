"use client";

import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface Props {
  movie: Movie;
}

const Gallery = ({ movie }: Props) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const slides = movie.screenshots.map((item) => ({
    src: item.screen,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.screen, width: 320, height: 213 },
      { src: item.screen, width: 640, height: 426 },
      { src: item.screen, width: 1200, height: 800 },
      { src: item.screen, width: 2048, height: 1365 },
      { src: item.screen, width: 3840, height: 2560 },
    ],
  }));

  return (
    <div className="w-full">
      <div className=" ">
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {movie.screenshots.map((x) => {
            return (
              <div key={x.id} className="h-96 relative">
                <div className="group h-full">
                  <div
                    className="bg-cover bg-center h-full w-full bg-no-repeat"
                    style={{ backgroundImage: `url("${x.screen}")` }}
                  ></div>
                  <div
                    className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                    onClick={() => {
                      setOpen(true);
                      setImage(x.screen);
                    }}
                  >
                    <p className="text-white">
                      <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        slides={slides}
      />
    </div>
  );
};

export default Gallery;
