function validate() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;
    const newsletter = document.getElementById('newsletter').checked;
  
    const errorDiv = document.getElementById('error');
    const successDiv = document.getElementById('success');
  
    errorDiv.textContent = '';
    successDiv.textContent = '';
  
    if (!username || !password || !age || !gender || !country) {
      errorDiv.textContent = 'Please fill out all required fields.';
      return;
    }
  
    successDiv.textContent = 'Form submitted successfully!';
  }
  