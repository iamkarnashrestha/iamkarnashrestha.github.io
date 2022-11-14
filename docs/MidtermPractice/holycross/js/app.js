'use strict'
window.onload=()=>{
document.getElementById("patientForm").addEventListener('submit',(event)=>{
    event.preventDefault();
const txtPatientId=document.getElementById("patientId").value;
const txtFirstName=document.getElementById("firstName").value;
const txtMiddlename=document.getElementById("middleName").value;
const txtLastName=document.getElementById("lastName").value;
const txtDob=document.getElementById("dob").value;
const txtDept=document.getElementById("department").value;
const outPatient=document.querySelector('input[name="radioOut"]:checked').value;
const checkedValue=(outPatient=="on"?"Yes":"No");
console.log(1);
const output=`
        Patient ID: ${txtPatientId}
        First Name: ${txtFirstName}
        Middle Initial(s): ${txtMiddlename}
        Last Name" ${txtLastName}
        Date of Birth: ${txtDob}
        Department: ${txtDept}
        Is Out-Patient?: ${checkedValue}
        `;
        alert(output);


});
};