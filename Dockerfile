FROM node:16

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
COPY tsconfig.json ./

# RUN npm install --omit=dev
RUN npm ci

COPY . .

# RUN npm install typescript && npm run build
RUN npm run build

WORKDIR /app/dist
COPY prisma ./prisma/

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
