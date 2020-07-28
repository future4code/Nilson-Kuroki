import {CalculateEmployeeSalaryInput, calculateEmployeeSalary} from "../src/calculateEmployeeSalary";

describe("Testando o calculateEmployeeSalary", ()=>{


    test("Testando input incompleto, faltando uma informação", ()=>{

        const validatorMock = jest.fn(()=>{
            return {
                isValid: false,
                errors: []
                
            }   
        });

        const input: CalculateEmployeeSalaryInput = {
            employeeName: "",
            baseSalary: 20000,
            benefits: [],
            extraHours: 200
        }
        try{
            calculateEmployeeSalary(input, validatorMock);
        }catch(error){
            expect(error.message).toEqual("Missing Properties");
        }

    });

    test("Testando input incompleto, benefícios negativos", ()=>{

        const validatorMock = jest.fn(()=>{
            return {
                isValid: true,
                errors: []   
            }   
        });

        const input: CalculateEmployeeSalaryInput = {
            employeeName: "",
            baseSalary: 20000,
            benefits: [230, -300],
            extraHours: 200
        }
        try{
            calculateEmployeeSalary(input, validatorMock);
        }catch(error){
            expect(error.message).toEqual("Invalid Benefit");
        }

    });

    test("Testando input incompleto, benefícios negativos", ()=>{

        const validatorMock = jest.fn(()=>{
            return {
                isValid: true,
                errors: []   
            }   
        });

        const input: CalculateEmployeeSalaryInput = {
            employeeName: "Astrodev",
            baseSalary: 20000,
            benefits: [400, 600],
            extraHours: 1000
        }

        try{
           const result = calculateEmployeeSalary(input, validatorMock);
            expect(result).toBe(22000);
        }catch(error){
            expect(error.message).toEqual("Invalid Benefit");
        }

    });


});