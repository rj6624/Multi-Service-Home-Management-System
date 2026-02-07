import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import PersonalInfo from "../components/PersonalInfo";
import ProfileCard from "../components/ProfileCard";
import PaymentMethodProfile from "../components/PaymentMethodProfile";
import SavedAddressProfile from "../components/SavedAddressProfile";
import ButtonsProfile from "../components/ButtonsProfile";

function Profile() {
    return (
        <div className="profile-page">
            <HeaderLogin />
            <ProfileCard />
            <PersonalInfo />
            <PaymentMethodProfile />
            <SavedAddressProfile />
            <ButtonsProfile />
            <Footer />
        </div>
    )
};

export default Profile;