import React, { useState } from "react";
import "./Login.css";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonText,
} from "@ionic/react";
import { Redirect } from "react-router";

interface LoginProps {}
const CODE_LENGTH = 7;

const Login: React.FC<LoginProps> = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [code, setCode] = useState<string>("");
  const [codeRequested, setCodeRequested] = useState<boolean>(false);
  const [loginComplete, setLoginComplete] = useState<boolean>(false);

  const pageActionText = codeRequested
    ? "We've sent you a code. Please enter it here"
    : "Please login / sign up to get started";
  const buttonCTAText = codeRequested ? "Continue" : "Send me a code";

  function formatPhoneNumber(num: string | undefined) {
    if (!num) return "";
    const p1 = num.slice(0, 3);
    const p2 = num.slice(3, 6);
    const p3 = num.slice(6, 10);

    if (p1.length < 1) {
      return "";
    }
    if (p1.length < 3 || p2.length < 1) {
      return `(${p1}`;
    }
    if (p2.length < 3 || p3.length < 1) {
      return `(${p1}) ${p2}`;
    }

    let result = `(${p1}) ${p2} ${p3}`;
    return result;
  }

  function updatePhoneNumber(value: string) {
    const rawPhoneNumber = value.replace(/[^0-9]/g, "");
    setPhoneNumber(rawPhoneNumber);
  }

  function updateCode(value: string) {
    if (value.length <= CODE_LENGTH) setCode(value);
  }

  function handleSubmit() {
    if (codeRequested) {
      if (code.length === CODE_LENGTH) setLoginComplete(true);
    } else {
      if (phoneNumber) setCodeRequested(true);
    }
  }

  return (
    <>
      {loginComplete && <Redirect to="/page/SearchReviews" />}
      {!loginComplete && (
        <IonPage>
          <IonContent>
            <IonGrid>
              <IonRow className="pageTitle">
                <IonCol size="10" size-md offset="1">
                  <IonText>RideUsher</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="pageSubTitle">
                <IonCol size="10" size-md offset="1">
                  <IonText>Let me know when you get home</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="pageActionText">
                <IonCol size="10" size-md offset="1">
                  <IonText>{pageActionText}</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="numberInput">
                <IonCol size="6" size-md offset="3">
                  <IonInput
                    type="text"
                    inputMode="tel"
                    value={formatPhoneNumber(phoneNumber)}
                    placeholder="Phone Number"
                    onIonChange={(e) => updatePhoneNumber(e.detail.value!)}
                  ></IonInput>
                </IonCol>
              </IonRow>
              {codeRequested && (
                <IonRow className="codeInput">
                  <IonCol size="6" size-md offset="3">
                    <IonInput
                      type="text"
                      inputMode="numeric"
                      value={code}
                      maxlength={CODE_LENGTH}
                      placeholder="7-digit code"
                      onIonChange={(e) => updateCode(e.detail.value!)}
                    ></IonInput>
                  </IonCol>
                </IonRow>
              )}
              <IonRow className="pageActionButton">
                <IonCol size="6" size-md offset="3">
                  <IonButton onClick={handleSubmit}>{buttonCTAText}</IonButton>
                </IonCol>
              </IonRow>
              <IonRow className="pageFooterText">
                <IonCol size="10" size-md offset="1">
                  <IonText>
                    By logging in / signing up, I accept RideUsher’s
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="pageFooterTextTerms">
                <IonCol size="10" size-md offset="1">
                  <IonText>
                    <u>Terms of Service</u>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
