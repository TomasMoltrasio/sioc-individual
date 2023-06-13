import Filter from "@/components/Filter";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <aside className="w-12/12 lg:w-3/12 mt-2">
        <Filter />
      </aside>
      <section className="flex min-h-screen flex-col items-center w-full lg:w-9/12 mt-2 justify-between pb-2 bg-base-100 md:p-4">
        {children}
      </section>
    </div>
  );
}
