import { IonButton, IonCard, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import { urlRouts } from '../global/Routes';
import './SingleUser.css'



export const SingleUser = (props:any) =>{
    const history = useHistory();
    return(
        <IonList hidden={!props.state} class="single-user-main-container">
            <IonCard className="single-user-sub-container">
                <IonItem class="single-user-header">
                    <IonLabel>Login with my NIS number</IonLabel>
                </IonItem>
                
                <IonItem className="single-user-input" lines="none">
                    <IonLabel position="floating">Enter NIS number here</IonLabel>
                    <IonInput/>
                </IonItem>
                <IonItem>
                    <IonButton color="light" slot="end" onClick={()=>{
                        history.push(urlRouts.singleUser)
                    }}>Login</IonButton>
                </IonItem>
            </IonCard>
        </IonList>
    )
}