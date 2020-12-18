import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* routs */
import { urlRouts } from './global/Routes';

/* pages */
import Oganization from './pages/oganization/Oganization';
import SingleUser from './pages/member/Member';
import Login from './log/Login';


const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Route path={urlRouts.oganization} component={Oganization} exact />
        <Route path={urlRouts.singleUser} component={SingleUser} exact />
        <Route path={urlRouts.login} component={Login} exact />
        <Route path="/" component={Login} exact />
        <Route path={urlRouts.app404} component={Login} />
        {/*<Redirect from="/" to={urlRouts.login} exact />*/}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
