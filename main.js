const $ = document.querySelector.bind(document)


function changeTime () {
    console.log(new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false }))
        var time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false });
        $("p").innerHTML= time 
}
setInterval(changeTime,1000)
