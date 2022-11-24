"use strict";

import { getAllBooks } from "./modules/services/bookService.js";
document.addEventListener("DOMContentLoaded", async() => {
   

  
    const displayError=(error)=>{
        const tbodyOutput=document.querySelector("#tbodyBooksList");
        const trErrorMsg=`
        <tr>
            <td colspan="6">
            ${error}
            </td>
        </tr>
        `;
        tbodyOutput.innerHTML=trErrorMsg;
    }

    const displayBooks=(books)=>{
        const tbodyOutput=document.querySelector("#tbodyBooksList");
        let trRow="";
        let counter=0;
        books.forEach(book => {
            trRow+=`
        <tr>
            <td>
            ${++counter}
            </td>
            <td>${book.isbn}</td>
            <td>${book.title}</td>
            <td>${book.overdueFee}</td>
            <td>${book.publisher}</td>
            <td>${book.datePublished}</td>
        </tr>
        `;
        });
        
        tbodyOutput.innerHTML=trRow;
    }

//execure get book and display books
    displayBooks( await getAllBooks());
   




//Listing the list of books using ajax an DOM manipulation

// let counter=0;
//     const addNewBookDataRow = function (isbn,title, overdueFee, publisher, datePublished) {
//         const tblBooks = document.querySelector("#tbodyBooksList");
//         const newRow = tblBooks.insertRow(-1);

//         const newCellBookId = newRow.insertCell(0);
//         const txtBookId = document.createTextNode(`${++counter}`);
//         newCellBookId.appendChild(txtBookId);

//         const newCellFirstName = newRow.insertCell(1);
//         const txtFirstName = document.createTextNode(`${isbn}`);
//         newCellFirstName.appendChild(txtFirstName);

//         const newCellTitle = newRow.insertCell(2);
//         const txtTitle = document.createTextNode(`${title}`);
//         newCellTitle.appendChild(txtTitle);

//         const newCellMiddleName = newRow.insertCell(3);
//         const txtMiddleName = document.createTextNode(`${overdueFee}`);
//         newCellMiddleName.appendChild(txtMiddleName);

//         const newCellLastName = newRow.insertCell(4);
//         const txtLastName = document.createTextNode(`${publisher}`);
//         newCellLastName.appendChild(txtLastName);

//         const newCellDob = newRow.insertCell(5);
//         const txtDateOfBirth = document.createTextNode(`${datePublished}`);
//         newCellDob.appendChild(txtDateOfBirth);


//     }


//     await $.get("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list", function(data, status){
//         console.log(data); 
//         for(let i=0;i<data.length;i++){
//             addNewBookDataRow(data[i].bookId,data[i].isbn,data[i].title,data[i].overdueFee,data[i].publisher,data[i].datePublished);
//         } 
//       });

});