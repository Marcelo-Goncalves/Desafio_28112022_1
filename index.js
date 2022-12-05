const departments = require('./departments');
let deptName = 'Financeiro';
let increase = 50;
let deptFilter = departments.filter(department => department.department == deptName);
let deptIncCalcSalary = deptFilter.map(department => department.salary * (1 + increase / 100));
let deptBudgetSalary = deptFilter.reduce((total, department) => total + department.salary, 0);
let deptFcstSalary = deptIncCalcSalary.reduce((acc, salary) => acc + salary, 0);

console.clear();
console.log("Despesas com Salários");
console.log("================================");
console.log(`Área: ${deptName}`);
console.log(`Gasto Atual: ${deptBudgetSalary.toLocaleString()}`);
console.log(`Gasto Futuro: ${deptFcstSalary.toLocaleString()}`);
console.log("Incremento:", (deptFcstSalary - deptBudgetSalary).toLocaleString());


