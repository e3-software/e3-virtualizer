import Navigation from "@/app/ui/navigation";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-full bg-gray-50">
        <div className="bg-astral-800 pb-32">
          <Navigation />
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default BaseLayout;
