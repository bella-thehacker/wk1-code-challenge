
# Wk1-Code-Challenge - Toy Problems


## Prerequisites: 

1. Create a repository on your GitHub account. 

    **NB: One folder, with 3-4 files for each solution. Please note that a single file should only hold one solution.**

2. Use JavaScript to wire down the solution.

3. Push the solution to the above repository once done.

4. Submit the repository link for grading.

5. Ensure your repository has a well written README.

NOTE: You are required to complete ALL the challenges.

## System Requirements

- Node 18+
- A browser capable of running Javascript (Chrome, Firefox, Safari 0r Edge)
- Operating System (Windows 10, Mac0s, Linux, etc.)
- A text editor capable of running Javascript (Visual Studio Code, Vim Nano, Emacs, Atom, Sublime Text, etc.)
- RAM > 4GB
- Disk space > 1GB

## Installation
To use this repo, follow this steps:
### Alternative One
1. Open your terminal/CLI on your computer.
2. Clone the repository by running the following command:
        `git clone git@github.com:bella-thehacker/wk1-code-challenge.git`

3. Moving to the folder by using the "cd" command
4. Open the folder by typing code . to open visual studio code.(Other programs would require another command).


## Content of Folder

### gradegenerator file.
It is a file that contains a function that can be used to generate the grade of a student based on the marks the got in a test. e.g if test mark is = 89 then the output would be "A". If the marks input by the user is greater than 100 or less than 0 then the output will be **"invalid score"** and if the user inputs words instead of numbers the output will be **"invalid input"**


### speeddetector file.
It is a program used to award points based on the difference of speed limit from the actual speed recorded from a driver. the current speed limit is set at 70km/h.For every 5km/h that the speed limit is exceeded then one point is given. if the points exceed 12 then the output would be license suspended. Math.floor is used to make the points integers when the speed recorded is not divisible by 5.


### Salary HTML and JS files.
this contains both a html and js file. This program calculates the net salary of a person deducting ****PAYE, NHIF** and **NSSF**** based on Kenya's current tax system. the HTML file provides an interface where the user can place their gross salary and have it automatically calculated for them. the HTML file uses a form like interface to make it easy for the user to input data.Each form being calculated in the js file is placed as readonly in the HTML file so that when javascript does the calculations the output is seen on the HTML browser. The javascript file uses document.f1 to locate the correct areas where the salary can be calculated.


### bubbleSort.
This file uses a function to arrange the values of an array from smallest to largest using the **.sort((a,b) => a-b);**. Calling the function without any parameters will give the output.


## Credits

- I employed the help of [www.w3schools.com] I was able to come up with the syntax of nssf salary  

- I used [www.chatgtp.com] https://chatgpt.com/c/cdfb6228-b02f-45ea-a03d-0f36495b2517. to help me understand how the Kenyan taxation on salary works because before this I had no idea of the taxation rates in Kenya.i was also able to link my js file to the correct html files using questions i asked chat gtp.

 - I was also able to get the idea of an interface from [www.youtube.com] where i found a couple of videos that helped me make my javascript file and the html file https://www.youtube.com/results?search_query=how+to+calculate+net+salary+with+javascript


Click this link to see the live website [https://github.com/bella-thehacker/wk1-code-challenge.git]

## Privacy and Copyright
>>>>>>> 5b46c03 (modified readme)
Copyright (c) [2024] [Ivy Nyambura]

@@ -71,3 +143,13 @@ AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
<<<<<<< HEAD







