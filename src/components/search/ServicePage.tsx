import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ServicePageProps } from 'types';

const ServicePage: NextPage<ServicePageProps> = ({ serviceId, zoneId, serviceData }) => {
    console.log(serviceData)
  return (
    <div>
      <h1>User Page</h1>
      <p>serviceId: {serviceId}</p>
      <p>zoneId: {zoneId}</p>
      
    </div>
  );
};
export default ServicePage;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
      { params: { serviceId: '1', zoneId: '1' } },
    ];
  
    return { paths, fallback: false };
  };

export const getStaticProps: GetStaticProps<ServicePageProps> = async ({ params }) => {
    if (!params || !params.serviceId || !params.zoneId) {
        return { notFound: true };
      }
  const { serviceId, zoneId }:any = params;
  const response = await fetch(`/api/page?serviceId=${serviceId}&zoneId=${zoneId}`);
  const serviceData = await response.json();

  return {
    props: {
        serviceId,
        zoneId,
      serviceData,
    },
  };
}