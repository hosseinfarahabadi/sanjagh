import { HiOutlineLocationMarker } from "react-icons/hi";
import { ZonePickerProps } from "types";

const ZonePicker: React.FC<ZonePickerProps> = ({ zoneName, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex h-12 cursor-pointer items-center rounded-l-lg border border-r-0 border-gray-200 py-3 pl-5 pr-3 sm:rounded-none sm:border-l-0"
    >
      <HiOutlineLocationMarker className="ml-1" size="1.4rem" color="#D3D4D5" />
      <span className="select-none whitespace-nowrap text-gray-800">
        {zoneName ? zoneName : "انتخاب شهر"}
      </span>
    </div>
  );
};

export default ZonePicker;
