// nome = prompt("Qual é o nome do vinho? ");
// tipo = prompt("Qual é o tipo do vinho? ");
// safra = prompt("Qual é a safra do vinho? ");
// quantidade = prompt("Qual é a quantidade de vinhos? ");
// console.log([nome, tipo, safra, quantidade]);
// alert("Para acessar as informações do seu cadastro, por gentileza olhe o console");

let counter = 1;
let lowStockCounter = 0;
let oldestHarvestYear = 0;
let oldestHarvestWine = "";

function showMessage(message){
    alert(message);
}


function isStockLow(quant){
    if (quant < 5){
        lowStockCounter++;
        return true
    }
}

function classifyWine(){
    let wineClass = prompt("O vinho é : \n1- Jovem \n2- Amadurecido \n3- Antigo \nDigite o número correspondente: ");
    
    switch (wineClass){
        case "1":
            return "Jovem";
        case "2":
            return "Amadurecido";
        case "3":
            return "Antigo";
        default:
            showMessage("Digite um valor válido.")
            classifyWine();
    }
}
                
function updateWinery(){
    let name = prompt("Digite o nome do vinho: (Ou 0 para encerrar o programa)");
    
    if (name == "0"){
        showMessage(`Número de cadastros feitos: ${counter - 1}\nNúmero de vinhos com estoque baixo: ${lowStockCounter} \nVinho com a safra mais antiga: ${oldestHarvestWine} (${oldestHarvestYear})`)
        return;
    }
    
    let type = prompt("Digite o tipo do vinho: ");
    let harvest = parseInt(prompt("Digite a safra do vinho: "));
    let quant = parseInt(prompt("Digite a quantidade de garrafas do vinho: "))


    eval(`var name${counter} = "${name}"`);
    eval(`var type${counter} = "${type}"`);
    eval(`var harvest${counter} = parseInt("${harvest}")`);
    eval(`var quant${counter} = parseInt("${quant}")`);
    
    if (eval(`validateEntry(name${counter}, type${counter}, harvest${counter}, quant${counter})`) == "Entradas válidas."){

    }
    else{
        showMessage(eval(`validateEntry(name${counter}, type${counter}, harvest${counter}, quant${counter})`));
        updateWinery();
        return;
    }

    if (counter == 1){
        oldestHarvestWine = name1;
        oldestHarvestYear = harvest1;
    }
    else{
        if (eval(`harvest${counter}`) < oldestHarvestYear){
            oldestHarvestYear = eval(`harvest${counter}`);
            oldestHarvestWine = eval(`name${counter}`);
        }
    }


    eval(`isStockLow(quant${counter})`);
    eval(`var wineClass${counter} = classifyWine()`)

    counter++;

    updateWinery()
}

function validateEntry(name, type, harvest, quant){
    if (typeof name == "string"){
        
    }
    else{
        return "Nome inválido.";
    }
    if (typeof type == "string"){
        
    }
    else{
        return "Tipo inválido.";
    }if (typeof harvest == "number" && harvest <= 2026){
        
    }
    else{
        console.log(typeof harvest);
        console.log(harvest);
        return "Safra inválida.";
    }if (typeof quant == "number" && quant > 0){
        
    }
    else{
        return "Quantidade inválida.";
    }

    return "Entradas válidas.";
}

updateWinery()