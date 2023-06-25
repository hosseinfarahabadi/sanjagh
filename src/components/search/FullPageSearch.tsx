import { useState } from "react";
import CitySearch from "./CitySearch";
import StaticSearchInput from "./StaticSearchInput";
import ServiceSearch from "./ServiceSearch";
import { SearchProps } from "types";

const FullPageSearch: React.FC<SearchProps> = ({
  containerClassName,
  zoneName,
  zoneId,
  setCurrentZone,
}) => {
  let [searchType, setSearchType] = useState("CLOSED");

  return (
    <div className={containerClassName}>
      <StaticSearchInput onClick={() => setSearchType("ServiceSearch")} />
      {(() => {
        switch (searchType) {
          case "ServiceSearch":
            return (
              <ServiceSearch
                zoneName={zoneName}
                zoneId={zoneId}
                searchType={searchType}
                setSearchType={setSearchType}
              />
            );

          case "CitySearch":
            return (
              <CitySearch
                setCurrentZone={setCurrentZone}
                setSearchType={setSearchType}
                searchType={searchType}
              />
            );

          case "CLOSED":
            return <></>;
        }
      })()}
    </div>
  );
};

export default FullPageSearch;
