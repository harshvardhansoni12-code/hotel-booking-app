"use client";
import { GiBoatFishing, GiIsland, GiWindmill } from "react-icons/gi";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import { useSearchParams, usePathname } from "next/navigation";
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
  {
    label: "CountrySide",
    icon: TbMountain,
    description: "this property is near mountains",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "this property has pools",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "this property is on an island",
  },
  {
    label: "lakes",
    icon: GiBoatFishing,
    description: "this property is near lakes",
  },
];
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }
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
////3:10:_ _ _ _
