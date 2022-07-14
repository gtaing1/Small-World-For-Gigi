import { FC, useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 
import { UserCreationWizardLogic } from "./components/form/user-creation-wizard-logic";
import { State } from "./models/state";
import { getApiUrl } from "./mock-apis/api";
import agent from "./api/agent";
import { toast, ToastContainer } from "react-toastify";
import { UserModel } from "./models/userModel";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

    const [loading, setLoading] = useState(true); 
    
    const [states, setStates] = useState<State[]>([]);
    
    const [jobFunctions, setJobFunctions] = useState<string[]>([]);

    const initialValues = {
        firstName: "", 
        lastName:"", 
        emailAddress:"", 
        password:"", 
        jobTitle:"", 
        company:"", 
        jobFunction:"", 
        city:"", 
        state:"",
        zipCode:""
    }
    
    
    useEffect(() => {

        agent.FormInfo.list()
            .then((data) => {
                setStates(data.states); 
                setJobFunctions(data.jobFunctions)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    
    }, [])

    const handleSubmit = async(data: UserModel) => {
        
        return agent.FormInfo.submitForm(data)
                .then((response) => response.value)
                .catch((error) => console.error(error))
                .finally(() => toast.success("Form submitted"))
    }

    return (
        <> 
        <ToastContainer position='bottom-right' hideProgressBar />
        <div className="main-container">
            <div className="right-sub">
                <div className="pattern-sub">
                <span></span>
                <span></span>
                <span></span>
                </div>

            </div>
            <div className="left-sub">
                <UserCreationWizardLogic defaultValues={initialValues}  states={states} jobFunctions={jobFunctions} onSubmit={handleSubmit}  />
            </div>
        </div>
        </>
        
    )
}