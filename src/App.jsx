import { useState } from "react";
import DashboardLayout from "./components/pages/DashboardLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <DashboardLayout />
      </div>
    </>
  );
}

export default App;
