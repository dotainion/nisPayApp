import { IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { addSharp, calculatorSharp, calendarSharp, cardOutline, cardSharp, notificationsSharp, peopleOutline, peopleSharp } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Menu from '../../components/Menu';
import { urlRouts } from '../../global/Routes';
import { AddEmployee } from './AddEmployee';
import AllPayout from './AllPayout';
import Manage from './Manage';
import MemberPayout from './MemberPayout';
import './Oganization.css';

const Oganization: React.FC = () => {
  const history = useHistory();
  const { name } = useParams<{ name: string; }>();

  const [addEmployee, setAddEmployee] = useState(false);
  const [allPayout, setAllPayout] = useState(true);
  const [memberPayout, setMemberPayout] = useState(false);
  const [manageEmployee, setManageEmployee] = useState(false);

  const reset = () =>{
    setAllPayout(false);
    setMemberPayout(false);
    setManageEmployee(false);
  }
  const appTasks = [
    { title: 'Add Employee', set: setAddEmployee, callBack: null, icon: addSharp },
    { title: 'Payout', set: setAllPayout, callBack: reset, icon: cardSharp },
    { title: 'Payout to a Employee', set: setMemberPayout, callBack: reset, icon: cardOutline },
    { title: 'Manage Employee', set: setManageEmployee, callBack: reset, icon: peopleSharp }
  ];
  
  const appSettigns = [
    { title: 'Reminders', set: null, callBack: reset, icon: notificationsSharp },
    { title: 'Calculator', set: null, callBack: reset, icon: calculatorSharp },
    { title: 'Calendar', set: null, callBack: reset, icon: calendarSharp }
  ];
  
  return (
    <IonPage className="oganization-main-conatainer">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>NIS Payment</IonTitle>
          <IonTitle class="oganization-sign-out oganization-sign-out-hover" onClick={()=>{
            history.push(urlRouts.login);
          }} slot="end">Sign Out</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonSplitPane contentId="main" class="oganization-splitpane">
      <Menu tasks={appTasks} settings={appSettigns}/> 
      <IonList id="main">
        <AddEmployee state={addEmployee} onClose={()=>{setAddEmployee(false)}}/>
        <AllPayout state={allPayout}/>
        <MemberPayout state={memberPayout}/>
        <Manage state={manageEmployee}/>
      </IonList>
      </IonSplitPane>
    </IonPage>
  );
};

export default Oganization;
