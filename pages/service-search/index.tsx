
import ServiceSearch from "@/components/search/ServiceSearch";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  let {zoneId,zoneName} = router.query;
  const zoneIdStr = String(zoneId);
  const zoneNameStr = String(zoneName);
  console.log(zoneId,zoneName)
  return (
    <ServiceSearch
        zoneName={zoneNameStr}
        zoneId={zoneIdStr} 
    />
  );
}
