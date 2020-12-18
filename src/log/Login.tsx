import { IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { helpOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { NISLogo, UserInfo } from '../components/Widgets';
import { Oganization } from './Oganization';
import { SingleUser } from './SingleUser';
import './Login.css';
import { BottomInfo } from './BottomInfo';

const Login: React.FC = () => {
  const [oganizationInfo, setOganizationInfo] = useState(false);
  const [nisNumberInfo, setNisNumberInfo] = useState(false);
  const [loginSwitch, setLoginSwitch] = useState({
    oganization: true,
    singleuser: true
  });
  const [ogLoginOrCreate, setOgLoginOrCreate] = useState({
    login: true,
    create: false,
    recover: false
  });

  const infoOganization = "oganization can make payment by adding employee to an account";
  const infoNISnumber = "You'll be able to make payment towards you NIS account";
  return (
    <IonPage className="main">
      <IonContent>
        <IonList class="login-logo-container">
          <NISLogo/>
        </IonList>
        <IonGrid class="login-grid">
          <IonRow>
            <IonCol size-md="4" offset-md="6">
              <IonCard class="login-main-container">
                <IonList class="login-header">
                  <IonLabel>Welcome to the National Insurance Scheme Grenada</IonLabel>
                </IonList>
                <IonItemDivider/>

                <SingleUser 
                  state={!loginSwitch.singleuser}
                />
                <Oganization 
                  set={(ogLogin:boolean,ogCreate:boolean,ogRecover:boolean)=>{
                    setOgLoginOrCreate({
                      login: ogLogin,
                      create: ogCreate,
                      recover: ogRecover
                    });
                  }}
                  state={!loginSwitch.oganization}
                  login={ogLoginOrCreate.login}
                  create={ogLoginOrCreate.create}
                  recover={ogLoginOrCreate.recover}
                />
                <div hidden={!loginSwitch.oganization} style={{position:"relative"}}>
                  <IonItem onClick={()=>{
                    setLoginSwitch({
                      oganization: false,
                      singleuser: true
                    });
                  }} className="login-button login-hover">
                    <IonLabel>Oganization</IonLabel>
                    <IonIcon onMouseOver={()=>{
                      console.log("this is a test")
                      setOganizationInfo(true);
                    }} onMouseOut={()=>{
                      setOganizationInfo(false);
                    }} icon={helpOutline}/>
                  </IonItem>
                  <UserInfo state={oganizationInfo} msg={infoOganization}/>
                </div>
                <div hidden={!loginSwitch.singleuser} style={{position:"relative"}}>
                  <IonItem onClick={()=>{
                    setLoginSwitch({
                      oganization: true,
                      singleuser: false
                    });
                  }} className="login-button login-hover">
                    <IonLabel>Login with my NIS number</IonLabel>
                    <IonIcon onMouseOver={()=>{
                      setNisNumberInfo(true);
                    }} onMouseOut={()=>{
                      setNisNumberInfo(false);
                    }} icon={helpOutline}/>
                  </IonItem>
                  <UserInfo state={nisNumberInfo} msg={infoNISnumber}/>
                </div>
              </IonCard>
              <BottomInfo/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
