import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import TailorServicesFilterServiceCards from "../components/TailorServicesFilter-ServiceCards";

function TailorServicesListPage() {
  return (
    <div>
        <HeaderLogin />
        <TailorServicesFilterServiceCards />
        <Footer />
    </div>
  );
}

export default TailorServicesListPage;