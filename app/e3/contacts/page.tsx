import ContactsHeader from "@/app/ui/header";
import Records from "@/app/ui/records";

const Contacts = () => {
  return (
    <div>
      <header>
        <ContactsHeader />
      </header>
      <div className="rounded-lg bg-white shadow-md">
        <Records />
      </div>
    </div>
  );
};

export default Contacts;
