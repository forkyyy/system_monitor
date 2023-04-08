# system_monitor

System monitor using API in NodeJS

Installation:

curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -

sudo apt -y install nodejs

npm i express os-utils systeminformation

Replace the 'eth0' with your network adapter on api.js

Replace 'https://api.yourdomain.com/server1' in script.js to your server APIs

I recommend making a reverse proxy using nginx to hide your backend server IPs

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
