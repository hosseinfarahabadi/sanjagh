import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { SearchInputProps } from "types";

const SearchInput: React.FC<SearchInputProps> = ({
  serviceList,
  setServiceList,
}) => {
  const [inputValue, setInputValue] = useState("");
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value);

  let handleClearClick = () => {
    setInputValue("");
    setServiceList([]);
  };

  useEffect(() => {
    let trimmedValue = inputValue.trim();
    let serviceListCopy = serviceList;
    if (trimmedValue !== "") {
      serviceListCopy = serviceList.filter((s) =>
        s.name.includes(trimmedValue)
      );
    }
    console.log(serviceListCopy);
    setServiceList(serviceListCopy);
  }, [inputValue]);

  return (
    <div className="flex w-full">
      <div className="relative flex w-full items-center justify-between overflow-hidden">
        <input
          type="search"
          className="absolute w-full text-gray-700 outline-none"
          value={inputValue}
          onChange={handleSearchInputChange}
          placeholder="به چه خدمتی نیاز دارید؟"
        />
      </div>
      <span className="z-10" onClick={handleClearClick}>
        <CgClose className="cursor-pointer" size="1.4rem" color="#D3D4D5" />
      </span>
    </div>
  );
};

export default SearchInput;
