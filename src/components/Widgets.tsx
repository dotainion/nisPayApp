import { IonCard, IonImg, IonLabel, IonList } from '@ionic/react';
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