"use strict";

window.addEventListener("DOMContentLoaded", () => {
    let listOfPatient = [];
    const formNewPatient = document.querySelector("#patientForm");
    formNewPatient.addEventListener("submit", (event) => {
        event.preventDefault();
        const txtPatientId = document.querySelector("#patientIdNumber");
        const txtFirstName = document.querySelector("#firstName");
        const txtLastName = document.querySelector("#lastName");
        const txtMiddleName = document.querySelector("#middleInitials");
        const txtDateOfBirth = document.querySelector("#dateOfBirth");
        const txtDepartment = document.querySelector("#ddlDepartment");
        const radioInOut = document.querySelector('input[name="radioIsOutPatient"]:checked');


        const patientIdValue = txtPatientId.value;
        const firstNameValue = txtFirstName.value;
        const middleNameValue = txtMiddleName.value;
        const lastNameValue = txtLastName.value;
        const dateOfBirthValue = txtDateOfBirth.value;
        const departmentValue = txtDepartment.value;
        const radioInOutValue = radioInOut.value;


       
        listOfPatient.push({
            'patientIdValue': patientIdValue,
            'firstNameValue': firstNameValue,
            'middleNameValue': middleNameValue,
            'lastNameValue': lastNameValue,
            'dateOfBirthValue': dateOfBirthValue,
            'departmentValue': departmentValue,
            'radioInOutValue': radioInOutValue
        });
        loadListOfPatient();

        txtPatientId.value="";
        txtFirstName.value="";
        txtMiddleName.value="";
        txtLastName.value="";
        txtDateOfBirth.value=""
        txtDepartment.value="";
        radioInOut.checked=false;
        chkElderlyPatients.checked=false;
        chkShowOutPatients.checked=false;
        
    });

    const addNewPatientDataRow = function (patientIdValue, firstNameValue, middleNameValue, lastNameValue, dateOfBirthValue, departmentValue, radioInOutValue) {
        const tblPatients = document.querySelector("#tbodyPatientsList");
        const newRow = tblPatients.insertRow(-1);

        const newCellPatientId = newRow.insertCell(0);
        const txtPatientId = document.createTextNode(`${patientIdValue}`);
        newCellPatientId.appendChild(txtPatientId);

        const newCellFirstName = newRow.insertCell(1);
        const txtFirstName = document.createTextNode(`${firstNameValue}`);
        newCellFirstName.appendChild(txtFirstName);

        const newCellMiddleName = newRow.insertCell(2);
        const txtMiddleName = document.createTextNode(`${middleNameValue}`);
        newCellMiddleName.appendChild(txtMiddleName);

        const newCellLastName = newRow.insertCell(3);
        const txtLastName = document.createTextNode(`${lastNameValue}`);
        newCellLastName.appendChild(txtLastName);

        const newCellDob = newRow.insertCell(4);
        const txtDateOfBirth = document.createTextNode(`${dateOfBirthValue}`);
        newCellDob.appendChild(txtDateOfBirth);

        const newCellDept = newRow.insertCell(5);
        const txtDepartment = document.createTextNode(`${departmentValue}`);
        newCellDept.appendChild(txtDepartment);

        const newCellOutPatient = newRow.insertCell(6);
        const radioInOut = document.createTextNode(`${radioInOutValue}`);
        newCellOutPatient.appendChild(radioInOut);

    }


    const chkElderlyPatients = document.querySelector("#chkElderlyPatients");
    chkElderlyPatients.addEventListener("click", () => {
        if (chkElderlyPatients.checked == false && chkShowOutPatients.checked == false)
            loadListOfPatient();
        else {
            const elderlyPatients = listOfPatient.filter(p => p.radioInOutValue === 'No');
            document.querySelector("#tbodyPatientsList").innerHTML = "";
            elderlyPatients.forEach(element => {
                addNewPatientDataRow(element.patientIdValue, element.firstNameValue, element.middleNameValue, element.lastNameValue, element.dateOfBirthValue, element.departmentValue, element.radioInOutValue);
            });
            document.querySelector("#chkShowOutPatients").checked = false;
        }
    });


    const chkShowOutPatients = document.querySelector("#chkShowOutPatients");
    chkShowOutPatients.addEventListener("click", () => {
        if (chkElderlyPatients.checked == false && chkShowOutPatients.checked == false)
            loadListOfPatient();
        else {
            const showOutPatients = listOfPatient.filter(p => p.radioInOutValue === 'Yes');
            document.querySelector("#tbodyPatientsList").innerHTML = "";
            showOutPatients.forEach(element => {
                addNewPatientDataRow(element.patientIdValue, element.firstNameValue, element.middleNameValue, element.lastNameValue, element.dateOfBirthValue, element.departmentValue, element.radioInOutValue);
            });
            document.querySelector("#chkElderlyPatients").checked = false;
        }
    });

    const loadListOfPatient = function () {
        document.querySelector("#tbodyPatientsList").innerHTML = "";
        listOfPatient.forEach(element => {
            addNewPatientDataRow(element.patientIdValue, element.firstNameValue, element.middleNameValue, element.lastNameValue, element.dateOfBirthValue, element.departmentValue, element.radioInOutValue);
        });
    }





});