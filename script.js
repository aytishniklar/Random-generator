const btn1 = document.querySelector(".btn");
const input1 = document.querySelector("input");
const copyIcon = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");

btn1.addEventListener("click", () =>{
    createPassword();
});
copyIcon.addEventListener("click", () => {
    copyPassword();
    if(input1.value){
        alertContainer.classList.remove("active");
        setTimeout(() => {
            alertContainer.classList.add("active");
        }, 2000);
    }
});
function createPassword(){
    const chars = "0123456789abcdefghijklmnoprstquvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPRSTQUVWXYZ";
    const passwordLength = 14;
    let password ="";
    for(let index = 0; index < passwordLength; index++){
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    input1.value = password;
    alertContainer.innerText = password + "  Nusxalandi";
}
function copyPassword(){
    input1.select();
    input1.setSelectionRange(0, 999);
    navigator.clipboard.writeText(input1.value);
}