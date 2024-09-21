var http = require("http");
//TODO - Use Employee Module here
const {employees} = require("./Employee.js");

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            let html = '<h1>Welcome to Lab Exercise 03</h3>';
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            var json = JSON.stringify(employees);
            res.writeHead(200, {'Content-Type': 'text/json'});
            res.end(json);
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array

            var new_employees = employees.map(employee => {
                return {
                    firstName: employee.firstName,
                    lastName: employee.lastName
                };
            });

            new_employees.sort(function (a, b) {
                var nameA=a.firstName.toLowerCase(), nameB=b.firstName.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })

            res.writeHead(200, {'Content-Type': 'text/json'});
            res.end(JSON.stringify(new_employees));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format
            const total_salary = employees.reduce(getSum, 0);

            function getSum(total, employee) {
                return total + employee.Salary;
            }

            res.writeHead(200, {'Content-Type': 'text/json'});
            res.end(JSON.stringify(total_salary));
        }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})