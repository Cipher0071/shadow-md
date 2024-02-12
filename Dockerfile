FROM node:lts-buster
RUN git clone https://github.com/Primi373-creator/Secktor-Md /root/Cipher0071
WORKDIR /root/Cipher0071/
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]
