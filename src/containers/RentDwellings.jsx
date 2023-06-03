import CardDwelling from "@/components/CardDwelling";
import { fetchData } from "@/services/fetchData";

export default async function RentDwellings() {
  const searchParams = {
    publicationType: "Alquiler",
  };
  const data = await fetchData(searchParams);

  return (
    <div className="grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center mt-8 gap-[30px]">
      {data?.dwellings?.map((dwelling) => (
        <CardDwelling key={dwelling._id} dwelling={dwelling} />
      ))}
    </div>
  );
}
