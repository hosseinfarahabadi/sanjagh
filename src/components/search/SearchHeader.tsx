import { FaAngleRight } from "react-icons/fa";
import { SearchHeaderProps } from "types";

const SearchHeader: React.FC<SearchHeaderProps> = ({
  searchType,
  onBackButtonClick,
}) => {
  const setHeaderText = () => {
    switch (searchType) {
      case "ServiceSearch": {
        return "جستجوی خدمت";
      }

      case "CitySearch": {
        return "جستجوی شهر";
      }

      case "CLOSED":
        return "";
    }
  };

  return (
    <div className="relative flex items-center justify-center py-6">
      <button className="absolute right-2" onClick={onBackButtonClick}>
        <FaAngleRight size="22" />
      </button>
      <p className="text-lg font-bold"> {setHeaderText()} </p>
    </div>
  );
};

export default SearchHeader;
