FROM nikolaik/python-nodejs:latest

RUN apt-get update && \
  apt-get install -y \
  neofetch \
  chromium \
  ffmpeg \
  webp \
  wget \
  mc \
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install 
#RUN npm install @adiwajshing/baileys@3.5.2 
#RUN npm audit fix
#RUN npm install -g npm-check-updates
#RUN npm instal pm2 -g
#RUN ncu --upgrade
#RUN npm install libwebp

ENV PM2_PUBLIC_KEY r5nhytflswo1ly3
ENV PM2_SECRET_KEY cygkc3bz1dww20f
RUN mkdir /Kenzy-Bot5
WORKDIR /Kenzy-Bot5
COPY . /Kenzy-Bot5
RUN python3 -m pip install -r /Kenzy-Bot5/requirements.txt
ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN ls

EXPOSE 5000

CMD ["pm2-runtime", "main.js"]
