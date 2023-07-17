FROM node:16-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy app source code
COPY . .

# Build the Next.js project
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run app
CMD ["npm", "run", "start:dev"]
