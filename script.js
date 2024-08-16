document.addEventListener('DOMContentLoaded', () =>{
    const colorarray = ["red", "orange", "yellow", "green", "blue"];
    const colorbox = document.getElementById("colorbox");


colorarray.forEach(elem =>{
    const span = document.createElement("span");
    span.style.backgroundColor = elem;
    span.addEventListener('click', () =>{
        document.body.style.backgroundColor = elem;
    })

    colorbox.appendChild(span)
})
})