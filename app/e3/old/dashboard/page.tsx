import { auth } from "@clerk/nextjs/server";
import Addresses from "@/app/ui/addresses";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Filters from "@/app/ui/filters";

const Dashboard = () => {
  const { orgSlug } = auth();
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Addresses
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Most recent addresses for <b>{orgSlug}</b>
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          {/* <button
            type="button"
            className="block rounded-md bg-astral-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-astral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-astral-600"
          >
            <div className="group flex gap-x-3 rounded-md text-sm leading-6 font-semibold">
              <AdjustmentsHorizontalIcon className="h-6 w-6 shrink-0" />
              Filters
            </div>
          </button> */}
          <Filters />
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <Addresses />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
