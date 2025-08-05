const alphaTech = [
  { name: 'Alice', age: 23, department: 'Engineering' },
  { name: 'Bob', age: 19, department: 'Design' }
];

const betaSoft = [
  { name: 'Charlie', age: 28, department: 'Engineering' },
  { name: 'David', age: 17, department: 'Support' }
];

const gammaDev = [
  { name: 'Eve', age: 25, department: 'Marketing' },
  { name: 'Faythe', age: 18, department: 'Engineering' },
  { name: 'Grace', age: 20, department: 'Engineering' }
];

function addCompany(company,companyName) { 
  return company.map((person) => person["company"] = companyName)
}

addCompany(alphaTech, "alphaTech")
addCompany(betaSoft, "betaSoft")
addCompany(gammaDev, "gammaDev")

const allEmployees = alphaTech.concat(betaSoft, gammaDev);

const result = allEmployees.filter((employee) => {
  return employee.department === 'Engineering' && employee.age >= 20;
}).map((employee) => {
  return {
    name: employee.name,
    company: employee.company
  };
});

console.log(result);
// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]


