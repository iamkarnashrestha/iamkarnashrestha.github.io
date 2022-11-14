'use-strict'
window.onload=function(){
    // document.forms[0].onsubmit=(event)=>{

    // }
   document.getElementById("censusForm").addEventListener("submit",function(event){
        event.preventDefault();

        const txtFullname=document.getElementById("txtFullname").value;
        const txtCitizenNo=document.getElementById("txtCitizenNo").value;
        const txtSsn=document.getElementById("txtSsn").value;
        const txtState=document.getElementById("txtState").value;
        const checkSeniorCitizen=document.querySelector('input[name="checkSeniorCitizen"]:checked').value;

        let checkedValue=(checkSeniorCitizen=="on"?"Yes":"No");

        const output=`
        Citizen ID: ${txtCitizenNo}
        SSN: ${txtSsn}
        FullName: ${txtFullname}
        State" ${txtState}
        Senior: ${checkedValue}
        `;
        alert(output);


   });
};