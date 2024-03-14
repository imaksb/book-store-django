FROM python

WORKDIR /usr/src/library

COPY requirements.txt ./

RUN pip install -r requirements.txt

