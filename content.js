console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjj")
let BigBox = false
let messages = [
    "Hello, World!",
    "這是一條測試訊息。",
    "Happy coding!",
    "你今天好嗎？",
    "Testing, testing, 1, 2, 3.",
    "測試，測試，1、2、3。",
    "感謝您使用此服務。",
    "Have a great day!",
];
let count = 0
setInterval(() => {
    simulateInput()
}, 5000);

function simulateInput() {
    const inputB = document.querySelector("[aria-label='與所有參與者進行即時通訊']");
    if (!inputB) {
        return
    }
    // console.log(inputB.getAttribute("aria-pressed"))
    let T = false
    if (inputB.getAttribute("aria-pressed") != 'true') {
        inputB.click()
        T = true
    }
    const inputElement = document.querySelector("#bfTqV")
    if (!inputElement || inputElement.value != "") {
        if (T) {
            inputB.click()
        }
        return
    }
    inputElement.value = messages[count % messages.length];
    count++
    var inputEvent = new Event("input", {
        bubbles: true,
        cancelable: true
    });
    inputElement.dispatchEvent(inputEvent);

    // ------------------------------------------------
    if (!BigBox) {
        BigBox = document.querySelector(".hWX4r")
        console.log("12345")
        const config = { attributes: true, childList: true, subtree: true };
        const callback = function (mutationsList, observer) {
            // Use traditional 'for loops' for IE 11
            for (let mutation of mutationsList) {
                // console.log(mutation.addedNodes.length)
                if (mutation.type === 'childList'  && mutation.addedNodes.length > 0) {
                    if (mutation.addedNodes[0].classList) {
                        if (mutation.addedNodes[0].classList.contains("ptNLrf")) {
                            console.log("!!!!!!!!!!!!!!!!!")
                            check()
                        }
                    }
                }
                else if (mutation.type === 'attributes') {
                    // console.log('The ' + mutation.attributeName + ' attribute was modified.');
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(BigBox, config);

    }
    // ------------------------------------------------

    const sentB = document.querySelector("[aria-label='傳送訊息'].VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.QDwDD.tWDL4c.Cs0vCd")
    sentB.click()
    setTimeout(() => {
        check()
    }, 300);

    if (T) {
        inputB.click()
    }

}

function check() {
    const boxex = document.querySelectorAll(".Ss4fHf")
    boxex.forEach(box => {
        const F = box.firstChild.nextSibling.childNodes;
        for (let i = 0; i < F.length; i++) {
            item = F[i]
            if (messages.includes(item.innerText)) {
                item.remove()
                i--
            }
        }
        if (F.length == 0) {
            box.remove()
        }
    })
}