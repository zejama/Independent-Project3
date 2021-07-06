# _Mr. Roboger's Neighborhood_

#### _This webpage allows the user to input any number and outputs the inputted number as a string_

#### By _**Zeinab Jama**_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _jQuery_
* _Git_

## Description

_This webpage allows the user to input any number and outputs a range of numbers from 0 to the user inputted number. When the user inputs numbers that contain 1 it will be replaced with "Beep!". when the user inputs numbers that contain 2 it will be replaced with "Beep!". when the user inputs numbers that contain 3 it will be replaced with "Won't you be my neighbor?". The exceptions mentioned above are mentioned from least to most important. For example the number 32 should be replaced with "Won't you be my neighbor?" and the number 12 should be replaced with "Boop!". The user can enter as many new values as they like without refreshing the page and the program will give a new output._

## Setup/Installation Requirements

* _Clone this repository. To clone using HTTPS, click on the green download button above the list of files and click on the clipboard icon to save the repository URL._
[![Clone button](img/clone.png)](#)

* _Open your terminal and navigate into your desktop directory_
* _Type `git clone` and paste the url of the repository_
* _Press Enter_
* _Navigate to your desktop folder on your device and click the `index.html` file on your browser._
* _Once you open the webpage you can begin entering numbers into the text box and press enter to get an output

## Known Bugs

* _No known bugs_

## License

_MIT License
Copyright (c) 2021 Zeinab Jama

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._

## Contact Information

_Please contact me at zejama99@gmail.com if you have any further questions about this webpage._

## Tests:
_Describe: roboger()_

_Test: "The program outputs the user's inputted number as a string
_Expect(roboger(0).toEqual("0"));_

_Test: "The program outputs "Won't you be my neighbor?" when the user's input includes the number 3"_
_Expect(roboger(3).toEqual("0, Beep!, Boop!, Won't you be my neighbor?"));_

_Test: "The program outputs "Boop!" when the user's input includes the number 2"_
_Expect(roboger(2).toEqual("0, Beep! Boop!"));_

_Test: "The program outputs "Beep!" when the user's input includes the number 1"_
_Expect(roboger(1).toEqual("0, Beep!"));_

_Test: "The program will prioratize the output for number 3 first then 2 then 1_
_Expect(roboger(13).toEqual(0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop, Won't you be my neighbor?));_