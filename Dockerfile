FROM postgis/postgis:16-3.4

RUN apt-get update
## Install Node
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - 
RUN apt-get install nodejs npm -y

WORKDIR /app

COPY . /app
    
EXPOSE 5432

ENV POSTGRES_PASSWORD super_secret_password
ENV POSTGRES_USER local_dev
ENV POSTGRES_DB e3_virtualizer
