import { useEffect, useState } from "react";
import FullPageWrapper from "./FullPageWrapper";
import { HiOutlineLocationMarker } from "react-icons/hi";
import City from "./City";
import { ZoneListProps } from "types";

const CitySearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredZoneList, setFilteredZoneList] = useState([]);
  const [zoneList, setZoneList] = useState([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    let trimmedValue = value.trim();

    setFilteredZoneList(() => {
      if (trimmedValue === "") {
        return zoneList;
      } else {
        return zoneList.filter((z: ZoneListProps) =>
          z.name.includes(trimmedValue)
        );
      }
    });

    setInputValue(() => value);
  };

  useEffect(() => {
    fetch("/api/zones")
      .then((res) => res.json())
      .then((zoneList) => {
        console.log(zoneList)
        setZoneList(zoneList);
        setFilteredZoneList(zoneList);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <FullPageWrapper
      headerTitle="جستجوی شهر"
    >
      <div className="flex items-center rounded-lg border border-gray-200 p-3">
        <HiOutlineLocationMarker
          className="xsm:ml-2 ml-1"
          size="1.2rem"
          color="#D3D4D5"
        />
        <input
          type="text"
          className="text-gray-700 outline-none"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="جستجوی شهر"
        />
      </div>
      <div className="scrollbar-minimal mt-3 max-h-[750px] overflow-auto">
        {filteredZoneList.map(({ id, name }) => (
          <City
            key={id}
            zoneId={id}
            zoneName={name}
          />
        ))}
      </div>
    </FullPageWrapper>
  );
};

export default CitySearch;
