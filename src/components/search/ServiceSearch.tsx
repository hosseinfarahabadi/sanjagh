import { useEffect, useState } from "react";
import FullPageWrapper from "./FullPageWrapper";
import SearchInput from "./SearchInput";
import ZonePicker from "./ZonePicker";
import SearchResults from "./SearchResults";
import { ServiceListProps, ServiceSearchProps } from "types";

const ServiceSearch: React.FC<ServiceSearchProps> = ({
  zoneName,
  zoneId,
  searchType,
  setSearchType,
}) => {
  const [serviceList, setServiceList] = useState<ServiceListProps>([]);
  const [filterdServiceList, setFilteredServiceList] =
    useState<ServiceListProps>([]);

  useEffect(() => {
    fetch(`/api/services?zoneId=${zoneId}`)
      .then((res) => res.json())
      .then((serviceList) => {
        console.log(serviceList);
        setServiceList(serviceList);
        setFilteredServiceList(serviceList);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <FullPageWrapper
      onBackButtonClick={() => setSearchType("CLOSED")}
      searchType={searchType}
    >
      <div className="relative flex w-full items-center rounded-md shadow-sm">
        <div className="relative flex w-full flex-col justify-center">
          <div className="flex h-12 items-center rounded-lg rounded-l-none border border-l-0 border-gray-200 p-3">
            <SearchInput
              serviceList={serviceList}
              setServiceList={setFilteredServiceList}
            />
          </div>
          <span className="absolute left-0 h-9 w-0 self-center border-r-[1px] border-gray-200" />
        </div>
        <ZonePicker
          zoneName={zoneName}
          onClick={() => setSearchType("CitySearch")}
        />
        <SearchResults results={filterdServiceList} zoneId={zoneId} />
      </div>
    </FullPageWrapper>
  );
};

export default ServiceSearch;
