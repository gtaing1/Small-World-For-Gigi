import {rest} from 'msw'; 
import { getApiUrl } from './api';

const mockFormData = { 
    "jobFunctions": 
[
    "Academic librarian",
    "Accountant",
    "Accounting technician"
],
"states": [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    }
]};


export const handlers = [

    rest.get(getApiUrl(), (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockFormData))
    }),
    
    rest.post(getApiUrl(), (req,res,ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
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
            })
        )
    })

]

export const formHandlerException = rest.get(
    getApiUrl(), 
    async (req, res,ctx) => 
        res(ctx.status(500), ctx.json({message: "Deliberately broken request"}))
)

