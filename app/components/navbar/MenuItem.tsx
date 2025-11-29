"use client";

interface MenuItemProps {
  // Define any props you might need for MenuItem here
  onClick?: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="
  px-4
  py-4
  bg-neutral-100 
  hover:bg-neutral-200
  transition
  font-semibold
  "
    >
      {label}
    </div>
  );
};

export default MenuItem;
