const username="Augustine-chukwuma";
const repoContainer=document.getElementById("repo-container");

fetch (`https://api.github.com/user/${username}/repos`)
.then(res=>res.josn())
.then (repos=>{
    repos.slice(0,6).forEach(repo=> {
   const card=document.createElement("div");
   card.className="project-card";
   card.innerHTML=`
   <h4>${repo.name}</h4>
   <p>${repo.description || "project description coming soon."}</p>
   <a href="${repo.html_url}" target="_blank" >View on Github</a>`;
   repoContainer.appendChild(card);     
    });
});
