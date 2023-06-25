import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export type ServiceSearchProps = {
  zoneName: string;
  zoneId: string;
  // searchType: string;
  // setSearchType: (searchType: string) => void;
};
type zone = {
  zoneId: string;
  zoneName: string;
};
export type CitySearchProps = {
  // searchType: string;
  // setSearchType: (searchType: string) => void;
  setCurrentZone: (zone: zone) => void;
};
export type ZoneListProps = {
  id: string;
  name: string;
};
export type SearchProps = {
  containerClassName: string;
  zoneName: string;
  zoneId: string;
  setCurrentZone: (zone: zone) => void;
};
export type FullPageWrapperProps = {
  // onBackButtonClick: () => void;
  children: string | JSX.Element | JSX.Element[];
  headerTitle: string;
};
export type SearchInputProps = {
  serviceList: {
    id: string;
    name: string;
  }[];
  setServiceList: Dispatch<SetStateAction<ServiceListProps>>;
};
export type ServiceListProps = {
  id: string;
  name: string;
}[];
export type ZonePickerProps = {
  zoneName: string;
  // onClick: MouseEventHandler<HTMLDivElement>;
};
export type SearchResultsProps = {
  results: ServiceListProps;
  zoneId: string;
};
export type SearchItemProps = {
  zoneId: string;
  serviceId: string;
  serviceName: string;
};
export type SearchHeaderProps = {
  headerTitle: string;
  // onBackButtonClick: MouseEventHandler<HTMLButtonElement>;
};
export type CityProps = {
  zoneId: string;
  zoneName: string;
  // setCurrentZone: (zone: zone) => void;
  // setSearchType: (searchType: string) => void;
};
export type OutlineButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};
type ServiceData = {
  zoneId: string;
  serviceId: string;
  text: string;
}|null
export type ServicePageProps = {
  serviceId: string;
  zoneId: string;
  serviceData: ServiceData;
};
