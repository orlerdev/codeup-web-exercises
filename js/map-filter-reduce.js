const users = [
    {
        id: 1,
        name: "ryan",
        email: "ryan@codeup.com",
        languages: ["clojure", "javascript"],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: "luis",
        email: "luis@codeup.com",
        languages: ["java", "scala", "php"],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: "zach",
        email: "zach@codeup.com",
        languages: ["javascript", "bash"],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: "fernando",
        email: "fernando@codeup.com",
        languages: ["java", "php", "sql"],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: "justin",
        email: "justin@codeup.com",
        languages: ["html", "css", "javascript", "php"],
        yearsOfExperience: 9
    }
];

//TODO: Use .filter to create an array of objects where each user object has at least 3 languages in the languages property
const threeLanguages = users.filter(user => user.languages.length >= 3);

//TODO: Create an array of strings containing the user's email address
const emailArray = users.map(user => user.email);

//TODO: Use .reduce to get the total years experience from the list of users. Calculate the average.
const averageYears = users.reduce((avg, user, _, arr) => avg + (user.yearsOfExperience / arr.length), 0);

//TODO: Use .reduce to get the longest email from the list of users
const longestEmail = users.reduce((str, {email}) => str.length < email.length ? email : str, '')

console.log(longestEmail);

// TODO: Use .reduce to get the list of user's names in a single string.

