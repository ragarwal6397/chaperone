import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonButton,
  IonIcon,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonSelect,
  IonSelectOption,
  IonInput,
} from "@ionic/react";
import { personCircleOutline, helpCircleOutline } from "ionicons/icons";
import React, { useState } from "react";
import { StateList } from "../../../constants/StateList";
import "./SearchReviews.css";

interface SearchReviewsProps {}

const SearchReviews: React.FC<SearchReviewsProps> = () => {
  const [licensePlate, setLicensePlate] = useState<string>("");
  const [licenseState, setLicenseState] = useState<string>("");

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
        <IonGrid>
          <IonRow className="pageTitleLine1">
            <IonCol size="10" size-md offset="1">
              <IonText>Welcome!</IonText>
            </IonCol>
          </IonRow>

          <IonRow className="pageTitleLine2">
            <IonCol size="10" size-md offset="1">
              <IonText>Tell us about your ride</IonText>
            </IonCol>
          </IonRow>

          <IonRow className="licenseEntry">
            <IonCol size="4" size-sm offset="1">
              <IonSelect
                className="licenseStateSelect"
                value={licenseState}
                placeholder="State"
                okText="Select"
                cancelText="Dismiss"
                interface="popover"
                onIonChange={(e) => setLicenseState(e.detail.value)}
              >
                {StateList.map((state, idx) => (
                  <IonSelectOption key={idx} value={state}>
                    {state}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonCol>
            <IonCol size="5" size-sm>
              <IonInput
                className="licensePlateInput"
                type="text"
                inputMode="text"
                value={licensePlate}
                placeholder="Plate Number"
                onIonChange={(e) => setLicensePlate(e.detail.value!)}
              ></IonInput>
            </IonCol>
            <IonCol size="1" size-sm className="helpButtonContainer">
              <IonButton className="helpButton" fill={"clear"}>
                <IonIcon slot="icon-only" icon={helpCircleOutline} />
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="searchReviewsButtonContainer">
            <IonCol size="6" size-md offset="3">
              <IonButton
                className="searchReviewsButton"
                fill={"outline"}
                expand={"block"}
              >
                Search Reviews
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SearchReviews;
