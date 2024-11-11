import React from "react";
import Banner from "../layout/Banner";
import BuyMeCoffeeComp from "../components/BuyMeCoffee";
// import BtnImgComp from "../components/BtnImg";
// import BtnGrpComp from "../components/BtnGrpComp";
// import BrowserWindowComp from "../components/BrowserWindow";
// import BulletColorComp from "../components/BulletColor";
// import BreadcrumbsComp from "../components/BreadcrumbsComp";
// import BlurBackgroundImage from "../components/BlurBackgroundImage";
// import BodyText from "../components/BodyText";
// import BorderAroundImg from "../components/BorderAroundImg";
// import BorderFrame from "../components/BorderFrame";
// import Bottombordernavlinks from "../components/Bottombordernavlinks";
// import BottomNavigation from "../components/BottomNavigation";
// import BlackWhiteImage from "../components/BlackWhiteImage";
// import BlockBtn from "../components/BlockBtn";
// import BlogLayoutComp from "../components/BlogLayout";
// import BigHeaderComp from "../components/BigHeader";
// import AspectRatio from "../components/AspectRatio";
// import AutoCompleteComp from "../components/AutoComplete";
// import AvatarImages from "../components/AvatarImages";
// import ArrowsComp from "../components/Arrows";
// import AnimatedSearchComp from "../components/AnimatedSearch";
// import AlertsComp from "../components/Alerts";
// import AnimateIcons from "../components/AnimateIcons";
// import AnimatedBtn from "../components/AnimatedBtn";
// import Accordion from "../components/Accordion";

const About = () => {
  return (
    <div className="content">
      <Banner
        title="About"
        content="Culpa velit fugiat deserunt deserunt sint laborum adipisicing dolore."
      />
      <div className="container mx-auto">
        <BuyMeCoffeeComp />
      </div>
    </div>
  );
};

export default About;
