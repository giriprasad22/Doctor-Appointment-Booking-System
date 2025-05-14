function selectRole(role) {
    alert(`You selected ${role}`);
    if (role === 'Patient') {
        window.location.href = "patient.html"; 
    } else if (role === 'Doctor') {
        window.location.href = "doctor.html";
    }
}

function adminLogin() {
    window.location.href = "admin-login.html"; 
}


function selectRole(role) {
    if (role === 'Patient') {
        window.location.href = "patient-login.html"; 
    } else if (role === 'Doctor') {
        window.location.href = "doctor-login.html"; 
    }
}

function adminLogin() {
    window.location.href = "admin-login.html"; 
}

function registerUser(event, role) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }
    const userKey = role === 'Patient' ? 'patients' : 'doctors';
    let users = JSON.parse(localStorage.getItem(userKey)) || [];

    users.push({ name, email, password });
    localStorage.setItem(userKey, JSON.stringify(users));

    alert(`${role} registered successfully!`);
    window.location.href = `${role.toLowerCase()}-login.html`;
    return true;
}

function loginUser(event, role) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userKey = role === 'Patient' ? 'patients' : 'doctors';
    let users = JSON.parse(localStorage.getItem(userKey)) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome, ${user.name}!`);
    } else {
        alert("Invalid credentials, please try again.");
    }
}
function loginAdmin(event) {
    event.preventDefault();
    
    const adminUsername = document.getElementById('adminUsername').value;
    const adminPassword = document.getElementById('adminPassword').value;
    
    if (adminUsername === 'chidvi' && adminPassword === 'chidvi12') {
        alert("Admin login successful!");
        window.location.href = "index.html"; 
    } else {
        alert("Invalid admin credentials. Please try again.");
    }
}
let doctors = JSON.parse(localStorage.getItem('doctors')) || [];
let patients = JSON.parse(localStorage.getItem('patients')) || [];
function showAddDoctorForm() {
    hideAllSections();
    document.getElementById('addDoctorForm').classList.remove('hidden');
}

function showRemoveDoctorForm() {
    hideAllSections();
    document.getElementById('removeDoctorForm').classList.remove('hidden');
}

function showDoctorList() {
    hideAllSections();
    document.getElementById('doctorList').classList.remove('hidden');
    populateDoctorList();
}

function showPatientList() {
    hideAllSections();
    document.getElementById('patientList').classList.remove('hidden');
    populatePatientList();
}

function showPaymentForm() {
    hideAllSections();
    document.getElementById('paymentForm').classList.remove('hidden');
}

function hideAllSections() {
    document.querySelectorAll('.form-section, .list-section').forEach(section => section.classList.add('hidden'));
}
function addDoctor(event) {
    event.preventDefault();
    const name = document.getElementById('doctorName').value;
    const phone = document.getElementById('doctorPhone').value;
    const specialization = document.getElementById('doctorSpecialization').value;
    const Id = document.getElementById('doctorid').value;
    const expe = document.getElementById('doctorexperience').value;
    const quali = document.getElementById('doctorqualifi').value;
    doctors.push({ name, phone, specialization,Id,expe,quali });
    localStorage.setItem('doctors', JSON.stringify(doctors));
    event.target.reset();

    alert('Doctor added successfully!');
    document.getElementById('addDoctorForm').reset();
    showDoctorList();
}
function removeDoctor(event) {
    event.preventDefault();
    const name = document.getElementById('removeDoctorName').value;

    doctors = doctors.filter(doctor => doctor.name.toLowerCase() !== name.toLowerCase());
    localStorage.setItem('doctors', JSON.stringify(doctors));

    alert('Doctor removed successfully!');
    showDoctorList();
}
function populateDoctorList() {
    const doctorListItems = document.getElementById('doctorListItems');
    doctorListItems.innerHTML = '';

    if (doctors.length === 0) {
        doctorListItems.innerHTML = '<li>No doctors available</li>';
    } else {
        doctors.forEach(doctor => {
            const li = document.createElement('li');
            li.textContent = `Dr. ${doctor.name}, Doctor Id: ${doctor.Id}, Specialization: ${doctor.specialization}, Phone: ${doctor.phone}, Experience: ${doctor.expe},Qualifications: ${doctor.quali}`;
            doctorListItems.appendChild(li);
        });
    }
}
function addPayment(event) {
    event.preventDefault();
    const name = document.getElementById('patientName').value;
    const amount = document.getElementById('paymentAmount').value;

    const patient = patients.find(patient => patient.name.toLowerCase() === name.toLowerCase());
    if (patient) {
        patient.payment = amount;
    } else {
        patients.push({ name, payment: amount });
    }

    localStorage.setItem('patients', JSON.stringify(patients));

    alert('Payment added successfully!');
    document.getElementById('paymentForm').reset();
    showPatientList();
}
function populatePatientList() {
    const patientListItems = document.getElementById('patientListItems');
    patientListItems.innerHTML = '';

    if (patients.length === 0) {
        patientListItems.innerHTML = '<li>No patients available</li>';
    } else {
        patients.forEach(patient => {
            const li = document.createElement('li');
            li.textContent = `${patient.name}, Payment: $${patient.payment || 'Pending'}`;
            patientListItems.appendChild(li);
        });
    }
}
function loginAdmin(event) {
    event.preventDefault();
    
    const adminUsername = document.getElementById('adminUsername').value;
    const adminPassword = document.getElementById('adminPassword').value;
    if (adminUsername === 'chidvi' && adminPassword === 'chidvi12') {
        alert("Admin login successful!");
        window.location.href = "admin-home.html"; 
    } else {
        alert("Invalid admin credentials. Please try again.");
    }
}
function loginUser(event, userType) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (userType === 'Patient' && email === 'patient@example.com' && password === 'patientpass') {
        alert("Patient login successful!");
        window.location.href = "patient-home.html"; 
    } else if (userType === 'Doctor' && email === 'doctor@example.com' && password === 'doctorpass') {
        alert("Doctor login successful!");
        window.location.href = "doctor-home.html";  
    } else {
        alert("Invalid credentials. Please try again.");
    }
}
function sendPasswordReset() {
    const email = "nemalichidvilasini@gmail.com";
    alert(`A password reset link has been sent to ${email}.`);
   
}

