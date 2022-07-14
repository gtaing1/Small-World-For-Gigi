import { UserModel } from "@project/models/userModel";
import { FC, useState } from "react";
import { State } from "../../models/state";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserCreationWizardView } from "./user-creation-wizard-view";

interface UserCreationWizardProps {
    onSubmit:(data: UserModel) => Promise<Response>
    states: State[]; 
    jobFunctions: string[];
    defaultValues: {};  
}

const UserFormSchema = yup.object().shape({
    firstName: yup.string().min(2).required(), 
    lastName: yup.string().min(2).required(), 
    emailAddress: yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: yup.string().max(255).required('Password is required'),
    jobTitle: yup.string().min(3).required(), 
    company: yup.string().min(5).required(), 
    jobFunction: yup.string(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.number().min(5).required(),
})

export const UserCreationWizardLogic:FC<UserCreationWizardProps> = (props) => {
    const {onSubmit,  states, jobFunctions, defaultValues} = props; 

    const userForm = useForm<UserModel>({
        mode: "onSubmit", 
        defaultValues,
        resolver: yupResolver(UserFormSchema)
    }); 


    const handleSubmit = async(data: UserModel) => {
        await onSubmit(data)
            .then(() => userForm.reset())
            .catch((error) => console.error(error)); 
    };

    return (
            <UserCreationWizardView jobFunctions={jobFunctions} states={states} form={userForm} onSubmit={handleSubmit} />
        )
}