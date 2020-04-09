import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonListHeader,
  IonButton,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./Menu.css";
import { MenuListInterface, MenuList } from "../../constants/MenuList";

interface MenuProps extends RouteComponentProps {
  selectedPage: string;
}

const Menu: React.FunctionComponent<MenuProps> = ({ selectedPage }) => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonListHeader>
          <IonMenuToggle autoHide={false}>
            <IonButton color="dark">
              <IonIcon slot="icon-only" icon={closeOutline} />
            </IonButton>
          </IonMenuToggle>
          <IonLabel>RideUsher</IonLabel>
        </IonListHeader>
        <IonList>
          {MenuList.map((page: MenuListInterface, index: number) => {
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
