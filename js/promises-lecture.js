import {getGithubUsers, renderGithubUser} from "./github.js";

(async() => {
    let users = await getGithubUsers();
    console.log(users);
    
    const usersGrid = document.querySelector('#userGrid');
    users.forEach(user => renderGithubUser(user, usersGrid));
    
})();