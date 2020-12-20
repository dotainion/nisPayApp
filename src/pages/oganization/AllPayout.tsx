import { IonButton, IonButtons, IonCheckbox, IonContent, IonDatetime, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { pencil, pencilOutline, pencilSharp, trashSharp } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import './AllPayout.css';
import { FaEdit } from 'react-icons/fa';
import { db } from '../../database/database';
import { tools } from '../../components/Tools';
import { Alert } from '../../components/Widgets';

const AllPayout = (props:any) => {
    const [rememberMe, setRememberMe] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [memberList, setMemberList] = useState([] as any[]);
    const [nameTemp, setNameTemp] = useState("");
    const [amountTemp, setAmountTemp] = useState("");
    const [tempHolder, setTempHolder] = useState("");
    const initiate = async() =>{
        setMemberList([]);
        const lists = await db.get();
        setMemberList(lists);
    }
    useEffect(()=>{
        initiate();
    },[]);
    return (
        <IonList hidden={!props.state}>
            <Alert 
                state={showAlert}
                header="Attention!!"
                msg="Deleting this employee cannot be undone, would you like to continue??"
                okText="Yes"
                cancelText="No"
                onClose={()=>{
                    setShowAlert(false);
                }}
                onUpdate={async(shouldContinue:boolean)=>{
                    if (shouldContinue){
                        console.log(tempHolder)
                        await db.delete(tempHolder);
                        await initiate();
                    }
                }}
            />
            <IonList className="all-payout-container">
                <IonList className="all-payout-member-list-container">
                    <div className="all-payout-list-header">Employee List</div>
                    <div className="all-payout-list-header-info-container">
                        <div className="all-payout-list-header-name">Name</div>
                        <div className="all-payout-list-header-salary">Salary</div>
                        <div className="all-payout-list-header-percentage">Percentage</div>
                    </div>
                    <IonList className="all-payout-member-list">
                        {memberList.map((member:any,key:any)=>(
                            <IonList className="all-payout-item-container all-payout-hover" onMouseOver={()=>{
                                let element = document.getElementById(`${member.name.trim()}${key}`);
                                if (element) element.hidden = false;
                            }} onMouseOut={()=>{
                                let element = document.getElementById(`${member.name.trim()}${key}`);
                                if (element) element.hidden = true;
                            }} key={key}>
                                <span className="all-payment-edit-inputs" hidden id={`${member.name.trim()}${key}${"edit"}`}>
                                    <input className="all-payment-name-inputs all-payout-focus" onChange={async(e)=>{
                                        setNameTemp(e.target.value);
                                    }} value={nameTemp}/>
                                    <input className="all-payment-amount-inputs all-payout-focus" onChange={async(e)=>{
                                        setAmountTemp(e.target.value);
                                    }} value={amountTemp}/>
                                    <span className="all-payment-save-button" onClick={async()=>{
                                        let element3 = document.getElementById(`${member.name.trim()}${key}${"edit"}`);
                                        if (element3){
                                            element3.hidden = true;
                                            await db.update(member.id,nameTemp,amountTemp);
                                            await initiate();
                                        }
                                    }}>Save</span>
                                </span>
                                <IonLabel className="all-payment-name all-payout-focus all-payout-hover">{member.name}</IonLabel>
                                <IonLabel className="all-payment-percentage all-payout-focus all-payout-hover">{tools.percent(member.amount)}</IonLabel>
                                <IonLabel className="all-payment-amount all-payout-focus all-payout-hover">{member.amount}</IonLabel>
                                <IonCheckbox class="all-payment-checkbox" onIonChange={async(e)=>{
                                    await db.updateChecked(member.id,e.detail.checked);
                                }} checked={member.checked}/>
                                <span className="all-payment-edit" hidden id={`${member.name.trim()}${key}`}> 
                                    <FaEdit onClick={()=>{
                                        let element = document.getElementById(`${member.name.trim()}${key}`);
                                        if (element) element.hidden = true;

                                        let element3 = document.getElementById(`${member.name.trim()}${key}${"edit"}`);
                                        if (element3){ 
                                            element3.hidden = false;
                                            setNameTemp(member.name);
                                            setAmountTemp(member.amount);
                                        }
                                    }}/>   
                                    <IonIcon class="all-payment-delete" onClick={async()=>{
                                        let element = document.getElementById(`${member.name.trim()}${key}`);
                                        if (element){
                                            element.hidden = true;
                                            setTempHolder(member.id);
                                            setShowAlert(true);
                                        }
                                    }} icon={trashSharp}/>
                                </span>
                            </IonList>
                        ))}
                    </IonList>
                </IonList>
                <IonList className="all-payout-payment-container">
                    <IonLabel>Company Payment Infomation</IonLabel>
                    <IonList className="all-payout-payment-sub-container">
                        <IonItem>
                            <IonLabel position="floating">Company Name</IonLabel>
                            <IonInput/>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Email Address</IonLabel>
                            <IonInput/>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Phone Number</IonLabel>
                            <IonInput/>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Remember me</IonLabel>
                            <IonCheckbox onIonChange={(e)=>{setRememberMe(e.detail.checked);}}/>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Recurring Payment on this date</IonLabel>
                            <IonCheckbox disabled={!rememberMe}/>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Day/Month/Year</IonLabel>
                            <IonDatetime
                                disabled={!rememberMe}
                                displayFormat="DD/MMM/YYYY"
                                value={selectedDate} 
                                onIonChange={(e)=>{
                                    setSelectedDate(e.detail.value!)
                                }}
                            />
                        </IonItem>
                        <IonItem>
                            <IonButton>Submit</IonButton>
                        </IonItem>
                    </IonList>
                    <p className="all-payout-info" hidden={!rememberMe}>Recurring payment will only notify you via email and will not smubmit payment.</p>
                </IonList>
            </IonList>
        </IonList>
    );
};

export default AllPayout;
