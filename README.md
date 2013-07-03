# PiGI - A Raspberry Pi Geiger-Mueller Interface

![Image](https://apollo.open-resource.org/_media/lab:pigi-prototype-board-v1.0-on-pi.jpg)

The PiGI is built as a ready-to-go drop-in module for the Raspberry Pi to transform it into a versatile geiger counter to measure/monitor radioactivity. It will generate the required high voltage the counting tubes need to operate and it will safely invert the counting impulses to a falling edge, detectable by a GPIO Pin on the PI. But it's also designed in such a universal way in order to be  very hackable. Basically it can be connected to any processing system that can detect falling edges like:

  * Arduino
  * ATMega
  * PIC
  * Other embedded Linux ARM/MIPS systems with GPIO Inputs (GNUBLIN, Netus G20 etc.)

## Specifications

  * 40x43mm board
  * Very low energy consumption (<2mA @ 0.09uSv/h local dose rate)
  * Cathode counting
  * Low BOM count / small footprint
  * Very cheap design (Prototype costs per board: EUR15)
  * Dual stackable for low/high dosis couting with 2 tubes
  * Open-Source Hardware/Software

## Hardware

  * Schematics
  * Board designs 

## Software

  * Basic prove-of-concept code

## Website & Contact

[https://apollo.open-resource.org/lab:pigi](https://apollo.open-resource.org/lab:pigi)
