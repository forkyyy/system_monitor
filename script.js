const url1 = "https://api.yourdomain.com/server1";
const url2 = "https://api.yourdomain.com/server2";
const url3 = "https://api.yourdomain.com/server3";
const url4 = "https://api.yourdomain.com/server4";

function fetchData() {
    fetch(url1, {
            method: "POST"
        })
        .then((response) => response.json())
        .then((data) => updateBoxData("server1", data));
    fetch(url2, {
            method: "POST"
        })
        .then((response) => response.json())
        .then((data) => updateBoxData("server2", data));
    fetch(url3, {
            method: "POST"
        })
        .then((response) => response.json())
        .then((data) => updateBoxData("server3", data));
    fetch(url4, {
            method: "POST"
        })
        .then((response) => response.json())
        .then((data) => updateBoxData("server4", data));
}

function updateBoxData(boxId, data) {
    const box = document.getElementById(boxId);
    const cpuElem = box.querySelector(`#${boxId}-cpu`);
    const ramElem = box.querySelector(`#${boxId}-ram`);
    const uploadElem = box.querySelector(`#${boxId}-upload`);
    const downloadElem = box.querySelector(`#${boxId}-download`);

    cpuElem.innerText = data.cpuUsage;
    ramElem.innerText = data.memoryUsage;
    uploadElem.innerText = data.networkUpload;
    downloadElem.innerText = data.networkDownload;
}

fetchData();
setInterval(fetchData, 2000);