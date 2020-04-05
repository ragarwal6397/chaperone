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
import { heartOutline, heartSharp } from "ionicons/icons";
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
    title: "OptionA",
    url: "/page/OptionA",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "OptionB",
    url: "/page/OptionB",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "OptionC",
    url: "/page/OptionC",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
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
