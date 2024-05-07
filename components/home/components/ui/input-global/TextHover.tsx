import React, { FunctionComponent } from "react";
interface Props {
  title: string;
}
const TextHover: FunctionComponent<Props> = ({ title }) => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-[100%] hover:opacity-100 opacity-0">
      {title}
    </div>
  );
};

export default TextHover;
