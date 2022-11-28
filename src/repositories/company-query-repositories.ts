import {CompanyModelClass} from "../models/schemas/company-schema";
import {CompanyAcountDBType} from "../types/company-type";



export class CompanyQueryRepositories {
    async getCompanies(): Promise<CompanyAcountDBType[]> {
        const companies = await CompanyModelClass.find()
        console.log(companies)
        return companies
    }
}


