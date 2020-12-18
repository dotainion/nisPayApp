import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { urlRouts } from '../../global/Routes';
import './Member.css';

const SingleUser: React.FC = () => {
  const history = useHistory();
  const { name } = useParams<{ name: string; }>();

  useEffect(()=>{
    //if (true) history.push("/login");
  })
  return (
    <IonPage className="members-main-container">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>NIS Payment</IonTitle>
          <IonTitle slot="end" onClick={()=>{
            history.push(urlRouts.login);
          }}>Sign Out</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

      </IonContent>
    </IonPage>
  );
};

export default SingleUser;
