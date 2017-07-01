# theScore "the Rush" Interview Question
At theScore, we are always looking for intelligent, resourceful, full-stack developers to join our growing team. To help us evaluate new talent, we have created this take-home interview question. This question should take you no more than a few hours.

**All candidates must complete this before the possibility of an in-person interview. During the in-person interview, your submitted project will be used as the base for further extensions.**

### Why a take-home interview?
In-person coding interviews can be stressful and can hide some people's full potential. A take-home gives you a chance work in a less stressful environment and showcase your talent.

We want you to be at your best and most comfortable.

### A bit about our tech stack
As outlined in our job description, you will come across technologies which include a server-side web framework (either Ruby on Rails or a modern Javascript framework) and a front-end Javascript framework (like ReactJS)

### Understanding the problem
In this repo is the file [`rushing.json`](/rushing.json). It contains data about NFL players' rushing statistics. Each entry contains the following information
* `Player` (Player's name)
* `Team` (Player's team abreviation)
* `Pos` (Player's postion)
* `Att/G` (Rushing Attempts Per Game Average)
* `Att` (Rushing Attempts)
* `Yrds` (Total Rushing Yards)
* `Avg` (Rushing Average Yards Per Attempt)
* `Yds/G` (Rushing Yards Per Game)
* `TD` (Total Rushing Touchdowns)
* `Lng` (Longest Rush -- a `T` represents a touchdown occurred)
* `1st` (Rushing First Downs)
* `1st%` (Rushing First Down Percentage)
* `20+` (Rushing 20+ Yards Each)
* `40+` (Rushing 40+ Yards Each)
* `FUM` (Rushing Fumbles)

##### Requirements
1. Create a web app. This must be able to do the following steps
    1. Create a webpage which displays a table with the contents of `rushing.json`
    2. The user should be able to sort the players by _Total Rushing Yards_, _Longest Rush_ and _Total Rushing Touchdowns_
    3. The user should be able to filter by the player's name
    4. The user should be able to download the sorted/filtered data as a CSV

2. Update the section `Installation and running this solution` in the README file explaining how to run your code

### Submitting a solution
1. Download this repo
2. Complete the problem outlined in the `Requirements` section
3. In your personal public GitHub repo, create a new public repo with this implementation
4. Provide this link to your contact at theScore

We will evaluate you on your ability to solve the problem defined in the requirements section as well as your choice of frameworks, and general coding style.

### Help
If you have any questions regarding requirements, do not hesitate to email your contact at theScore for clarification.

### Installation and running this solution
This application uses a React SPA frontend, with a node-express backend and a postgres database.

####Installation Requirements:

node v8+ & npm

PostgreSQL (alternatively, docker + docker-compose)

#### Setup:
##### Start + Init PostgreSQL
Spin up your PostgreSQL database, or `cd` into the project root directory and run
```bash
docker-compose up -d postgres
```

Once this is running, `cd` into the `server` directory. If you are not using docker please set the environment variable defining the connection. Make sure the database is named `nfl`
```bash
DATABASE_URL=postgres://postgres@localhost:5432/nfl
```

Initialize the schema by running the `initSchema.sql` script
```bash
psql -U postgres -h localhost -f ./initSchema.sql
```

##### Download dependencies and build frontend
Frontend is built as part of the npm prepare script so a simple
```bash
npm install
```
should set up everything we need for the server to run!

##### Bootstrap database with rushing.json
Right now our app is empty! Time to load some data, run this handy script:
```bash
npm run db:bootstrap
```
You should see a message stating the process was successful.

##### Launch your server and navigate to it!
```bash
npm start
```
You should be able to navigate to `localhost:4000` in your browser now and play with the application!

#### Developing on the Frontend
If you would like to run the frontend in debug mode, first launch the server following the above instructions. Then `cd` into the `client` directory and run
```bash
npm start
```

Now you should have the frontend application running on `localhost:3000` with services being proxied to ```localhost:4000```. This includes hot-reloading and sourcemaping to make your life easier!
