import { IonCard, IonCardContent, IonList } from '@ionic/react';
import React from 'react';
import './BottomInfo.css';


export const BottomInfo = () =>{
    return(
        <IonList class="bottom-info-main-container">
            <IonList>
                <span className="bottom-info-link bottom-info-hover">About Us</span>
                <span className="bottom-info-link bottom-info-hover">Service Locaton</span>
                <span className="bottom-info-link bottom-info-hover">About Us</span>
            </IonList>
        </IonList>
    )
}