import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import PlumbingServicesFilterServiceCards from "../components/PlumbingServicesFilter-ServiceCards";

function PlumbingServicesListPage() {
  return (
    <div>
        <HeaderLogin />
        <PlumbingServicesFilterServiceCards />
        <Footer />
    </div>
  );
}

export default PlumbingServicesListPage;