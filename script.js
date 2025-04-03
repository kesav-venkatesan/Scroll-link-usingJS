const link=document.querySelectorAll("nav a")
link.forEach((select)=>{
    select.href+=`${select.textContent.trim()}`;
})