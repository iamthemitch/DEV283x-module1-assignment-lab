# SETUP PROJECT

~~~
workingDir="Assignment_1_Submissions_-_CSV_to_JSON_Converter"
mkdir ${workingDir}
cd ${workingDir}
npm init -y
npm i csvtojson@2 -E
~~~

# RUN PROJECT

~~~
npm install
node convert.js
~~~
or 
~~~
npm install
node convert.js customer-data.csv
~~~

# QUESTIONS

1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?
> As learn in this first module, why redevelop form scratch features when a lot of librairies are available to be reused. So I picked up csvtojson lib for this assignment.
> The code run with a default input file, but also accept filename as arguments, based on the web crawler example.
> I started something to handle csv>json and json>csv, but it's out of scope.
> I faced issue with the initial JSON object, which required to be stringify in order to be write to file. 

2. How did you test your project to verify that it works? 
> Run the code and verified the customer-data.json output file.

3. Let us know if anything doesn't work as intended so your reviewer will know ahead of time
> Everything working as expected.
