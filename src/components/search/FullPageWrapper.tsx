import { FullPageWrapperProps } from "types";
import SearchHeader from "./SearchHeader";

const FullPageWrapper: React.FC<FullPageWrapperProps> = ({
  children,
  headerTitle,
  route,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[99999] cursor-default bg-white">
      <SearchHeader
        headerTitle={headerTitle}
        route={route? route : null}
      />
      <div className="px-3"> {children} </div>
    </div>
  );
};

export default FullPageWrapper;
