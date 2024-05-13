import { FetchAddress } from "@/app/lib/data/addresses"
import AddressTable from '@/app/ui/addresses/addressTable'

/**
 * This is a wrappeer component that will allow the ability to fetch
 * addresses on the server and pass them to the addressTable method which
 * will probably be client side
 * 
 * @returns React Component to display the address table
 */
const Addresses = async () => {
    const records = await new FetchAddress().byOrg()
    return (
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <AddressTable records={records} />
            </div>
        </div>
    )
}

export default Addresses