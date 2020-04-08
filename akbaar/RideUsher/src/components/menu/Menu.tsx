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
import "./Menu.css";
import { AppPageInterface, AppPageList } from "../../constants/AppPageList";

interface MenuProps extends RouteComponentProps {
  selectedPage: string;
}

const Menu: React.FunctionComponent<MenuProps> = ({ selectedPage }) => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {AppPageList.map((page: AppPageInterface, index: number) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={selectedPage === page.partialUrl ? "selected" : ""}
                  routerLink={`/page/${page.partialUrl}`}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={page.iosIcon} />
                  <IonLabel>{page.title}</IonLabel>
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
