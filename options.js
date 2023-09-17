const nameInput = document.getElementById("name-input")
const timeInput = document.getElementById("time-input")
const saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click", () => {
    const name = nameInput.value
    const notificationTime = timeInput.value
    chrome.storage.sync.set({
        name,
        notificationTime,
    })
})

chrome.storage.sync.get(["name","notificationTime"], (res) => {
    nameInput.value = res.name ?? "Your Name"
    timeInput.value = res.notificationTime ?? 600
})

setInterval(() =>{
    console.log("options")
}, 1000)