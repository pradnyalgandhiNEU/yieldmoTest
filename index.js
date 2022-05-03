function submitHandler(){
    const title = document.getElementById('title').value
    const desc = document.getElementById('desc').value
    const image = document.getElementById('image').value
    const logo = document.getElementById('logo').value

    localStorage.setItem("enteredTitle", title)
    localStorage.setItem("enteredDesc", desc)
    localStorage.setItem("enteredImage", image)
    localStorage.setItem("enteredLogo", logo)
    window.location.reload()

    return false
}

function coordinatesLog(event) {
    // console.log(`Mouse Locaiton: ${event.clientX}, ${event.clientY}`)
    var x = event.clientX
    var y = event.clientY
    return x,y
}

function sendCoordinates(){
    let payload = coordinatesLog()
    jQuery.post({
        type: 'POST',
        url: "https://jsonplaceholder.typicode.com/posts",
        data: payload
    });
}

window.setInterval(sendCoordinates, 250);