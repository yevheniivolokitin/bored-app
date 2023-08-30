const btn = document.querySelector(".btn")
btn.addEventListener('click', change)
function change  () {
    fetch("https://www.boredapi.com/api/activity/")
    .then(data => data.json())
    .then((res) => {
        document.querySelector(".h1").innerHTML = `
        <h1>Yay, no more boring 🔥</h1>
        `
        document.querySelector(".h2").innerHTML = `
        <h2>${res.activity}</h2>
        `
        const body = document.querySelector("body")
        body.classList.remove("body-grey")
        body.classList.add("body-green")
    });
   
}