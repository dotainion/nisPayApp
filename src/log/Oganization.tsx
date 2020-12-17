import { IonButton, IonCard, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React, { useState } from 'react';
import './Oganization.css'



export const Oganization = (props:any) =>{
    const [loginOrCreate, setLoginOrCreate] = useState({
        login: true,
        create: false,
        recover: false
    });
    return(
        <IonList hidden={!props.state} className="oganization-main-container">
            <IonCard className="oganization-sub-container">
                <IonItem class="oganization-header">
                        <IonLabel>Oganization</IonLabel>
                    </IonItem>
                <IonList hidden={!loginOrCreate.login}>
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
                            setLoginOrCreate({
                                login: false,
                                create: true,
                                recover: false
                            });
                        }}>Create Account</IonLabel>
                        <IonLabel class="oganizaton-recover-account oganization-hover" onClick={()=>{
                            setLoginOrCreate({
                                login: false,
                                create: false,
                                recover: true
                            });
                        }}>Recover Account</IonLabel>
                    </IonList>
                    <IonItem lines="none">
                        <IonButton color="light" slot="end">Login</IonButton>
                    </IonItem>
                </IonList>
                <IonList hidden={!loginOrCreate.create}>
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
                            setLoginOrCreate({
                                login: true,
                                create: false,
                                recover: false
                            });
                        }}>Sign In Instead</IonLabel>
                        <IonLabel class="oganizaton-recover-account oganization-hover" onClick={()=>{
                            setLoginOrCreate({
                                login: false,
                                create: false,
                                recover: true
                            });
                        }}>Recover an Account</IonLabel>
                    </IonList>
                    <IonItem lines="none">
                        <IonButton color="light" slot="end">Save</IonButton>
                    </IonItem>
                </IonList>
                <IonList hidden={!loginOrCreate.recover}>
                    <IonList class="oganization-sub-header">
                        <IonLabel>Recover an account</IonLabel>
                    </IonList>
                    <IonItem class="oganization-input" lines="none">
                        <IonLabel position="floating">Enter your email here</IonLabel>
                        <IonInput/>
                    </IonItem>
                    <IonList class="oganizaton-link-button-container">
                        <IonLabel class="oganizaton-create-account oganization-hover" onClick={()=>{
                            setLoginOrCreate({
                                login: true,
                                create: false,
                                recover: false
                            });
                        }}>Sign In</IonLabel>
                        <IonLabel class="oganizaton-recover-account oganization-hover" onClick={()=>{
                            setLoginOrCreate({
                                login: false,
                                create: true,
                                recover: false
                            });
                        }}>Create Account</IonLabel>
                    </IonList>
                    <IonItem lines="none">
                        <IonButton color="light" slot="end">Send</IonButton>
                    </IonItem>
                </IonList>
            </IonCard>
        </IonList>
    )
}