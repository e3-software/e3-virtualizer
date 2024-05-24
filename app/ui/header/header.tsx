import SideFilters from "../sideFilters";

/**
 *
 * @param param Header component for main dashboard page
 * @returns
 */
const Header = () => {
  return (
    <header className="py-10">
      <div className="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white flex-grow">
          Dashboard
        </h1>
        <div className="row-end">
          <SideFilters />
        </div>
      </div>
    </header>
  );
};

export default Header;
