import Link from "next/link";
import { SearchItemProps } from "types";

const SearchItem: React.FC<SearchItemProps> = ({
  zoneId,
  serviceId,
  serviceName,
}) => {
  return (
    <div className="border-b border-b-[#F5F5F5]">
      <Link href={`${serviceId}/${zoneId}`} className="text-black">
        <li className="cursor-pointer list-none p-3 hover:bg-[#E5F1FF]">
          {" "}
          {serviceName}{" "}
        </li>
      </Link>
    </div>
  );
};

export default SearchItem;
