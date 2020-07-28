import { calculateEmployeeSalary } from "./calculateEmployeeSalary";
import { validateEmptyProperties } from "./validateEmptyProperties";

const myEmployeeSalary = calculateEmployeeSalary({
    employeeName: "Astrodev",
    baseSalary: 20000,
    benefits: [200, 1000],
    extraHours: 800
}, validateEmptyProperties);

console.log(myEmployeeSalary);