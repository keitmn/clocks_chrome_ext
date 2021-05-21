const clock = document.createElement('div')
clock.classList.add('clock_extension', 'hide')
setInterval(updateClock, 1000);
updateClock()
document.body.append(clock)

chrome.storage.local.get(['display'], result => {
    if (result.display) clock.classList.remove('hide')
})

chrome.storage.onChanged.addListener(function (changes, namespace) {
    clock.classList.toggle('hide') 
})

document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        chrome.storage.local.set({dspilay: clock.classList.contains('hide')})      
    }
}
)
function updateClock() {
    const date = new Date()
    const time = new Intl.DateTimeFormat('ru-Ru', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(date)
    clock.innerText = time
}