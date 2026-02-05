import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import PersonalServicesFilterServiceCards from "../components/PersonalServicesFilter-ServiceCards";

function PersonalServicesListPage() {
    return (
      <div>
        <HeaderLogin />
        <PersonalServicesFilterServiceCards />
        <Footer />
      </div>
    );
}

export default PersonalServicesListPage;