
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ServicePageProps, ZoneListProps } from 'types';
import FullPageWrapper from '@/components/search/FullPageWrapper';

const ServicePage: NextPage<ServicePageProps> = ({serviceData}) => {
  return (
    <FullPageWrapper
      headerTitle="خدمات"
      route="/city-search"
    >
      <div>
        <p>عنوان خدمت : {serviceData.serviceId}</p>
        <p>منطقه : {serviceData.zoneId}</p>
        <p>توضیحات : {serviceData.text}</p>
      </div>
    </FullPageWrapper>
  )
}

export default ServicePage;


export const getStaticPaths: GetStaticPaths = async (contex) => {
  const { serviceId, zoneId }:any = contex;
  console.log(contex)
  const responseZone = await fetch(`https://front-interview.darkube.app/inter/exp/direct/api/zones`);
  const zones= await responseZone.json();
  const responseService = await fetch(`https://front-interview.darkube.app/inter/exp/direct/api/services?zoneId=${zoneId}`);
  const services= await responseService.json();
  console.log(services)

  let paths = [
    { params: { serviceId: '1', zoneId: '1' } },
  ];
  for (let i = 0; i < zones.length; i++) {
    for (let j = 0; j < 10; j++) {
      const strI = String(i+1)
      const strJ = String(j+1)
      paths.push({ params: { serviceId: strI, zoneId: strJ } }) 
    }
  }
  console.log(paths)
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ServicePageProps> = async ({ params }) => {
  if (!params || !params.serviceId || !params.zoneId) {
      return { notFound: true };
    }
const { serviceId, zoneId }:any = params;
const response = await fetch(`https://front-interview.darkube.app/inter/exp/direct/api/page?serviceId=${serviceId}&zoneId=${zoneId}`);
const serviceData = await response.json();

return {
  props: {
    serviceData,
  },
};
}