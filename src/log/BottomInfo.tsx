import { IonCard, IonCardContent, IonList } from '@ionic/react';
import React from 'react';
import './BottomInfo.css';


export const BottomInfo = () =>{
    return(
        <IonCard class="bottom-info-main-container">
            <IonCardContent>
                <IonList>
                    <span className="bottom-info-link bottom-info-hover">About Us</span>
                    <span className="bottom-info-link bottom-info-hover">Service Locaton</span>
                    <span className="bottom-info-link bottom-info-hover">About Us</span>
                </IonList>
            </IonCardContent>
        </IonCard>
    )
}