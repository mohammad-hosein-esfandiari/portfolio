import React from "react";
import { Image } from "./Image";
import { ProjectLinks } from "./ProjectLinks";
import { Title } from "./Title";
import { Description } from "./Description";
export const ProjectItem = ({projectName,projectType,image,hostLink,githubLink,description}) => {

  return (
    <div>
      <Title projectName={projectName} projectType={projectType} />
      <Image image={image} />
      <Description description={description}/>
      <ProjectLinks githubLink={githubLink} hostLink={hostLink} />
    </div>
  );
};
