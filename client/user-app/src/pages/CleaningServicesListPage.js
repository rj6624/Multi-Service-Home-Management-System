import CleaningServicesFilterServiceCards from "../components/CleaningServicesFilter-ServiceCards";
import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";

function CleaningServicesListPage() {
  return (
    <div>
        <HeaderLogin />
        <CleaningServicesFilterServiceCards />
        <Footer />
    </div>
  );
}   

export default CleaningServicesListPage;