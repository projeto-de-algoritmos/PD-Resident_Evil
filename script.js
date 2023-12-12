var weapons = [
    {
        name: "Blacktail",
        imgSrc: "img/Blacktail.jpg",
        class: "pistol",
        alt: "Blacktail",
        damage: 3.60,
        capacity: 13,
        weight: 6.0 // Peso da arma
    },
    {
        name: "Bolt",
        imgSrc: "img/Bolt.png",
        class: "pistol",
        alt: "Bolt Thrower",
        damage: 2.40,
        capacity: 20,
        weight: 6.0 // Peso da arma
    },
    {
        name: "Broken",
        imgSrc: "img/Broken.png",
        class: "pistol",
        alt: "Broken Butterfly",
        damage: 40.5,
        capacity: 10,
        weight: 6.0 // Peso da arma
    },
    {
        name: "Chicago",
        imgSrc: "img/Chicago.jpg",
        class: "rifle",
        alt: "Chicago",
        damage: 2.00,
        capacity: 100,
        weight: 10.0 // Peso da arma
    },
    {
        name: "CQBR",
        imgSrc: "img/CQBR.png",
        class: "rifle",
        alt: "CQBR AR",
        damage: 5.10,
        capacity: 32,
        weight: 10.0 // Peso da arma
    },
    {
        name: "Handcannon",
        imgSrc: "img/Handcannon.png",
        class: "pistol",
        alt: "Handcannon",
        damage: 36.0,
        capacity: 6,
        weight: 6.0 // Peso da arma
    },
    {
        name: "Killer",
        imgSrc: "img/Killer.png",
        class: "pistol",
        alt: "Killer7",
        damage: 28.0,
        capacity: 15,
        weight: 6.0 // Peso da arma
    },
    {
        name: "LE",
        imgSrc: "img/LE.jpg",
        class: "rifle",
        alt: "LE 4",
        damage: 1.20,
        capacity: 60,
        weight: 10.0 // Peso da arma
    },
    {
        name: "Matilda",
        imgSrc: "img/Matilda.jpg",
        class: "pistol",
        alt: "Matilda",
        damage: 2.00,
        capacity: 60,
        weight: 6.0 // Peso da arma
    },
    {
        name: "Punisher",
        imgSrc: "img/Punisher.jpg",
        class: "pistol",
        alt: "Punisher",
        damage: 1.90,
        capacity: 24,
        weight: 6.0 // Peso da arma
    },
    {
        name: "Red-9",
        imgSrc: "img/Red-9.jpg",
        class: "pistol",
        alt: "Red-9",
        damage: 4.05,
        capacity: 16,
        weight: 6.0 // Peso da arma
    },
    {
        name: "Riot",
        imgSrc: "img/Riot.png",
        class: "rifle",
        alt: "Riot Gun",
        damage: 19.2,
        capacity: 12,
        weight: 10.0 // Peso da arma
    },
    {
        name: "Sentinel",
        imgSrc: "img/Sentinel.jpg",
        class: "pistol",
        alt: "Sentinel Nine",
        damage: 1.9,
        capacity: 31,
        weight: 6.0 // Peso da arma
    },
    {
        name: "SG-09",
        imgSrc: "img/SG-09.jpg",
        class: "pistol",
        alt: "SG-09 R",
        damage: 2.00,
        capacity: 18,
        weight: 6.0 // Peso da arma
    },
    {
        name: "Skull",
        imgSrc: "img/Skull.png",
        class: "rifle",
        alt: "Skull Shaker",
        damage: 18.1,
        capacity: 6,
        weight: 10.0 // Peso da arma
    },
    {
        name: "SR",
        imgSrc: "img/SR.png",
        class: "rifle",
        alt: "SR M1903",
        damage: 10.6,
        capacity: 13,
        weight: 10.0 // Peso da arma
    },
    {
        name: "Stingray",
        imgSrc: "img/Stingray.png",
        class: "rifle",
        alt: "Stingray",
        damage: 4.90,
        capacity: 18,
        weight: 10.0 // Peso da arma
    },
    {
        name: "Striker",
        imgSrc: "img/Striker.png",
        class: "rifle",
        alt: "Striker",
        damage: 16.2,
        capacity: 48,
        weight: 10.0 // Peso da arma
    },
    {
        name: "TMP",
        imgSrc: "img/TMP.jpg",
        class: "pistol",
        alt: "TMP",
        damage: 1.65,
        capacity: 70,
        weight: 6.0 // Peso da arma
    },
    {
        name: "W-870",
        imgSrc: "img/W.png",
        class: "rifle",
        alt: "W-870",
        damage: 20.2,
        capacity: 10,
        weight: 10.0 // Peso da arma
    }
];

var armasUsuario = [];
const capacity = 70.0;

// Função para adicionar arma
function adicionarArma(armaId, armaNome) {
    // Verifica se a arma já foi adicionada para evitar duplicatas
    if (armasUsuario.includes(armaId)) {
        alert('Arma já adicionada!');
        return;
    }

    // Verifica a capacidade da mochila
    if (calcularPesoTotal() + obterPesoArma(armaId) > capacity) {
        alert('Capacidade da mochila excedida!');
        return;
    }

    // Adiciona a arma à lista de armas selecionadas
    armasUsuario.push(armaId);

    // Atualiza a exibição das armas selecionadas
    atualizarArmasUsuario();
}

// Função para calcular o peso total das armas do usuário
function calcularPesoTotal() {
    var pesoTotal = 0;

    armasUsuario.forEach(function (armaId) {
        pesoTotal += obterPesoArma(armaId);
    });

    return pesoTotal;
}

// Função para obter o peso de uma arma (substitua esta função com informações reais)
function obterPesoArma(armaId) {
    // Substitua isso pela lógica real para obter o peso da arma com base no ID
    // Aqui, estou usando um valor fixo de 10 como exemplo.
    return 10;
}

// Função para atualizar a exibição das armas selecionadas
function atualizarArmasUsuario() {
    var listaArmasUsuario = document.getElementById('armasUsuario');
    listaArmasUsuario.innerHTML = '';

    // Adiciona cada arma à lista
    armasUsuario.forEach(function (armaId) {
        var arma = weapons.find(function (w) { return w.name === armaId; });

        if (arma) {
            var itemLista = document.createElement('div');
            itemLista.textContent = `${arma.name} - Dano: ${arma.damage.toFixed(2)}, Capacidade: ${arma.capacity}`;
            listaArmasUsuario.appendChild(itemLista);
        }
    });

    // Exibe o peso total das armas do usuário
    var pesoTotalElement = document.createElement('div');
    pesoTotalElement.textContent = 'Peso Total: ' + calcularPesoTotal().toFixed(2) + ' / ' + capacity;
    listaArmasUsuario.appendChild(pesoTotalElement);
}

document.addEventListener("DOMContentLoaded", function () {
    knapsack(weapons, 70);
    console.log("Script rodando!");

    // Adicione o código para exibir as armas selecionadas na div
    const armasSelecionadasDiv = document.getElementById("armasSelecionadas");

    // Simule o resultado do seu algoritmo de mochila dinâmica
    
    const result = knapsack(weapons, capacity);

    // Use os resultados reais do algoritmo para criar o array de armas selecionadas
    const armasSelecionadas = result.selectedWeapons;

    // Construa o HTML para exibir as armas selecionadas
    const htmlArmasSelecionadas = armasSelecionadas.map(arma => `
        <div>
            <strong>${arma.name}</strong> - Dano: ${arma.damage}, Capacidade: ${arma.capacity}
        </div>
    `).join('');

    // Adicione o HTML à div
    armasSelecionadasDiv.innerHTML = htmlArmasSelecionadas;
  });

function knapsack(weapons, capacity) {
    const n = weapons.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const { damage, weight, capacity: weaponCapacity } = weapons[i - 1];
        for (let w = 1; w <= capacity; w++) {
            if (weight <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + damage * weaponCapacity);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    let result = dp[n][capacity];
    let w = capacity;
    const selectedWeapons = [];

    for (let i = n; i > 0 && result > 0; i--) {
        if (result !== dp[i - 1][w]) {
            const { name, damage, capacity: weaponCapacity } = weapons[i - 1];
            selectedWeapons.push({ name, damage, capacity: weaponCapacity });
            result -= damage * weaponCapacity;
            w -= weapons[i - 1].weight;
        }
    }

    return { totalDamage: dp[n][capacity], selectedWeapons };
}

