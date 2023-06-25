import { FullPageWrapperProps } from "types";
import SearchHeader from "./SearchHeader";

const FullPageWrapper: React.FC<FullPageWrapperProps> = ({
  onBackButtonClick,
  children,
  searchType,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[99999] cursor-default bg-white">
      <SearchHeader
        onBackButtonClick={onBackButtonClick}
        searchType={searchType}
      />
      <div className="px-3"> {children} </div>
    </div>
  );
};

export default FullPageWrapper;
