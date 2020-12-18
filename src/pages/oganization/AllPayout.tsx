import { IonButtons, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { pencil, pencilOutline, pencilSharp, trashSharp } from 'ionicons/icons';
import React, { useState } from 'react';
import './AllPayout.css';
import { FaEdit } from 'react-icons/fa';

const AllPayout = (props:any) => {
    const memberList = [
        { name: "Test Account 1", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 2", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 3", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 4", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 5", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 6", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 7", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 8", checked: false, amount: "0.00", id: "some database id" },
        { name: "Test Account 9", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 10", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 11", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 12", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 13", checked: false, amount: "0.00", id: "some database id" },
        { name: "Test Account 14", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 15", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 16", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 17", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 18", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 19", checked: true, amount: "0.00", id: "some database id" },
        { name: "Test Account 20", checked: true, amount: "0.00", id: "some database id" },
    ];
  return (
    <IonList hidden={!props.state}>
        <IonList className="all-payout-container">
            <IonList className="all-payout-member-list-container">
                <div className="all-payout-list-header">Employee List</div>
                <IonList className="all-payout-member-list">
                    {memberList.map((member:any,key:any)=>(
                        <IonList class="all-payout-hover" onMouseOver={()=>{
                            let element = document.getElementById(`${member.name.trim()}${key}`);
                            if (element) element.hidden = false;
                        }} onMouseOut={()=>{
                            let element = document.getElementById(`${member.name.trim()}${key}`);
                            if (element) element.hidden = true;
                        }} key={key}>
                            <span className="all-payment-edit-inputs" hidden id={`${member.name.trim()}${key}${"edit"}`}>
                                <input className="all-payment-name-inputs all-payout-focus" value={member.name}/>
                                <input className="all-payment-amount-inputs all-payout-focus" value={member.amount}/>
                                <span className="all-payment-save-button" onClick={()=>{
                                    let element3 = document.getElementById(`${member.name.trim()}${key}${"edit"}`);
                                    if (element3) element3.hidden = true;
                                }}>Save</span>
                            </span>
                            <IonLabel className="all-payment-name all-payout-focus all-payout-hover">{member.name}</IonLabel>
                            <IonLabel className="all-payment-amount all-payout-focus all-payout-hover">{member.amount}</IonLabel>
                            <IonCheckbox class="all-payment-checkbox" checked={member.checked}/>
                            <span className="all-payment-edit" hidden id={`${member.name.trim()}${key}`}> 
                                <FaEdit onClick={()=>{
                                    let element = document.getElementById(`${member.name.trim()}${key}`);
                                    if (element) element.hidden = true;

                                    let element3 = document.getElementById(`${member.name.trim()}${key}${"edit"}`);
                                    if (element3) element3.hidden = false;
                                }}/>   
                                <IonIcon class="all-payment-delete" icon={trashSharp}/>
                            </span>
                        </IonList>
                    ))}
                </IonList>
            </IonList>
            <IonList class="all-payout-payment-container">
                
            </IonList>
        </IonList>
    </IonList>
  );
};

export default AllPayout;
