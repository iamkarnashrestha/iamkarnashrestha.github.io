'use strict'
window.onload=()=>{
    document.getElementById("courseRegistrationForm").addEventListener('submit',(event)=>{
        event.preventDefault();
    
    const txtFirstName=document.getElementById("firstName").value;
    const txtMiddlename=document.getElementById("middleName").value;
    const txtLastName=document.getElementById("lastName").value;
    const txtAddress=document.getElementById("address").value;
    const txtpersonalBio=document.getElementById("personalBio").value;
    const leveofStudy=document.querySelector('input[name="radLevel"]:checked').value;
    const txtapplicantID=document.getElementById("applicantID").value;
    const course=document.getElementById("course").value;
   
    const output=`
            Level of Study: ${leveofStudy}
            Applicant's FullName: ${txtFirstName} ${txtMiddlename} ${txtLastName}
            Address: ${txtAddress}
            Applicant ID Number: ${txtapplicantID}
            Course: ${course}
            Bio: ${txtpersonalBio}
            `;
            alert(output);

            //resetting the form inputs
            document.getElementById("firstName").value="";
            document.getElementById("middleName").value="";
            document.getElementById("lastName").value="";
            document.getElementById("address").value="";
            document.getElementById("personalBio").value="";
            document.getElementsByName("radLevel")[0].checked=false;
            document.getElementsByName("radLevel")[1].checked=false;
            document.getElementsByName("radLevel")[2].checked=false;
            document.getElementById("applicantID").value="";
            document.getElementById("course").value="";
    });
  
    
    


    
    };