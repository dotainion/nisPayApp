import { IonButtons, IonContent, IonHeader, IonLabel, IonList, IonMenuButton, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './MemberPayout.css';

const MemberPayout = (props:any) => {
  return (
    <IonList hidden={!props.state}>
        <IonLabel>Single payout comming soon</IonLabel>
    </IonList>
  );
};

export default MemberPayout;
