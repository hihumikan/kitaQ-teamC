FROM python:3.10

WORKDIR /usr/src/app
ENV FLASK_APP=app

COPY /requirements.txt ./

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
