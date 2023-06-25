import OutlineButton from "@/components/search/OutlineButton";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const nextPage = () => {
    router.push("/city-search");
  }
  return (
    <>
      <h1 className="sm:hidden m-4 mt-10 text-center font-bold">
        میتوانید خدمات مختلف را در شهر مورد نظر خود جستجو کنید
      </h1>
      <OutlineButton onClick={nextPage} />
    </>
  );
}
