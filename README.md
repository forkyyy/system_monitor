## System Monitor using Node.js API

This project enables you to monitor system metrics using API in Node.js. The system metrics include CPU usage, memory usage, disk usage, network usage, and system uptime.

### Installation

To get started, run the following commands in your terminal:

```shell
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt -y install nodejs
npm i express os-utils systeminformation
```

After installing the necessary packages, open 'api.js' and replace 'eth0' with your network adapter.

Then, open 'script.js' and replace 'https://api.yourdomain.com/server1' with your server APIs.

### Reverse Proxy

We recommend making a reverse proxy using Nginx to hide your backend server IPs:

```conf
server {
    listen 80;
    server_name api.yourdomain.com;
    location /server1 {
        add_header Access-Control-Allow-Origin *;
        proxy_pass http://backend:3000/metrics;
    }

    location /server2 {
        add_header Access-Control-Allow-Origin *;
        proxy_pass http://backend:3000/metrics;
    }

    location /server3 {
        add_header Access-Control-Allow-Origin *;
        proxy_pass http://backend:3000/metrics;
    }

    location /server4 {
        add_header Access-Control-Allow-Origin *;
        proxy_pass http://backend:3000/metrics;
    }
}
```


Replace `'http://backend:3000/metrics'` with your own backend server URL.

### Running the Server

Once you've completed these steps, you can run 'npm start' to start the server and begin monitoring your system metrics.
