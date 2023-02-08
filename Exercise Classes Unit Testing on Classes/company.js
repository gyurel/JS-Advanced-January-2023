class Company{
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        if(typeof name != 'string' || typeof salary != 'number' || 
        typeof position != 'string' || typeof department != 'string' || salary < 0){
            throw new Error("Invalid input!");
        }else{
            if(!this.departments[department]){
                this.departments[department] = {};
            }

            if(!this.departments[department][name]){
                this.departments[department][name] = {};
            }

            this.departments[department][name]['salary'] = salary;
            this.departments[department][name]['position'] = position;
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        let bestDepartment = '';
        let bestAverage = 0;

        for (const [department, departmentObj] of Object.entries(this.departments)) {
            let currentSum = 0;
            for (const [employee, employeeObj] of Object.entries(departmentObj)) {
                currentSum += employeeObj.salary;
            }

            let currentAverage = currentSum / Object.keys(departmentObj).length;

            if(currentAverage > bestAverage){
                bestAverage = currentAverage;
                bestDepartment = department;
            }
        }

        let resultStr = `Best Department is: ${bestDepartment}\nAverage salary: ${bestAverage.toFixed(2)}`;

        let sortedBestDepartment = Object.entries(this.departments[bestDepartment])
        .sort(function(a, b){
            if(a[1].salary == b[1].salary){
                return a[0].localeCompare(b[0]);
            }else{
                return b[1].salary - a[1].salary;
            }
        });
        
        sortedBestDepartment.forEach((worker) => {
            let currentEmployeeInfo = `\n${worker[0]} ${worker[1].salary} ${worker[1].position}`;
            resultStr += currentEmployeeInfo;
        });
        return resultStr;
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
