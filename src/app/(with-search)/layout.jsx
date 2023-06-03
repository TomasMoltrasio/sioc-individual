import FormSearch from "@/components/FormSearch";

export default function Layout({ children }) {
  return (
    <>
      <div className="shadow rounded-lg mt-2 md:mt-0">
        <FormSearch />
      </div>
      <section className="flex min-h-screen flex-col items-center w-11/12 md:w-9/12 mt-2 justify-between pb-2 bg-base-100 md:p-4">
        {children}
      </section>
    </>
  );
}
