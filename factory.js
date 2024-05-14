class EmployeeFactory {
  emp = null;

  getEmployee(type) {
    switch (type) {
      case "fulltime":
        this.emp = new Fulltime();
        break;
      case "parttime":
        this.emp = new Parttime();
        break;
      case "freelancer":
        this.emp = new Freelancer();
        break;
      case "contractor":
        this.emp = new Contractor();
        break;
    }
    return this.emp;
  }
}
class Fulltime {
  salary = 10000;
}
class Parttime {
  salary = 5000;
}
class Freelancer {
  salary = 3000;
}
class Contractor {
  salary = 7000;
}

const ef = new EmployeeFactory();
const ft = ef.getEmployee("fulltime");
const pt = ef.getEmployee("parttime");
const fl = ef.getEmployee("freelancer");
const c = ef.getEmployee("contractor");
console.log(ft, pt, fl, c);
