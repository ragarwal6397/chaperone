import React, { useState } from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

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
import "./theme/variables.css";

/* Components */
import Menu from "./components/menu/Menu";

/* Constants */
import { MenuListInterface, MenuList } from "./constants/MenuList";

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState("");

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu selectedPage={selectedPage} />
          <IonRouterOutlet id="main">
            {MenuList.map((page: MenuListInterface) => {
              const ComponentName = page.component;
              const url = `/page/${page.partialUrl}`;
              return (
                <Route
                  path={url}
                  render={() => {
                    setSelectedPage(page.partialUrl);
                    return <ComponentName />;
                  }}
                  exact={true}
                />
              );
            })}
            <Route
              path="/"
              render={() => <Redirect to="/page/SearchReviews" />}
              exact={true}
            />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
