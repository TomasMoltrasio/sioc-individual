import CardDwelling from "@/components/CardDwelling";
import { fetchData } from "@/services/fetchData";

export default async function DwellingSearch() {
  const searchParams = {
    page: {
      pageNumber: 1,
      perPage: 6,
    },
    orderKeyByDate: "newest",
  };
  const data = await fetchData(searchParams);

  return (
    <section className="flex flex-col items-center justify-center w-full mt-10 p-4">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-xl md:text-4xl font-bold text-center text-slate-900">
          Últimas Propiedades
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 w-full md:w-10/12 gap-[30px]">
        {data?.dwellings?.map((dwelling) => (
          <CardDwelling key={dwelling._id} dwelling={dwelling} />
        ))}
      </div>
    </section>
  );
}
