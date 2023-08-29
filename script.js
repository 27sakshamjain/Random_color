const getcolor=()=>{

    const randomno =Math.floor(Math.random()*16777215);
    const randomcode = "#" + randomno.toString(16);
    // console.log(randomcode);
    document.body.style.backgroundColor=randomcode;
    document.getElementById("color-code").innerHTML=randomcode;

    // auto copy
    navigator.clipboard.writeText(randomcode);
}

document.getElementById("btn").addEventListener("click",getcolor);

getcolor();