FROM node:20

# Update and install required packages
RUN apt update && \
    apt install postgresql postgresql-contrib -y && \
    apt install nginx -y && \
    apt install nano -y && \
    apt install curl -y

# Install concurrently globally to run multiple processes
RUN npm install -g concurrently

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Set the working directory for backend
WORKDIR /usr/portfolio/backend

# Copy and install backend dependencies
COPY backend/package.json backend/package-lock.json ./
RUN npm install

# Set the working directory for frontend
WORKDIR /usr/portfolio/frontend

# Copy and install frontend dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy the rest of the application code after npm install
COPY backend /usr/portfolio/backend
COPY frontend /usr/portfolio/frontend

# Expose necessary ports
EXPOSE 3000 5000

# Set working directory to frontend for starting the React app
WORKDIR /usr/portfolio/frontend

# Command to start both npm and nginx concurrently
CMD ["concurrently", "\"npm run start\"", "\"nginx -g 'daemon off;'\""]
