<!-- JS Code -->

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
  
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const Number = document.getElementById('Mobile Number').value;
      const College = document.getElementById('College Name').value;
      const password = document.getElementById('Password').value;
      
  
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Mobile number:', Number);
      console.log('College Name :', name);
      console.log('Password:', password);
  
      
    });
  });
  
