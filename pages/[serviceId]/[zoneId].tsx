
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next'
import ServicePage from '@/components/search/ServicePage';
export const getStaticProps: GetStaticProps = async (context) => {

  const res = await fetch(`/api/page/?param1=context&param2=value2`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
const FeaturefulSearch = () => {
const router = useRouter();
const {serviceId,zoneId} = router.query
const serviceIdStr = String(serviceId);
const zoneIdStr = String(zoneId);
console.log(serviceId,zoneId)
  return (
    <ServicePage serviceId={serviceIdStr} zoneId={zoneIdStr} serviceData={null}  /> 
    // <FullPageWrapper
    //   headerTitle="جستجوی شهر"
    // >

    // </FullPageWrapper>
  )
}

export default FeaturefulSearch;