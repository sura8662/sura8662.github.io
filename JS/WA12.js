async function populate() {
    const requestURL = "../JSON/WA12.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const employees = await response.json();

    populateEMP(employees);
}

function populateEMP(obj) {
    const companyName = obj.companyName;
    const website = obj.website;
    const employees = obj.employees;

    // Problem 1
    console.log("Problem 1")
    var name = "";
    var salary = 0;
    for (const emp of employees) {
        name += emp.firstName + ", ";
        salary += emp.salary;
        const output1 = "First Name: " + emp.firstName + "\n" +
                        "Department: " + emp.department + "\n" +
                        "Designation: " + emp.designation + "\n" +
                        "Salary: $" + emp.salary + "\n" +
                        "Raise Eligible: " + emp.raiseEligible
        console.log(output1)
    }

    // Problem 2
    console.log("Problem 2")
    const output2 = "Company Name: " + companyName + "\n" +
                    "Website: " + website + "\n" +
                    "Employees: " + name.substring(0, name.length - 2)
    console.log(output2)

    // Problem 3
    console.log("Problem 3")
    console.log("Anna's output is above.")

    // Problem 4
    console.log("Problem 4")
    console.log("$" + salary)
}

populate()