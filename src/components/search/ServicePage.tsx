import { GetStaticProps, NextPage } from 'next';
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
export async function getStaticPaths() {
  // Define the paths to pre-render based on available data
  const paths = [
    { params: { id1: '1d1', id2: '1d2' } },
    // Add more paths as needed
  ];

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<ServicePageProps> = async ({ params }) => {
  const { serviceId, zoneId }:any = params;

  // Fetch data from the API using the id1 and id2 as query parameters
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