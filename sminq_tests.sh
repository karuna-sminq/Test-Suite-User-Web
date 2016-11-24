#!/usr/bin/bash

echo '''
Copyright (C) 2016 Sminq India Solutions Pvt Ltd.
Created on 2016-10-10
Updated on 2016-11-24

============================================================
     _______..___  ___.  __  .__   __.   ______
    /       ||   \/   | |  | |  \ |  |  /  __  \
   |   (----`|  \  /  | |  | |   \|  | |  |  |  |
    \   \    |  |\/|  | |  | |  . `  | |  |  |  |
.----)   |   |  |  |  | |  | |  |\   | |  `--'  '--.
|_______/    |__|  |__| |__| |__| \__|  \_____\_____\

============================================================

@author: Karuna Lingham
'''

echo "================================="
echo "Sminq User Web v19 (Beta) ..."
echo "Running Test Suite v1.0.0 ..."
echo "================================="

d="$(date +'%d-%m-%Y')"
t="$(date +%H:%M)"
now=$d-$t

start=`date +%s`

#Run scripts
protractor sminq_conf.js

#Copy ./reports folder
mkdir -p test_reports/test_$now
cp reports/htmlReport.html test_reports/test_$now/report.html
cp -R reports/screenshots test_reports/test_$now

end=`date +%s`
total_time=$((end-start))

echo "================================="
echo "Time taken for sminq test suite: $total_time sec."
echo "================================="
