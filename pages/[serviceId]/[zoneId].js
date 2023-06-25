
import { useRouter } from 'next/router';
const FeaturefulSearch = () => {
const router = useRouter();
const {serviceId,zoneId} = router.query
console.log(serviceId,zoneId)
  return (
    <>
      
    </>
  )
}

export default FeaturefulSearch;
