// Que1
function calculate(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default:
            return 'Invalid operation';
    }
}


const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (add, subtract, multiply, divide):");

const result = calculate(num1, num2, operation);
console.log(`The result is: ${result}`);



// Que2
var objectname=new Object(); 
var emp=new Object();
emp.id=101;
emp.name="Ravi";
emp.salary=50000;
document.write(emp.id+" "+emp.name+" "+emp.salary); 


// Que3 
function emp1(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;}
    e=new emp1(103,"Vimal Jaiswal",30000);
    document.write(e.id+" "+e.name+" "+e.salary); 

    // Que4

    function emp2(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.changeSalary=changeSalary; }
        function changeSalary (otherSalary){
            this.salary=otherSalary; 
            e=new emp2(103,"Sonoo Jaiswal",30000);
            document.write(e.id+" "+e.name+" "+e.salary);
            e.changeSalary(45000);
            document.write("<br>"+e.id+" "+e.name+" "+e.salary);
        } 

        // Que6 

        //Que6 
    
      