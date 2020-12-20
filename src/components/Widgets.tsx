import { IonAlert, IonCard, IonImg, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import './Widgets.css'
import logo from '../images/NIS_logo.jpg';


export const UserInfo = (props:any) =>{
    return(
        <div hidden={!props.state} className="user-info-main-container">
            <p className="user-info-content">{props.msg}</p>
        </div>
    )
}

export const NISLogo = (props:any) =>{
    return(
        <IonList class="nis-logo-main-container">
            <IonCard class="nis-logo">
                <IonCard class="nis-logo">
                    <IonCard class="nis-logo">
                        <IonImg src={logo}/>
                    </IonCard>
                </IonCard>
            </IonCard>
        </IonList>
        
    )
}

export const Alert = (props:any) =>{
    return(
        <>
            <IonAlert
            isOpen={props.state}
            onDidDismiss={() =>{if (props.onClose) props.onClose();}}
            cssClass='my-custom-class'
            header={props.header || 'Confirm!'}
            message={props.msg || 'Message text!!!'}
            buttons={[
            {
                text: props.cancelText || 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: blah => {
                    if (props.onUpdate) props.onUpdate(false);
                }
            },
            {
                text: props.okayText || 'Okay',
                handler: () => {
                    if (props.onUpdate) props.onUpdate(true);
                }
            }
            ]}
        />
      </>
    )
}