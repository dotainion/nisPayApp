import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import './Member.css';

const SingleUser: React.FC = () => {
  const history = useHistory();
  const { name } = useParams<{ name: string; }>();

  useEffect(()=>{
    //if (true) history.push("/login");
  })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>NIS Payment</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

      </IonContent>
    </IonPage>
  );
};

export default SingleUser;
