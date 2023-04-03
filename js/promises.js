import { getGithubUser,getLastCommit } from "./github.js";

const getUser = await getGithubUser('orlerdev');

let lastCommit = await getLastCommit('orlerdev');
console.log(getLastCommit);

const requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = 4000;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout");
            } else {
                resolve(`Here's your requested data from ${url}`);
            }
        }, delay);
    });
};
