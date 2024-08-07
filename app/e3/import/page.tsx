import { ImportHeader } from "@/app/ui/header/header";
import ImportButton from "@/app/ui/importButton";

const Import = () => {
  return (
    <div>
      <header>
        <ImportHeader />
      </header>
      <div style={{ marginTop: "50px" }}>
        <ImportButton />
      </div>
    </div>
  );
};

export default Import;
