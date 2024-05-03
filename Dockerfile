FROM postgres:14.11-alpine3.19

RUN apk update
## Install Node
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - 
RUN apk add nodejs npm

WORKDIR /app

COPY . /app
    
EXPOSE 5432

ENV POSTGRES_PASSWORD super_secret_password
ENV POSTGRES_USER local_dev
ENV POSTGRES_DB e3_virtualizer
