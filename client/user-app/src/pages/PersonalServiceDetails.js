import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import PersonalServiceDetailsSideBar from "../components/PersonalServiceDetails-SideBar";

function PersonalServiceDetails() {
  return (
    <div className="personal-service-details-page">
      <HeaderLogin />
      <PersonalServiceDetailsSideBar />
      <Footer />
    </div>
  );
}

export default PersonalServiceDetails;