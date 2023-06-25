import { SearchResultsProps } from "types";
import SearchItem from "./SearchItem";

const SearchResults: React.FC<SearchResultsProps> = ({ results, zoneId }) => {
  return (
    <div className="scrollbar-minimal absolute top-0 z-10 mt-12 max-h-72 w-full overflow-auto rounded-b-md border border-[#EAECED] bg-white shadow-sm">
      {results.map(({ id, name }) => (
        <SearchItem
          key={id}
          zoneId={zoneId}
          serviceId={id}
          serviceName={name}
        />
      ))}
    </div>
  );
};

export default SearchResults;
