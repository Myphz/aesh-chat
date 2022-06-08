git clone https://github.com/Myphz/aesh-chat.git
cd aesh-chat
npm ci --include=dev
npm run build
cd ..
rm -rf aesh-chat