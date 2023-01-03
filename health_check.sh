#!/bin/bash

response=$(curl 'http://localhost:8080/health');
[[ "$response" == 'ok' ]];