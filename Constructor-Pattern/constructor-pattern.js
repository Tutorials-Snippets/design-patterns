// This is a constructor pattern, I wrote for practice on 30 May 2020
// This is from YouTube channel DevSage 
// [ URL: https://www.youtube.com/watch?v=kuirGzhGhyw ]

function Developer(name) {
    this.name = name
    this.type = "Developer"
}

function Tester(name) {
    this.name = name
    this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch(type) {
            case 1:
                return new Developer(name)
            case 2:
                return new Tester(name)
        }
    }
}

function say() {
    console.log("Hi, I am " + this.name + " and I am a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Ashique", 1))
employees.push(employeeFactory.create("Pratik", 1))
employees.push(employeeFactory.create("Robert", 2))
employees.push(employeeFactory.create("Rajesh", 1))
employees.push(employeeFactory.create("Rohan", 2))

employees.forEach( emp => {
    say.call(emp)
})