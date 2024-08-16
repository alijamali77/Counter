const count = document.querySelector(".count")
const button = document.querySelector(".d-flex")

button.addEventListener("click", (event) =>{
    if(event.target.classList.contains("Add")){
        count.innerHTML++;
    }
    else if(event.target.classList.contains("Subtract")){
        count.innerHTML--;
    }
    else{
        count.innerHTML = 0
    }
    setColor()
})

function setColor()
{
    if(count.innerHTML>0)
    {
        count.style.color = "yellow";
    }
    else if(count.innerHTML < 0)
    {
        count.style.color = "orange"
    }
    else{
            count.style.color = "white"
    }
}