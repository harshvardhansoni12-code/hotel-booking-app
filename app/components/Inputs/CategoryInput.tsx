"use client";

import { IconType } from "react-icons";

interface CategoriesInputProps {
  onClick: (value: string) => void;
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoriesInput: React.FC<CategoriesInputProps> = ({
  onClick,
  label,
  selected,
  icon: Icon,
}) => {
  return (
    <div
      className={""}
      onClick={() => {
        onClick(label);
      }}
    ></div>
  );
};

export default CategoriesInput;
