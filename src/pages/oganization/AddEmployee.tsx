import { IonButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { pencil, pencilOutline, pencilSharp, trashSharp } from 'ionicons/icons';
import React, { useState } from 'react';
import { tools } from '../../components/Tools';
import { db } from '../../database/database';
import './AddEmployee.css';

export const AddEmployee = (props:any) => {
    const [error, setError] = useState({
        color: "",
        msg: ""
    });
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");

    const addMember = async() =>{
        if (name && salary){
            await db.addEmployee(tools.titleCase(name), salary);
            setError({
                color: "success",
                msg:`${tools.titleCase(name)} was added successfully.`
            });
        }else{
            setError({
                color: "danger",
                msg:"All fields are required."
            });
        }
    }
  return (
    <IonModal onDidDismiss={()=>{
        if (props.onClose) props.onClose();
    }} isOpen={props.state}>
        <IonContent>
            <IonItem class="add-employee-header" lines="none">
                <IonLabel>Add Employee</IonLabel>
            </IonItem>
            <IonList class="add-employee-sub-container">
                <IonItem class="add-employee-item-containter" lines="none">
                    <IonLabel position="floating">Name</IonLabel>
                    <IonInput onIonChange={(e)=>{
                        if (e.detail.value) setName(e.detail.value);
                    }}/>
                </IonItem>
                <IonItem class="add-employee-item-containter" lines="none">
                    <IonLabel position="floating">Salary per month</IonLabel>
                    <IonInput onIonChange={(e)=>{
                        if (e.detail.value) setSalary(e.detail.value);
                    }}/>
                </IonItem>
            </IonList>
            <IonItem class="add-employee-button-containter" lines="none">
                <IonButton class="add-employee-button" onClick={()=>{
                    if (props.onClose) props.onClose();
                }} color="light" slot="end">Cancel</IonButton>
                <IonButton class="add-employee-button" onClick={async()=>{
                    addMember();
                }} color="light" slot="end">Add</IonButton>
            </IonItem>
            <IonItem class="add-employee-error-container" lines="full">
                <IonLabel color={error.color}>{error.msg}</IonLabel>
            </IonItem>
        </IonContent>
    </IonModal>
  );
};

