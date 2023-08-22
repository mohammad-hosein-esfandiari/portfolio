import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../core/config/firebase-config";
import { SkillsItem } from "./SkillsItem";

export const Skills = ({ skillsArray }) => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const newArray = [...skillsArray];
    let lastArray = [];
    const arrayDevide = Math.ceil(newArray.length / 11);
    const arrayNum = Array.apply(null, Array(arrayDevide)).map(function (x, i) {
      return i + 1;
    });
    arrayNum.forEach((item) => {
      const endIndex = item * 11;
      const startIndex = endIndex - 11;
      lastArray.push(newArray.slice(startIndex, endIndex));
    });
    setArr(lastArray);
  }, []);

  return (
    <div className="px-2  grid grid-cols-2">
      {arr.map((item, index) => (
        <div className="mt-2" key={item + index}>
          {item.map((skill, i) => (
            <SkillsItem index={i} key={skill.icon} {...skill} />
          ))}
        </div>
      ))}
    </div>
  );
};
