import { FetchRecords } from "@/app/lib/data/records";
import RecordsTable from "./recordsTable";

/**
 * This is a wrappeer component that will allow the ability to fetch
 * addresses on the server and pass them to the addressTable method which
 * will probably be client side
 *
 * @returns React Component to display the address table
 */
const Records = async () => {
  const records = await new FetchRecords().byOrg();

  return (
    <div className="inline-block min-w-full align-middle">
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <RecordsTable records={records} />
      </div>
    </div>
  );
};

export default Records;
