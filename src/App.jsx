import { AutoReply } from "./components/AutoReply";
import { ContactAndAutoReply } from "./components/ContactAndAutoReply";
import { ContactUs } from "./components/Demo";

function App() {
  return (
    <>
      <h1 className="text-center text-5xl text-red-500">Email JS</h1>
      {/* <ContactUs /> */}
      {/* <AutoReply /> */}
      <ContactAndAutoReply/>
    </>
  );
}

export default App;
