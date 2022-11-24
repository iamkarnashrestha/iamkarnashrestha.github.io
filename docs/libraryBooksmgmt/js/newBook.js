"use strict";
import { saveNewBook } from "./modules/services/bookService.js";
document.addEventListener("DOMContentLoaded", async() => { 


    //display error
    const displayError=(error)=>{
        document.getElementById("errorMsg").innerText=error.message();
    }

     
    
    const newBookForm=document.querySelector("#bookForm");
    newBookForm.addEventListener("submit",async (event)=>{
       
        const txtIsbn=document.querySelector("#isbn").value;
        const txtTitle=document.querySelector("#bookTitle").value;
        const txtOverdueFee=document.querySelector("#overDue").value;
        const txtPublisher=document.querySelector("#publisher").value;
        const txtDatePublished=document.querySelector("#datePublished").value;
        event.preventDefault();
        const newBook={
            "isbn":txtIsbn,
            "title":txtTitle,
            "overdueFee":txtOverdueFee,
            "publisher":txtPublisher,
            "datePublished":txtDatePublished
        };
        try{
            const bookAdded=await saveNewBook(newBook);

        }
        catch(error){
                displayError(error);
        }
        document.location="./bookList.html";
    });




});