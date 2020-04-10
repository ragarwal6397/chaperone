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
import { useDispatch } from "react-redux";
import "./Menu.css";
import { MenuListInterface, MenuList } from "../../../constants/MenuList";
import { actions } from "../../../store";

interface MenuProps extends RouteComponentProps {
  selectedPage: string;
}

const Menu: React.FunctionComponent<MenuProps> = ({ selectedPage }) => {
  const dispatch = useDispatch();

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
                  onClick={() => {
                    dispatch(actions.ui.updateMenuOption(page.partialUrl));
                  }}
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
