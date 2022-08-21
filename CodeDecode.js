
let encode_text = window.btoa(text);
let decode_text = window.atob(encode_text);

let textarea = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("select");

textarea.addEventListener ("input" , ()=> {
codeit();
})

select.addEventListener("change" , ()=> {
    codeit();
})

function codeit() {
if (select.value == "decode") {
 result.value = window.atob(textarea.value);
}else if (select.value == "encode") {
    result.value = window.btoa(textarea.value);
}else {
    result.value = "";
}
    
}