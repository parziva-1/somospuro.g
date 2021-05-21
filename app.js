const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const templateCentrado = document.getElementById("template-centrado").content;
const centrado = document.getElementById("cards");
const fragment = document.createDocumentFragment();


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const fetchData = async () => {
    try {
        const res = await fetch('https://sandbox.wompi.co/v1/transactions/' + id);
        const data = await res.json();
        console.log(data.data)
        pintarData(data);
    } catch (error) {
        console.log(error)
    }
}

const pintarData = (data) => {
    templateCentrado.querySelectorAll("span")[0].textContent = data.data.merchant.name
    templateCentrado.querySelectorAll("span")[1].textContent = data.data.status
    templateCentrado.querySelectorAll("span")[2].textContent = data.data.merchant.contact_name
    templateCentrado.querySelectorAll("span")[3].textContent = data.data.created_at
    
    const clone = templateCentrado.cloneNode(true)
    fragment.appendChild(clone)
    centrado.appendChild(fragment)

}