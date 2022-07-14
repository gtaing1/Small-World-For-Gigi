import { State } from "@project/models/state";
import { UserModel } from "@project/models/userModel";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

interface UserCreationWizardViewProps {
    form: UseFormReturn<UserModel>;
    onSubmit: (data: UserModel) => any;
    jobFunctions: string[], 
    states: State[],  

}

export const UserCreationWizardView:FC<UserCreationWizardViewProps> = (props) => {
    const {form, onSubmit, jobFunctions, states} =  props; 

    const {formState, register, handleSubmit} = form;
    const {errors, isSubmitting} = formState; 


    return (
        <div className="row">
        <div className="shadow p-4 rounded bg-white col-12 col-lg-8 col-md-8 col-xs-6 m-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3 needs-validation user-wizard-form" noValidate>
        <h3 className="form-title"> User Registration Form</h3>
        <div className="form-content mb-3">
            <div className="row g-3 mt-4">
                <div className="col mt-4 mt-sm-0">

                    <input type="text" className="form-control" id="first-name" placeholder="First Name" {...register("firstName")} ></input>
                </div>

                <div className="col mt-4 mt-sm-0">
                    <input  type="text" className="form-control" id="last-name" placeholder="Last Name" {...register("lastName")} ></input>
                </div>
            </div>

            <div className="row g-3 mt-4">
                <div className="col mt-4 mt-sm-0">
                    <input  type="email" className="form-control" id="email-address" placeholder="Email Address" {...register("emailAddress")} ></input>
                </div>

                <div className="col mt-4 mt-sm-0">
                    <input  type="password" className="form-control" id="password"  placeholder="Password" {...register("password")} ></input>
                </div>
            </div>

            <div className="row g-3 mt-4">
                <div className="col mt-4 mt-sm-0">
                        <input  type="text" className="form-control" id="job-title" placeholder="Job Title" {...register("jobTitle")} ></input>
                    </div>

                    <div className="col mt-4 mt-sm-0">
                        <input  type="text" className="form-control" id="company" placeholder="Company" {...register('company')} ></input>
                    </div>
            </div>

            <div className="g-3 mt-4">
            <div className="col">
                <select  id="job-function" className="form-select"  aria-label=".form-select" {...register('jobFunction')}>
                <option value="" disabled selected>Choose Job Function</option>
                    {
                        jobFunctions.map((item, index) => {
                            return (
                                <option key={index}> {item} </option>
                            )
                        })
                    }
                </select>
                </div>
            </div>

            <div className="row g-3 mt-4">
                <div className="col-md-6">
                <input  type="text" className="form-control"  id="city" placeholder="City" {...register('city')} ></input>
                </div>

            <div className="col-md-4">
                <select id="state" data-testid="state"  className="form-select" aria-label=".form-select" {...register("state")}>
                <option value="" disabled selected>Choose State</option>
                {
                states.map((item, index) => {
                    return (
                        <option data-testid="select-option" key={item.abbreviation} value={item.abbreviation}>{item.name}</option>
                    )
                })
                }
                </select>
            </div>

            <div className="col-md-2">
                <input type="text" className="form-control" id="zip-code" placeholder="Zip" {...register("zipCode")}></input>
            </div>
            <div className="col">
                <button disabled={isSubmitting} className="btn btn-success" type="submit"> Submit Form</button>
              
            </div>
            <div className="col">
            <button className="btn btn-warning reset-button" onClick={() => form.reset()}>Reset</button>
            </div>
            </div>
        </div>


     </form>
     </div>
        </div>
    ); 
}