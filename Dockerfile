FROM ubuntu
# WORKDIR /usr/local/app

# Install the application dependencies
#COPY requirements.txt ./
RUN apt update
RUN apt install mysql-server -y
RUN apt install nginx -y
RUN apt install nodejs -y
RUN apt install nano -y
RUN apt install npm -y
RUN apt install curl -y

COPY nginx.conf /etc/nginx/nginx.conf

#COPY nginx.conf /etc/nginx/temp.conf
#RUN cat temp.conf > /etc/nginx/nginx.conf
#RUN rm /etc/nginx/temp.conf

RUN mkdir -p /usr/portfolio

COPY frontend /usr/portfolio/frontend
COPY backend /usr/portfolio/backend

RUN cd /usr/portfolio/frontend
# RUN npm run start

# Copy in the source code
#COPY src ./src
#EXPOSE 5000

# Setup an app user so the container doesn't run as the root user
#RUN useradd app
#USER app

#CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]

CMD /bin/bash
