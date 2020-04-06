import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  homeOutline,
  homeSharp,
  heartOutline,
  heartSharp,
  informationCircleOutline,
  informationCircleSharp,
  mailOutline,
  mailSharp,
} from "ionicons/icons";
import "./Menu.css";

interface MenuProps extends RouteComponentProps {
  selectedPage: string;
}

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/page/Home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "Donate",
    url: "/page/Donate",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "About RideUsher",
    url: "/page/AboutRideUsher",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
  },
  {
    title: "Contact Us",
    url: "/page/ContactUs",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
];

const Menu: React.FunctionComponent<MenuProps> = ({ selectedPage }) => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={selectedPage === appPage.title ? "selected" : ""}
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default withRouter(Menu);
