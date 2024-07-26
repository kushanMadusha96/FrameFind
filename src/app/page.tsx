import Image from "next/image";
import NavBar from "./(components)/NavBar/NavBar";
import Button from "./(components)/Button/Button";
import "./globals.css";
import DropDown from "./(components)/DropDown/DropDown";
import Post from "./(components)/Post/Post";
import SellerProfile from "./(components)/SellerProfile/SellerProfile";
import TextLabel from "./(components)/TextLabel/TextLabel";
import ImageLabel from "./(components)/ImageLabel/ImageLabel";
import SellerReviewContainer from "./(components)/SellerReviewContainer/SellerReviewContainer";
import WriteReview from "./(components)/WriteReview/WriteReview";
import PersonalInfo from "./(components)/PersonalInfo/PersonalInfo";
import Notification from "./(components)/Notification/Notification";
import UndoMessage from "./(components)/UndoMessage/UndoMessage";
import NotificationContainer from "./(components)/NotificationContainer/NotificationContainer";
import CreateNewModal from "./(components)/CreateNewModal/CreateNewModal";
import CreateNewModal_02, { SelectedAsset } from "./(components)/CreateNewModal02/CreateNewModal_02";
import Preview from "./(components)/Preview/Preview";
import PersonalInfoForm from "./(components)/PersonalInfoForm/PersonalInfoForm";
import SocialLinksForm from "./(components)/SocialLinksForm/SocialLinksForm";
import EventSelection from "./(components)/EventSelectionForm/EventSelection";
import AuthBtn from "./(components)/AuthBtn/AuthBtn";
import AuthForm from "./(components)/AuthForm/AuthForm";

export default function Home() {
  return (
    <>
      <EventSelection />
    </>
  );
}
