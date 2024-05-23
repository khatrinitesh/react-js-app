import React from "react";
import { skillsData } from "../constants/constants";

const SkillBars = () => {
  return (
    <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
      {skillsData.map((skill, index) => (
        <div key={index}>
          <div className="flex items-end justify-between">
            <h4 className="font-opensanssb text-fs16  uppercase text-black">
              {skill.name}
            </h4>
            <h3 className="font-opensanssb text-fs36 text-primary">
              {skill.percentage}%
            </h3>
          </div>
          <div className="mt-2 h-3 w-full rounded-full bg-lila">
            <div
              className="h-3 rounded-full bg-primary progress-bar"
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBars;
