import { FiSearch } from "react-icons/fi";
import { StaticSearchInputProps } from "types";

const StaticSearchInput: React.FC<StaticSearchInputProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-12 w-full items-center overflow-hidden rounded-lg border border-gray-200 p-3"
    >
      <FiSearch className="xsm:ml-2 ml-1" size="1.4rem" color="#D3D4D5" />
      <span className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-400">
        جستجوی خدمات در شهرها...
      </span>
    </button>
  );
};
export default StaticSearchInput;
