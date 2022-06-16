FROM python:3.9.4-buster
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt install nodejs -y
RUN npm install -g yarn
ADD . /app
WORKDIR /app
COPY requirements.txt requirements.txt
COPY Makefile Makefile
COPY .flaskenv .flaskenv
RUN make install-app
RUN make install-web
RUN make build
RUN make cleanup
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8