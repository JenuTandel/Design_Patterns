class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

class UserRepository {
  saveToDatabase(user) {
    console.log(user);
  }
}

class EmailService {
  sendEmail(user) {
    console.log(user);
  }
}

const user = new User("Jinal", "jinal.tandel@1rivet.com");
const userRepository = new UserRepository();
userRepository.saveToDatabase(user);
const emailService = new EmailService();
emailService.sendEmail(user.getEmail());
