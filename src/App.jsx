import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/pages/DashboardLayout";
import MyData from "./components/pages/MyData";
import MyEmployees from "./components/pages/MyEmployees";
import EmployeeDetail from "./components/pages/EmployeeDetail";
import CustomerLeads from "./components/pages/CustomerLeads";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="my-data" replace />} />

        <Route path="my-data" element={<MyData />} />
        <Route path="my-employees" element={<MyEmployees />} />
        <Route path="employee-details" element={<EmployeeDetail />} />
        <Route path="customer-leads" element={<CustomerLeads />} />
      </Route>
    </Routes>
  );
}

export default App;
