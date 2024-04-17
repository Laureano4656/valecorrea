import React, { FunctionComponent } from "react";
interface Props {
  title: string;
}
const TextHover: FunctionComponent<Props> = ({ title }) => {
  return (
    <div className="absolute pt-[150%] hover:opacity-100 opacity-0">
      {title}
    </div>
  );
};

export default TextHover;
