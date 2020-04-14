import React, { useEffect } from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Plugins } from "@capacitor/core";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./ui/theme/variables.css";

/* Components */
import Menu from "./ui/components/menu/Menu";

/* Pages */
import Login from "./ui/pages/login/Login";

/* Constants */
import { MenuListInterface, MenuList } from "./constants/MenuList";

import { RootState } from "./store/";

const { SplashScreen } = Plugins;

const App: React.FC = () => {
  const menuOption = useSelector((state: RootState) => state.ui.menuOptionName);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu selectedPage={menuOption} />
          <IonRouterOutlet id="main">
            {MenuList.map((page: MenuListInterface, index: number) => {
              const ComponentName = page.component;
              const url = `/page/${page.partialUrl}`;
              return (
                <Route
                  path={url}
                  component={ComponentName}
                  exact={true}
                  key={index}
                />
              );
            })}
          </IonRouterOutlet>
        </IonSplitPane>
        <Route path="/page/Login" component={Login} exact={true} />
        <Route
          path="/"
          render={() => <Redirect to="/page/Login" />}
          exact={true}
        />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
