import { getApiUrl } from "./mock-apis/api"
import { server } from "./mock-apis/server"
import {rest} from 'msw'; 
import { fireEvent, render, findByTestId, screen, waitFor, getByTestId } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";
import { formHandlerException, handlers } from "./mock-apis/handlers";
import { useState } from "react";
import axios from "axios";


describe('Can render data', () => {

    jest.mock('axios');
    const mockedAxios = jest.mocked(axios);
    const mockGet = jest.spyOn(axios,'get'); 

    test('should recieve data GET successfully', async () => {
        render(<App/>);
        await waitFor(() => expect(mockGet).toHaveBeenCalled())
    })

    test('should display React Toastify error when GET fails', async () => {
        server.use(formHandlerException); 
        render(<App/>); 
        expect(await screen.findByText('Failed to fetch form data')).toBeInTheDocument(); 
    }); 

    
})

describe('Form Display', () => {

    // jest.mock('axios'); 
    // //const mockedAxios = jest.mocked(axios);
    // const mockGet = jest.spyOn(axios,'get'); 
    test('Form State Select Dropdown Has 3 options', async () => {

    render(<App/>);
    const app = render(<App/>)
   
    const state_select = app.container.querySelector('#state') as HTMLSelectElement; 
    
    //await waitFor(() => expect(mockGet).toHaveBeenCalled());
    await waitFor(() => expect(state_select.options.length).toBe(3))
    
    }); 

    test('Form Job Functions Select Dropdown Has 4 options', async () => {

        render(<App/>);
        const app = render(<App/>)
       
        const job_select = app.container.querySelector('#job-function') as HTMLSelectElement; 
        
        await waitFor(() => expect(job_select.options.length).toBe(4))
        
        })
})

describe('Form Submit', () => {
    jest.mock('axios');
    const mockedAxios = jest.mocked(axios);
    const mockPost = jest.spyOn(axios,'post'); 
    test("can submit form", async () => {

        const handleSubmit = jest.fn(); 
    const values = {
        firstName: "Cain", 
        lastName:"Larson", 
        emailAddress:"sukazybo@mailinator.com", 
        password:"1234567", 
        jobTitle:"Atque fugit vel lor", 
        company:"Carey and Rush Trading", 
        jobFunction:"Academic librarian", 
        city:"Eos at cum eu est ex", 
        state:"Alabama",
        zipCode:69758
    };

    const app =  render(<App/>);

    const firstName = app.container.querySelector('#first-name') as HTMLInputElement; 
    const lastName = app.container.querySelector('#last-name') as HTMLInputElement; 
    const emailAddress = app.container.querySelector("#email-address") as HTMLInputElement; 
    const password = app.container.querySelector("#password") as HTMLInputElement; 
    const jobTitle = app.container.querySelector('#job-title') as HTMLInputElement; 
    const company = app.container.querySelector('#company') as HTMLInputElement; 
    const jobFunction = app.container.querySelector("#job-function") as HTMLSelectElement; 
    const city = app.container.querySelector("#city") as HTMLInputElement; 
    const state = app.container.querySelector("#state") as HTMLSelectElement; 
    const zipCode = app.container.querySelector("#zip-code") as HTMLInputElement; 


    fireEvent.change(firstName, {
        target: {value: values.firstName}
    });
    fireEvent.change(lastName, {
        target: {value: values.lastName}
    })
    fireEvent.change(emailAddress, {
        target: {value: values.emailAddress}
    })
    fireEvent.change(password, {   
        target: {value: values.password}
    })
    fireEvent.change(jobTitle, {
        target: {value: values.jobTitle}
    })
    fireEvent.change(company, {
        target: {value: values.company}
    })
    fireEvent.change(jobFunction, {
        target: {value: values.jobFunction}
    })
    fireEvent.change(city, {
        target: {value: values.city}
    })
    fireEvent.change(state, {
        target: {value: values.state}
    })
    fireEvent.change(zipCode, {
        target: {value: values.zipCode}
    })

    const form = app.container.querySelector('form') as HTMLFormElement; 

    form.onsubmit = handleSubmit; 
    fireEvent.submit(form); 

    await waitFor(() =>expect(handleSubmit).toHaveBeenCalledTimes(1))

    })
})



