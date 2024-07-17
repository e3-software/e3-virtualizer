import SideFilters from "../sideFilters";

/**
 *
 * @param param Header component for main contacts page
 * @returns
 */
export function ContactsHeader(){
  return (
    <header className="py-10">
      <div className="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white flex-grow dark:text-gray-300">
          Contacts
        </h1>
        <div className="row-end">
          <SideFilters />
        </div>
      </div>
    </header>
  );
};

export function ImportHeader(){
  return (
    <header className="py-10">
      <div className="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white flex-grow className='dark:text-gray-300'">
          Import
        </h1>
      </div>
    </header>
  );
};
