<script>
const data = {
  "Cloud": "AWS, Azure, GCP - Cloud infrastructure design & deployment",
  "DevOps": "CI/CD, Jenkins, Git, Terraform automation pipelines",
  "Containers": "Docker & Kubernetes microservices management",
  "Linux": "RHEL, Ubuntu server administration & security"
};

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {

    let title = card.querySelector("h3").innerText;

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = data[title];

    document.getElementById("skillModal").style.display = "flex";
  });
});

function closeModal(){
  document.getElementById("skillModal").style.display = "none";
}

window.onclick = function(e){
  if(e.target.id === "skillModal"){
    closeModal();
  }
}
</script>