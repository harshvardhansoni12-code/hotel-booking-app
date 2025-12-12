"use client";

import { IconType } from "react-icons";

interface CategoryBoxProps {
  //
  icon: IconType;
  label: string;
  description?: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon, label }) => {
  return <div></div>;
};

export default CategoryBox;
