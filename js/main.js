const keys = ["Backspace", "Tab", "Escape", "Control", "Alt", "Shift", "Meta", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter"]

document.addEventListener('keydown', (e) => {
    if (keys.includes(e.key)) {
        e.preventDefault()
    }




    try {
        document.getElementById(`${(e.key).toUpperCase()}-KEY`).classList.add("down")
    } catch {
        switch(e.key) {
            case "Escape":
                document.getElementById(`Esc-Key`).classList.add("down")
                break
            case "Backspace":
                document.getElementById(`Del-Key`).classList.add("down")
                break
            case "Tab":
                document.getElementById(`Tab-KEY`).classList.add("down")
                break
            case "Enter":
                document.getElementById(`Return-KEY`).classList.add("down")
                break
            case "Shift":
                document.getElementById(`Shift-KEY`).classList.add("down")
                break
            case "Control":
                document.getElementById(`Ctrl-KEY`).classList.add("down")
                break
            case "Alt":
                document.getElementById(`Alt-KEY`).classList.add("down")
                break
            case "Meta":
                document.getElementById(`Win-KEY`).classList.add("down")
                break
        }
    }
})

document.addEventListener('keyup', (e) => {
    try {
        document.getElementById(`${(e.key).toUpperCase()}-KEY`).classList.remove("down")
    } catch {
        switch(e.key) {
            case "Escape":
                document.getElementById(`Esc-Key`).classList.remove("down")
                break
            case "Backspace":
                document.getElementById(`Del-Key`).classList.removed("down")
                break
            case "Tab":
                document.getElementById(`Tab-KEY`).classList.remove("down")
                break
            case "Enter":
                document.getElementById(`Return-KEY`).classList.remove("down")
                break
            case "Shift":
                document.getElementById(`Shift-KEY`).classList.remove("down")
                break
            case "Control":
                document.getElementById(`Ctrl-KEY`).classList.remove("down")
                break
            case "Alt":
                document.getElementById(`Alt-KEY`).classList.remove("down")
                break
            case "Meta":
                document.getElementById(`Win-KEY`).classList.remove("down")
                break
        }
    }
})

function switchToGame() {
    document.getElementById("inventoryWindow").style.display = 'none'
    document.getElementById("gameWindow").style.display = 'grid'
}

function switchToInventory() {
        document.getElementById("inventoryWindow").style.display = 'grid'
    document.getElementById("gameWindow").style.display = 'none'
}