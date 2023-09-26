# Language_quiz_game (MERN STACK)

 The game is a language quiz with multiple-choice questions generated randomly by the server. 

 There is an instruction section where you can find all the necessary information.
You have the freedom to try the question in different languages, including English, Hindi, and more.

If you head over to the leaderboard section, you can compare your performance with others. Your rank will be determined by your overall score.

You can also reset your progress through the option provided in your profile section.

## For Set up & run this application locally please follow these steps:-

### In Windows:
npm install -g node@18.18.0

npm install -g npm@9.8.1

### In Linux:
sudo apt-get install nodejs=18.18.0-1chl1~precise1

sudo  apt-get install npm=9.8.1-1chl1~precise1

## After that open this in any text editor like (VS Code).
Run --> npm install

This will create a node module that contains all dependencies related to the project.

## You have to create a { .env } file in the main folder which contains the 3 variables:-
MONGO_URL = " Your mongo atlas connection link"

POST = "8000"

SECERET = " A private key for JWT token encryption & decryption."

### Now we are ready with the local set up & now just run the following command in terminal & just see the magic:-

npm run dev

## Happy Coding!
