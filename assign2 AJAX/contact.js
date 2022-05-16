function send(){
    let email =document.getElementById("exampleFormControlInput1").value;
    let text =document.getElementById("exampleFormControlTextarea1").value;

    localStorage.setItem("email",email)
    localStorage.setItem("text",text)

    window.open("display.html")

    function sdata(){
        let xhr = new XMLHttpRequest();
        let data = JSON.stringify(send());
        xhr.open("POST","http://localhost:4000/storedata",true)
        xhr.setRequestHeader("Content-Type","application/json")
        xhr.send(data)
        
    }
}