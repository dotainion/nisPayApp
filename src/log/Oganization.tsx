import { IonButton, IonCard, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { urlRouts } from '../global/Routes';
import './Oganization.css'

/**
 * login, create, recover is to open different window
 * state is to show the widget
 * set is to update the state of login, create and recover to render
 * @param props login
 * @param props create
 * @param props recover
 * @param props set
 * @param props state
 */

export const Oganization = (props:any) =>{
    const history = useHistory();
    return(
        <IonList hidden={!props.state} className="oganization-main-container">
            <IonCard className="oganization-sub-container">
                <IonItem class="oganization-header">
                        <IonLabel>Oganization</IonLabel>
                    </IonItem>
                <IonList hidden={!props.login}>
                    <IonList class="oganization-sub-header">
                        <IonLabel>Sign in</IonLabel>
                    </IonList>
                    <IonItem class="oganization-input" lines="none">
                        <IonLabel position="floating">Email Address</IonLabel>
                        <IonInput/>
                    </IonItem>
                    <IonItem class="oganization-input" lines="none">
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput/>
                    </IonItem>
                    <IonList class="oganizaton-link-button-container">
                        <IonLabel class="oganizaton-create-account oganization-hover" onClick={()=>{
                            if (props.set) props.set(false,true,false);
                        }}>Create Account</IonLabel>
                        <IonLabel class="oganizaton-recover-account oganization-hover" onClick={()=>{
                            if (props.set) props.set(false,false,true);
                        }}>Recover Account</IonLabel>
                    </IonList>
                    <IonItem lines="none">
                        <IonButton color="light" slot="end" onClick={()=>{
                            history.push(urlRouts.oganization);
                        }}>Login</IonButton>
                    </IonItem>
                </IonList>
                <IonList hidden={!props.create}>
                    <IonList class="oganization-sub-header">
                        <IonLabel>Create an account</IonLabel>
                    </IonList>
                    <IonItem class="oganization-input" lines="none">
                        <IonLabel position="floating">Oganization Name</IonLabel>
                        <IonInput/>
                    </IonItem>
                    <IonItem class="oganization-input" lines="none">
                        <IonLabel position="floating">Email Address</IonLabel>
                        <IonInput/>
                    </IonItem>
                    <IonItem class="oganization-input" lines="none">
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput/>
                    </IonItem>
                    <IonItem class="oganization-input" lines="none">
                        <IonLabel position="floating">Confirm Password</IonLabel>
                        <IonInput/>
                    </IonItem>
                    <IonList class="oganizaton-link-button-container">
                        <IonLabel class="oganizaton-create-account oganization-hover" onClick={()=>{
                            if (props.set) props.set(true,false,false);
                        }}>Sign In Instead</IonLabel>
                        <IonLabel class="oganizaton-recover-account oganization-hover" onClick={()=>{
                            if (props.set) props.set(false,false,true);
                        }}>Recover an Account</IonLabel>
                    </IonList>
                    <IonItem lines="none">
                        <IonButton color="light" slot="end">Save</IonButton>
                    </IonItem>
                </IonList>
                <IonList hidden={!props.recover}>
                    <IonList class="oganization-sub-header">
                        <IonLabel>Recover an account</IonLabel>
                    </IonList>
                    <IonItem class="oganization-input" lines="none">
                        <IonLabel position="floating">Enter your email here</IonLabel>
                        <IonInput/>
                    </IonItem>
                    <IonList class="oganizaton-link-button-container">
                        <IonLabel class="oganizaton-create-account oganization-hover" onClick={()=>{
                            if (props.set) props.set(true,false,false);
                        }}>Sign In</IonLabel>
                        <IonLabel class="oganizaton-recover-account oganization-hover" onClick={()=>{
                            if (props.set) props.set(false,true,false);
                        }}>Create Account</IonLabel>
                    </IonList>
                    <IonItem lines="none">
                        <IonButton color="light" slot="end" onClick={()=>{
                            
                        }}>Send</IonButton>
                    </IonItem>
                </IonList>
            </IonCard>
        </IonList>
    )
}