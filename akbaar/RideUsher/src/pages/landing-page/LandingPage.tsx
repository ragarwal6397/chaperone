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
import _ from "lodash";
import ExploreContainer from "../../components/explore-container/ExploreContainer";
import "./LandingPage.css";
import { AppPageList } from "../../constants/AppPageList";

interface PageProps {
  name: string;
}

const LandingPage: React.FC<PageProps> = ({ name }) => {
  const page = _.find(AppPageList, (obj) => {
    return obj.partialUrl === name;
  });

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
        <ExploreContainer name={page?.title} />
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
