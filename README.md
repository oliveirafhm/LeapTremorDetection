# README #

## Introduction ##

Leap Tremor Detection (LTD) is a program to record movements of the hand and fingers.

The data are saved in .txt format as follows.

Data structure:

[frameNumber], [currentTimestamp(S)], [handId], [handConfidence(0-1)], [handTimeVisible(S)], [handType(L||R)], [handPalmPosition(X)], [handPalmPosition(Y)], [handPalmPosition(Z)], [handPalmVelocity(X)], [handPalmVelocity(Y)], [handPalmVelocity(Z)], [handPitch(R)], [handYaw(R)], [handRoll(R)], [handPalmNormal(X)], [handPalmNormal(Y)], [handPalmNormal(Z)], [handDirection(X)], [handDirection(Y)], [handDirection(Z)], [thumbTipPosition(X)], [thumbTipPosition(Y)], [thumbTipPosition(Z)], [indexTipPosition(X)], [indexTipPosition(Y)], [indexTipPosition(Z)], [middleTipPosition(X)], [middleTipPosition(Y)], [middleTipPosition(Z)], [ringTipPosition(X)], [ringTipPosition(Y)], [ringTipPosition(Z)], [pinkyTipPosition(X)], [pinkyTipPosition(Y)], [pinkyTipPosition(Z)]

![5.PNG](https://github.com/oliveirafhm/LeapTremorDetection/blob/master/shared/LTD%20annotated%20screenshots/5.PNG?raw=true)

### Software registration number [BR 51 2015 000133 7](https://gru.inpi.gov.br/pePI/servlet/ProgramaServletController?Action=detail&CodPedido=17382&SearchParameter=)

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

## Authors
* Fábio Henrique M Oliveira (oliveirafhm@gmail.com)
* Adriano O Andrade (adriano@ufu.br) - Advisor

## List of publications
1. Oliveira, F. H. M., & Andrade, A. O. (2014). Estratégia para detecção de tremor de punho utilizando o sensor Leap Motion. In Anais do VII Simpósio em Engenharia Biomédica (pp. 143–148). Uberlândia. [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.3598592.svg)](https://doi.org/10.5281/zenodo.3598592)

1. Oliveira, F. H. M., Júnior, J. A. F. B., Machado, A. R. P., & Andrade, A. O. (2014). Quantificação de tremor de punho utilizando o sensor Leap Motion. In Anais do XXIV Congresso Brasileiro de Engenharia Biomédica (pp. 2762–2765). Uberlândia. [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.3598546.svg)](https://doi.org/10.5281/zenodo.3598546)

1. Oliveira, F. H. M., & Andrade, A. O. (2015). Preliminary evaluation of Leap Motion Controller as a human tremor record device. In Anais do VIII Simpósio em Engenharia Biomédica (pp. 241–245). Uberlândia. [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.3598643.svg)](https://doi.org/10.5281/zenodo.3598643)
