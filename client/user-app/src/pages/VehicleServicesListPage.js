import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import VehicleServicesFilterServiceCards from "../components/VehicleServicesFilter-ServiceCards";

function VehicleServicesListPage() {
  return (
    <div>
        <HeaderLogin />
        <VehicleServicesFilterServiceCards />
        <Footer />
    </div>
  );
}

export default VehicleServicesListPage;