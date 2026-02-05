import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import ApplianceRepairServicesFilterServiceCards from "../components/ApplianceRepairServicesFilter-ServiceCards";

function ApplianceRepairServicesListPage() {
  return (
    <div>
        <HeaderLogin />
        <ApplianceRepairServicesFilterServiceCards />
        <Footer />
    </div>
  );
}

export default ApplianceRepairServicesListPage;