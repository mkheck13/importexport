

function getData(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }) 
}

async function asyncGetData() {
    const promise = await fetch("https://api.adviceslip.com/advice");
    const data = await promise.json();
    console.log(data);
}

export { getData, asyncGetData };