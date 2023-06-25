import { useRouter } from "next/router";
import { FaAngleRight } from "react-icons/fa";
import { SearchHeaderProps } from "types";

const SearchHeader: React.FC<SearchHeaderProps> = ({
  headerTitle,
  route,
}) => {
  const router = useRouter()
  const onBackButtonClick = () => {
    if (route) {
      router.push(route);
    } else {
      router.back();
    }
  }
  return (
    <div className="relative flex items-center justify-center py-6">
      <button className="absolute right-2" onClick={onBackButtonClick}>
        <FaAngleRight size="22" />
      </button>
      <p className="text-lg font-bold"> {headerTitle} </p>
    </div>
  );
};

export default SearchHeader;
