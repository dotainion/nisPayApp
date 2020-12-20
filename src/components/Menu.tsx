import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from '@ionic/react'; 
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Menu.css';


const Menu = (props:any) => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Tasks</IonListHeader>
          <IonNote>NIS Payment</IonNote>
          {props?.tasks?.map((appPage:any, index:any) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem class="menu-items" routerLink="#" onClick={()=>{
                  if (appPage.set){
                    if (appPage.callBack) appPage.callBack();
                    appPage.set(true);
                  }
                }} lines="none">
                  <IonIcon class="menu-icon" slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Settigns</IonListHeader>
          {props?.settings?.map((setting:any, index:any) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem class="menu-items" routerLink="#" onClick={()=>{
                  if (setting.set){
                    if (setting.callBack) setting.callBack();
                    setting.set(true);
                  }
                }} lines="none">
                  <IonIcon class="menu-icon" slot="start" icon={setting.icon} />
                  <IonLabel>{setting.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
