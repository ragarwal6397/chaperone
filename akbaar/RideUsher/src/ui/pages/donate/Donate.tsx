import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonButton,
  IonIcon,
  IonToolbar,
} from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";
import React from "react";
import ExploreContainer from "../../components/explore-container/ExploreContainer";
import "./Donate.css";

interface DonateProps {}

const Donate: React.FC<DonateProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="dark" />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton color="dark">
              <IonIcon slot="icon-only" icon={personCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ExploreContainer name={"Donate"} />
      </IonContent>
    </IonPage>
  );
};

export default Donate;
