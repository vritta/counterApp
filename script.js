const countValue = document.querySelector('#counter');
function decrement(){
    let value = parseInt(countValue.textContent);
    value--;
    countValue.textContent = value;
}
function increment(){
    let value = parseInt(countValue.innerText);
    value++;
    countValue.innerText = value;
}