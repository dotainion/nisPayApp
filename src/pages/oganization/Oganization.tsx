import { IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { addSharp, calculatorSharp, calendarSharp, cardOutline, cardSharp, notificationsSharp } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Menu from '../../components/Menu';
import AllPayout from './AllPayout';
import MemberPayout from './MemberPayout';
import './Oganization.css';

const Oganization: React.FC = () => {
  const history = useHistory();
  const { name } = useParams<{ name: string; }>();

  const [addEmpoyee, setAddEmployee] = useState(false);
  const [allPayout, setAllPayout] = useState(true);
  const [memberPayout, setMemberPayout] = useState(false);

  const reset = () =>{
    setAddEmployee(false);
    setAllPayout(false);
    setMemberPayout(false);
  }
  const appTasks = [
    { title: 'Add Employee', set: setAddEmployee, null: reset, icon: addSharp },
    { title: 'Payout', set: setAllPayout, callBack: reset, icon: cardSharp },
    { title: 'Payout to a Employee', set: setMemberPayout, callBack: reset, icon: cardOutline }
  ];
  
  const appSettigns = [
    { title: 'Reminders', set: null, callBack: reset, icon: notificationsSharp },
    { title: 'Calculator', set: null, callBack: reset, icon: calculatorSharp },
    { title: 'Calendar', set: null, callBack: reset, icon: calendarSharp }
  ];
  
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
      <IonSplitPane contentId="main" class="oganization-splitpane">
      <Menu tasks={appTasks} settings={appSettigns}/> 
      <IonList id="main">
        <AllPayout state={allPayout}/>
        <MemberPayout state={memberPayout}/>
      </IonList>
      </IonSplitPane> 
    </IonPage>
  );
};

export default Oganization;
