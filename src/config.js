
export const URL_API = "http://localhost:8080";

const Token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNTg1MjU4NTA0LCJpYXQiOjE1ODUyMjI1MDR9.iSXgBmTu6jSFnO2J6_AyR1up8qJpSlVG-62E3JKIweA";

export const OPTIONS = {headers: {
        "Authorization": `Bearer ${Token}`, 
        "Content-Type": "application/json",
        "Accept": "application/json" }
    };