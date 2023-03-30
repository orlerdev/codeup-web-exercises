export const getGithubUsers = async (since = 1, perPage = 32) => {
    try {
        let response = await fetch(`https://api.github.com/users?since=${since}&per_page=${perPage}`);
        let data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

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
