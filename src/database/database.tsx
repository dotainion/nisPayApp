import { tools } from "../components/Tools";

class Employee{
    memberList = [
        { name: "Test Account 1", checked: true, amount: "0.00", id: "some database id 1"},
        { name: "Test Account 2", checked: true, amount: "0.00", id: "some database id 2"},
        { name: "Test Account 3", checked: true, amount: "0.00", id: "some database id 3"},
        { name: "Test Account 4", checked: true, amount: "0.00", id: "some database id 4"},
        { name: "Test Account 5", checked: true, amount: "0.00", id: "some database id 5"},
        { name: "Test Account 6", checked: true, amount: "0.00", id: "some database id 6"},
        { name: "Test Account 7", checked: true, amount: "0.00", id: "some database id 7"},
        { name: "Test Account 8", checked: false, amount: "0.00", id: "some database id 8"},
        { name: "Test Account 9", checked: true, amount: "0.00", id: "some database id 9"},
        { name: "Test Account 10", checked: true, amount: "0.00", id: "some database id 10"},
        { name: "Test Account 11", checked: true, amount: "0.00", id: "some database id 11"},
        { name: "Test Account 12", checked: true, amount: "0.00", id: "some database id 12"},
        { name: "Test Account 13", checked: false, amount: "0.00", id: "some database id 13"},
        { name: "Test Account 14", checked: true, amount: "0.00", id: "some database id 14"},
        { name: "Test Account 15", checked: true, amount: "0.00", id: "some database id 15"},
        { name: "Test Account 16", checked: true, amount: "0.00", id: "some database id 16"},
        { name: "Test Account 17", checked: true, amount: "0.00", id: "some database id 17"},
        { name: "Test Account 18", checked: true, amount: "0.00", id: "some database id 18"},
        { name: "Test Account 19", checked: true, amount: "0.00", id: "some database id 19"},
        { name: "Test Account 20", checked: true, amount: "0.00", id: "some database id 20"},
    ];
    async get(){
        return this.memberList;
    }
    async update(id:string,name:string,amount:string){
        for (let i=0; i < this.memberList.length; i++){
            if (this.memberList[i].id === id){
                this.memberList[i].name = name;
                this.memberList[i].amount = amount;
            }
        }
    }
    async updateChecked(id:string,checked:boolean){
        for (let i=0; i < this.memberList.length; i++){
            if (this.memberList[i].id === id){
                this.memberList[i].checked = checked;
            }
        }
    }
    async addEmployee(name:any,salary:any){
        this.memberList.unshift({name:name, checked: true,amount:salary,id:tools.random(20)});
    }
    async delete(id:string){
        try{
            for (let i=0; i < this.memberList.length; i++){
                if (this.memberList[i]?.id === id){
                    delete this.memberList[i];
                }
            }
        }catch{

        }finally{
            console.log(id)
        }
    }
}

export const db = new Employee();