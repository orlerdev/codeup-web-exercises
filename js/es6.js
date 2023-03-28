const users = [
    {
        name: "zach",
        email: "zach@codeup.com",
        languages: ["javascript", "bash"]
    },
    {
        name: "ryan",
        email: "ryan@codeup.com",
        languages: ["clojure", "javascript"]
    },
    {
        name: "luis",
        email: "luis@codeup.com",
        languages: ["java", "scala", "php"]
    },
    {
        name: "fernando",
        email: "fernando@codeup.com",
        languages: ["java", "php", "sql"]
    },
    {
        name: "justin",
        email: "justin@codeup.com",
        languages: ["html", "css", "javascript", "php"]
    }
];

users.push({ name: "jared", email: "orlerdev@gmail.com", languages: ["html", "css", "javascript", "java"] });
const name = "jared";
const email = "orlerdev@gmail.com";
const languages = ["html", "css", "javascript"];

users.push({
    name,
    email,
    languages
});

let emails = [];
let names = [];

users.forEach(user => emails.push(user.email));
users.forEach(user => names.push(user.name));

let developers = [];
users.forEach(function ({ name, email, languages }) {
    developers.push(`${name}'s email is ${email}. ${name} knows ${languages}.`);
});

let list = "<ul>";

developers.forEach(function (developer) {
    list += "<li>" + developer + "</li>";
});

list += "</ul>";

for (const developer in developers) {
    `${list}<li>${developer}</li>`;
}
list = "</ul>";

