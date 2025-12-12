import { GiWindmill } from "react-icons/gi";
import Container from "../Container";
import { TbBeach } from "react-icons/tb";
import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "../CategoryBox";
export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "this property is close to beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "this property has Windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "this property has Villas",
  },
];
const Categories = () => {
  return (
    <Container>
      <div
        className="
  pt-4
  flex
  flex-row
  items-center
  justify-between
  overflown-x-auto

  "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
