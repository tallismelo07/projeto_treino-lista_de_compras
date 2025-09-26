const itemAdicionar = document.getElementById("item-input");
const botaoAdicionar = document.getElementById("add-btn");

botaoAdicionar.addEventListener('click', (e) => {
    e.preventDefault();
    let itemValorAdicionado = itemAdicionar.value;
    let regex = /\d+/g;

    if(regex.test(itemValorAdicionado)) {
        alert("Voce digitou numeros, nessa lista aceitamos apenas letras. Por favor tente novamente!")
    } else {
        alert("Concluido! Item esta na lista!")
        listaItens(itemValorAdicionado);
        itemAdicionar.value = ""
    }
});


function listaItens(itemSelecionado){
    const ul = document.getElementById("shopping-list");
    const li = document.createElement("li");
    li.classList.add("list-item");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    checkbox.addEventListener("change", (e) => {
        e.preventDefault();

        if(checkbox.checked) {
            span.style.textDecoration = "line-through";
            alert("Item foi comprado com sucesso!");
        } else {
            span.style.textDecoration = "none"
        }
    })


    const span = document.createElement("span");
    span.textContent = itemSelecionado;
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("remove");
    botaoRemover.textContent = "✖";

    botaoRemover.addEventListener("click", (e) => {
        e.preventDefault();
        li.remove();
        alert("Voce deletou o item da lista!")
    })

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(botaoRemover);
    ul.appendChild(li);
}


