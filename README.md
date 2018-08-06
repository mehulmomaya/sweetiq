# sweetiq
repository for sweetiq test


### Prerequisites
<pre>
Install npm (version used 5.6.0)  
Install node (version used v9.5.0)  
Install mocha (version used 4.1.2) & chai (version used 5.2.0)  
</pre>
### Installing

#### Installing nodejs and npm
<pre>
For Mac   --  
Step 1 -- brew install node  

For Linux --  
step 1 - curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - 
step 2 - sudo apt-get install -y nodejs
</pre>
#### Installing mocha and chai
<pre>
npm install mocha chai --save-dev 
</pre>
## Directory Structure
<pre>
-- sweetiq  
    |-- sweetiq_test ( starting project directory)  
         |---- package.json  
         |---- calculator.js (starting file and calculator module which need to be tested)   
         |---- test (directory for testcases)  
                 |---- calculatorTest.js ( testcases to test calculator.js module )  
</pre>

## Running the tests

Command to Run Test   
<pre>
Step 1 : Go to sweetiq/sweetiq_tests    
Step 2 : npm run test   
</pre>
