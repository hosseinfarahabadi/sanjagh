import { CityProps } from "types";

const City: React.FC<CityProps> = ({
  zoneId,
  zoneName,
  setCurrentZone,
  setSearchType,
}) => {
  const handleCitySelect = () => {
    setCurrentZone({ zoneId, zoneName });
    setSearchType("ServiceSearch");
  };

  return (
    <div
      onClick={handleCitySelect}
      className="cursor-pointer border-b border-b-gray-100 px-2 py-3 text-gray-500 hover:bg-[#E5F1FF]"
    >
      <span> {zoneName} </span>
    </div>
  );
};
export default City;
