console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjj")
let count = 0
let FailureCount = 0
let MaxFailureCount = 5
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
let HiddenMsg = [
    "白癡"
]
let HiddenPerson = [
    "HH",
]
let God_Mode_Message = []
let CreatedMessage = []
let allE = {}

function init() {
    const RHB = document.querySelector("[aria-label='舉手 (ctrl + alt + h)']");
    // const RHB = document.querySelector('[data-tooltip-id="c29"]');
    allE.RHB = RHB
    const MeetingDetails = document.querySelector("[aria-label='會議詳細資料']");
    // const MeetingDetails = document.querySelector('[data-tooltip-id="tt-c32"]');
    allE.MeetingDetails = MeetingDetails
    const AllParticipants = document.querySelector("[aria-label='顯示所有參與者']");
    // const AllParticipants = document.querySelector('[data-tooltip-id="tt-c33"]');
    allE.AllParticipants = AllParticipants
    const Activity = document.querySelector("[aria-label='活動']");
    // const Activity = document.querySelector('[data-tooltip-id="tt-c39"]');
    allE.Activity = Activity
    const quitB = document.querySelector("[aria-label='退出通話']");
    // const quitB = document.querySelector('[data-tooltip-id="tt-c31"]');
    allE.quitB = quitB


    const inputB = document.querySelector("[aria-label='與所有參與者進行即時通訊']");
    // const inputB = document.querySelector('[data-tooltip-id="tt-c34"]');
    allE.inputB = inputB

    if (!inputB) {
        return
    }
    let T = false
    if (inputB.getAttribute("aria-pressed") != 'true') {
        inputB.click()
        T = true
    }
    const inputSpace = document.querySelector("#bfTqV")
    const sentB = document.querySelector("[aria-label='傳送訊息'].VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.QDwDD.tWDL4c.Cs0vCd")
    // const sentB = document.querySelector('[data-tooltip-id="tt-c58"]')
    allE.sentB = sentB
    allE.inputSpace = inputSpace

    const MsgBoxFather = document.querySelector(".z38b6")
    allE.MsgBoxFather = MsgBoxFather

    const BigBox = document.querySelector(".hWX4r")
    allE.BigBox = BigBox

    console.log(allE)
    if (T) {
        inputB.click()
    }
    if (!BigBox) {
        return
    }
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
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
    if (Object.keys(allE).every(key => allE[key])) {
        clearInterval(WaitInit)
        console.log("start")
        let mainn = setInterval(() => {
            main()
            console.log(God_Mode_Message)
            CreateAmsg("aaassssSSB", "SBB")
        }, 5000);
        setTimeout(() => {
            // quit()
        }, 1000);
    }
}

function sendAmsg(text, option = { force: false }) {
    if (allE.MeetingDetails.getAttribute("aria-pressed") == 'true' || allE.AllParticipants.getAttribute("aria-pressed") == 'true' || allE.Activity.getAttribute("aria-pressed") == 'true') {
        FailureCount++
        if (FailureCount > MaxFailureCount || option.force) {
            FailureCount = 0
        } else {
            return
        }
    }
    let T = false
    if (allE.inputB.getAttribute("aria-pressed") != 'true') {
        allE.inputB.click()
        T = true
    }
    if (!allE.inputSpace || allE.inputSpace.value != "") {
        FailureCount++
        if (FailureCount > MaxFailureCount || option.force) {
            FailureCount = 0
            T = true
        } else {
            if (T) {
                allE.inputB.click()
            }
            return
        }
    }
    allE.inputSpace.value = text;
    var inputEvent = new Event("input", {
        bubbles: true,
        cancelable: true
    });
    allE.inputSpace.dispatchEvent(inputEvent);
    allE.sentB.click()

    if (T) {
        allE.inputB.click()
    }

}

function RaiseHand() {
    allE.RHB.click()
}

function check() {
    let New_God_Mode_Message = []
    const boxex = document.querySelectorAll(".Ss4fHf")
    var BigId = -1
    boxex.forEach(box => {
        const F0 = box.firstChild.firstChild;
        const F1 = box.firstChild.firstChild.nextSibling;
        console.log(F1)
        if (F0) {
            var messenger = F0.innerText;
            if (F1) {
                var time = F1.innerText;
            }
            switch (CheckMessenger(messenger)) {
                case 1:
                    box.remove()
                    break
                case 2:
                    return
            }
        }

        const F = box.firstChild.nextSibling.childNodes;
        let j = -1
        for (let i = 0; i < F.length; i++) {
            j++
            item = F[i]
            let state = CheckMsg(item.innerText, messenger)
            switch (state) {
                case 1:
                    item.remove()
                    i--
                    break;
            }
            BigId++
            if (God_Mode_Message[BigId]) {
                if (God_Mode_Message[BigId].connect) {
                    MsgBoxFather.appendChild(CreatedMessage.html)
                    console.log("fghjkl;'?!")
                }
            }
            // New_God_Mode_Message.push({ BigId: BigId, order: box.getAttribute('style'), id: j, time: time, msg: item.innerText, messenger: messenger, state: state })
        }
        if (F.length == 0) {
            box.remove()
        }
    })
    if (New_God_Mode_Message.length >= God_Mode_Message.length) {
        God_Mode_Message = New_God_Mode_Message
    }
}


function CheckMessenger(messenger) {
    if (HiddenPerson.includes(messenger)) {
        return 1
    }
    // if (!(messenger == "你" || messenger == "You" || messenger == "you")) {
    //     return 2
    // }
    return 0

}

function CheckMsg(Msg, messenger) {
    // console.log(Msg)
    if (messages.includes(Msg)) {
        return 1
    }
    let isMatch = HiddenMsg.some(aRule => {
        let regex = new RegExp(aRule);
        return regex.test(Msg);
    });
    if (isMatch && messenger != "你") {
        return 1
    }
    return 0
}


function quit() {
    allE.quitB.click()
}
function CreateAmsg(Msg, messenger) {
    let newMSG = {}
    newMSG.msg = Msg
    newMSG.messenger = messenger
    let html = document.createElement('div')
    html.jsaction = "JIbuQc:sCzVOd(aUCive),T4Iwcd(g21v4c),yyLnsd(iJEnyb),yFT8A(RNMM1e),Cg1Rgf(EZbOH)"
    html.class = "Ss4fHf"
    html.jsname = "Ypafjf"
    html.tabindex = "-1"
    html.jscontroller = "LQRnv"
    html.style = God_Mode_Message[God_Mode_Message.length].order

    let Bdiv1 = document.createElement('div');
    let innerDiv1 = document.createElement('div');
    innerDiv1.className = 'poVWob';
    innerDiv1.textContent = messenger;

    let innerDiv2 = document.createElement('div');
    innerDiv2.className = 'MuzmKe';
    innerDiv2.textContent = GetNowTime();

    Bdiv1.appendChild(innerDiv1);
    Bdiv1.appendChild(innerDiv2);
    // ---------------------------------------------------------------
    let Bdiv2 = document.createElement('div');
    Bdiv2.className = 'beTDc';

    let nestedDiv1 = document.createElement('div');
    nestedDiv1.className = 'ptNLrf';

    let nestedDiv2 = document.createElement('div');
    nestedDiv2.setAttribute('jsname', 'dTKtvb');

    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('jsaction', 'rcuQ6b:XZyPzc');
    contentDiv.setAttribute('jscontroller', 'RrV5Ic');
    contentDiv.setAttribute('data-is-tv', 'false');
    contentDiv.textContent = 'scdvsfdb';

    nestedDiv2.appendChild(contentDiv);
    nestedDiv1.appendChild(nestedDiv2);
    Bdiv2.appendChild(nestedDiv1);

    html.appendChild(Bdiv1)
    html.appendChild(Bdiv2)


    newMSG.html = html
    CreatedMessage.push(newMSG)
    God_Mode_Message[God_Mode_Message.length].connect = CreatedMessage.length - 1
}

function GetNowTime() {
    const now = new Date();
    let n = now.toLocaleTimeString('zh-TW')
    return n
}

let WaitInit = setInterval(() => {
    init()
}, 3000);


function main() {
    sendAmsg(messages[count % messages.length])
    count++
}