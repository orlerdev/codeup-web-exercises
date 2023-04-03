import { keys } from './keys.js'

export const getGithubUsers = async (since = 1, perPage = 32) => {
    try {
        const url = `https://api.github.com/users?since=${since}&per_page=${perPage}`
        const options = {
            header: {
                "Authorization": `token ${keys.github2}`
            }
        }
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};


export const getGithubUser = async (username) => {
    try {
        const url = `https://api.github.com/users/${username}`
        const options = {
            header: {
                "Authorization": `token ${keys.github2}`
            }
        }
        let res = await fetch(url, options);
        let data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

export const getGithubEvents = async (username) => {
    try {
        const url = `https://api.github.com/users/events/public`
        const options = {
            header: {
                "Authorization": `token ${keys.github2}`
            }
        }
        let res = await fetch(url, options);
        let data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

export const getLastCommit = async (username) => {
    let events = await getGithubEvents(username)
    let lastCommit = events.find((e) => {
        return e.type === 'PushEvent';
    })
    return lastCommit;
}


export const renderGithubUser = (user, parent) => {
    const element = document.createElement("div");
    element.classList.add("user-card");
    element.innerHTML = `
        <div class="img-wrapper">
            <img src="${user.avatar_url}" alt="user image" class="avatar">
        </div>
        <h2>${user.login}</h2>
        <a href="${user.html_url}" target="_blank">Go to Profile</a>
        <button>Remove</button>
    `;

    element.querySelector("button").addEventListener("click", () => {
        element.remove();
    });
    parent.appendChild(element);
};
