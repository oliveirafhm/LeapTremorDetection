# README #

## Introduction ##

Leap Tremor Detection (LTD) is a program to record movements of the hand and fingers.

The data are saved in .txt format as follows.

Data structure:

[frameNumber], [currentTimestamp(S)], [handId], [handConfidence(0-1)], [handTimeVisible(S)], [handType(L||R)], [handPalmPosition(X)], [handPalmPosition(Y)], [handPalmPosition(Z)], [handPalmVelocity(X)], [handPalmVelocity(Y)], [handPalmVelocity(Z)], [handPitch(R)], [handYaw(R)], [handRoll(R)], [handPalmNormal(X)], [handPalmNormal(Y)], [handPalmNormal(Z)], [handDirection(X)], [handDirection(Y)], [handDirection(Z)], [thumbTipPosition(X)], [thumbTipPosition(Y)], [thumbTipPosition(Z)], [indexTipPosition(X)], [indexTipPosition(Y)], [indexTipPosition(Z)], [middleTipPosition(X)], [middleTipPosition(Y)], [middleTipPosition(Z)], [ringTipPosition(X)], [ringTipPosition(Y)], [ringTipPosition(Z)], [pinkyTipPosition(X)], [pinkyTipPosition(Y)], [pinkyTipPosition(Z)]

![5.PNG](https://bitbucket.org/repo/g7K5AE/images/194230066-5.PNG)

## Features ##
- App written in HTML, CSS and JS.
- External components (already included in the LTD package):
    - node-webkit (v0.8.6) - https://nwjs.io/
    - nw-edge (Library to invoke C# DLL, windows only feature)
    - canvasjs (v1.4.1) - https://canvasjs.com/
    - leap-0.6.4.js - https://github.com/leapmotion/leapjs
    - lzdialog.js
 
## Requirements ##
- Leap Motion sensor (tested with  LM-010)
- Leap Motion software 2.3 - https://www.leapmotion.com/setup/desktop/

## Supported Operational Systems ##
- Windows 7 / 8 / 10 (not tested)
- MacOSX
- Linux

## Misc ##
ChangeLeapPriority.bat (script automatic executed while executing LTD, it changes all processes related to this app to run in high priority. In order to achieve higher frame rate. - Windows only feature).

## Reminder ##
Don't use proxy while using the software (or disable proxy only for localhost and port used by LeapMotion service).

## Limitations ##
Up to now, there is no way to get a fixed frame rate. When the deviceFrame version of the app is used it is possible to get around 70 fps (on the follow computer: Core i7 2.9 GHz).

## Authors ##
Fábio Henrique - *oliveirafhm@gmail.com*

Adriano O Andrade - *aoandrade.ufu@gmail.com*