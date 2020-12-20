import { IonButtons, IonContent, IonHeader, IonLabel, IonList, IonMenuButton, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Manage.css';

const Manage = (props:any) => {
  return (
    <IonList hidden={!props.state}>
        <IonLabel>Manage comming soon</IonLabel>
    </IonList>
  );
};

export default Manage;
