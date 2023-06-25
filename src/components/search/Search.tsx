import { useState } from "react";
import FullPageSearch from "./FullPageSearch";

const FeaturefulSearch = () => {
  const [currentZone, setCurrentZone] = useState({zoneId: "", zoneName: ""})

  return (
    <>
      <h1 className="sm:hidden m-4 mt-10 text-center font-bold">
        میتوانید خدمات مختلف را در شهر مورد نظر خود جستجو کنید
      </h1>
      <FullPageSearch
        containerClassName="flex sm:hidden w-full px-3 py-4 overflow-hidden"
        zoneName={currentZone.zoneName}
        zoneId={currentZone.zoneId}
        setCurrentZone={setCurrentZone}
      />
    </>
  )
}

export default FeaturefulSearch;
