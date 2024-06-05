const output = document.getElementById('output')
const fully = document.getElementById('fully')
const date = document.getElementById('date')
const time = document.getElementById('time')
let mode = 'time'

setInterval(update, 1000)
update()
function buttons(name){
    return function(){
        mode = name
        update()
    }
}

fully.onclick = buttons('fully')
date.onclick = buttons('date')
time.onclick = buttons('time')

function update() {
    output.textContent = format(mode)
}
function format(formatMode){
    const now = new Date()
    switch(formatMode){
        case 'time' :
             return now.toLocaleTimeString()
        case 'date' :
             return now.toLocaleDateString()
        case 'fully':
            return now.toLocaleTimeString() + '/' + now.toLocaleDateString()
        default: return now.toLocaleTimeString()
    }
}