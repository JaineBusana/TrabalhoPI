const neighborhood = {
    0:null,
    1:{nome:"Badenfurt", endereco:"UFSC", observacao:"Fundos" },
    2:{nome: "Fidélis", endereco:"Rua imperatriz leopoldina 123", observacao:"em frente ao mercado"},
    3:{nome:"Itoupava central", endereco:"Itoupava central", observacao:"Farmácia"}
}

const selectNeighborhood =()=>{
    const select = document.getElementById("selectNeighborhood")
    const selectedValue = select.value

    const nameCardElement = document.getElementById("nameCard");
    const addressElement = document.querySelector(".address");
    const obsCardElement = document.querySelector(".obsCard");

    if (selectedValue !== "0") {
        const neighborhoodSelected = neighborhood[selectedValue];

        if (neighborhoodSelected) {
         
            nameCardElement.textContent = neighborhoodSelected.nome;
            addressElement.textContent = `${neighborhoodSelected.endereco}`;
            obsCardElement.textContent = `${neighborhoodSelected.observacao}`;
        }
    } else {
        nameCardElement.textContent = "";
        addressElement.textContent = "Endereço: ";
        obsCardElement.textContent = "Observação: ";
    }

 
}
const selectNeighborhoodValue = document.getElementById("selectNeighborhood");
selectNeighborhoodValue.addEventListener("change", selectNeighborhood )