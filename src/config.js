
export const URL_API = "http://localhost:8080";

const Token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNTg1MjAwODI1LCJpYXQiOjE1ODUxNjQ4MjV9.4alZ4aUvq3Ql-ygIqxOfswWgx1hgC1DQ3oroiTD8UCA";

export const OPTIONS = {headers: {
        "Authorization": `Bearer ${Token}`, 
        "Content-Type": "application/json",
        "Accept": "application/json" }
    };