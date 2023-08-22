import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { ProjectItem } from "./ProjectItem";

export const Projects = ({ projectsArray }) => {
  return (
    <div className=" w-full">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}>
        {projectsArray.map((item) => (
          <SwiperSlide key={item.projectName}>
            <ProjectItem {...item} />
          </SwiperSlide>
        ))}
        {projectsArray.map((item) => (
          <SwiperSlide key={item.projectName}>
            <ProjectItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
