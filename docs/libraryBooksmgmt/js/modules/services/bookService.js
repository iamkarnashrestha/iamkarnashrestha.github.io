"use strict";

    export async function getAllBooks(){
        try{
            const response=await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list");
            const books=await response.json();
            return books;
        }
        catch(error){
            displayError(error);
        }
    }

    export async function saveNewBook(book){
        try{
            console.log(book);
            const response= await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
            {
                method:"POST",
                body:JSON.stringify(book),
                headers:{
                    "Content-Type":"application/json",

                }
            });
            const bookAdded=await response.json();
            console.log(bookAdded);
            return bookAdded;
        }catch(error){
            console.log(error);
        }
    }