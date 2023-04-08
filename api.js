const express = require('express');
const os = require('os');
const osUtils = require('os-utils');
const si = require('systeminformation');

//settings
const port = 3000;
const nic = 'eth0';

const app = express();
app.use(express.json());

app.post(`/metrics`, async (req, res) => {
    try {
        const memoryUsage = 100 - (os.freemem() / os.totalmem() * 100);
        const cpu = await getCpuUsage();
        const network = await getNetworkUsage(nic);
        res.json({
			status: "success",
            memoryUsage: parseFloat(memoryUsage.toFixed(2)),
            cpuUsage: parseFloat((cpu * 100).toFixed(2)),
            networkUpload: parseFloat((network.tx_sec / 125000).toFixed(2)),
            networkDownload: parseFloat((network.rx_sec / 125000).toFixed(2))
        });
    } catch (err) {
        console.error(err);
        res.json({
            status: "failed"
        });
    }
});

app.listen(port, () => console.log(`System/Analytics API started successfully on port ${port}`));

function getCpuUsage() {
    return new Promise((resolve, reject) => {
        osUtils.cpuUsage((value) => {
            resolve(value);
        });
    });
}

async function getNetworkUsage(name) {
    const stats = await si.networkStats(name);
    return {
        rx_sec: stats[0].rx_sec,
        tx_sec: stats[0].tx_sec
    };
}
