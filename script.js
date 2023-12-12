var weapons = [
    {
        name: "Blacktail",
        imgSrc: "img/Blacktail.jpg",
        class: "pistol",
        alt: "Blacktail",
        damage: 3.60,
        capacity: 13,
        weight: 6.0
    },
    {
        name: "Bolt",
        imgSrc: "img/Bolt.png",
        class: "pistol",
        alt: "Bolt Thrower",
        damage: 2.40,
        capacity: 20,
        weight: 6.0
    },
    {
        name: "Broken",
        imgSrc: "img/Broken.png",
        class: "pistol",
        alt: "Broken Butterfly",
        damage: 40.5,
        capacity: 10,
        weight: 6.0
    },
    {
        name: "Chicago",
        imgSrc: "img/Chicago.jpg",
        class: "rifle",
        alt: "Chicago",
        damage: 2.00,
        capacity: 100,
        weight: 10.0
    },
    {
        name: "CQBR",
        imgSrc: "img/CQBR.png",
        class: "rifle",
        alt: "CQBR AR",
        damage: 5.10,
        capacity: 32,
        weight: 10.0
    },
    {
        name: "Handcannon",
        imgSrc: "img/Handcannon.png",
        class: "pistol",
        alt: "Handcannon",
        damage: 36.0,
        capacity: 6,
        weight: 6.0
    },
    {
        name: "Killer",
        imgSrc: "img/Killer.png",
        class: "pistol",
        alt: "Killer7",
        damage: 28.0,
        capacity: 15,
        weight: 6.0
    },
    {
        name: "LE-5",
        imgSrc: "img/LE.jpg",
        class: "rifle",
        alt: "LE 4",
        damage: 1.20,
        capacity: 60,
        weight: 10.0
    },
    {
        name: "Matilda",
        imgSrc: "img/Matilda.jpg",
        class: "pistol",
        alt: "Matilda",
        damage: 2.00,
        capacity: 60,
        weight: 6.0
    },
    {
        name: "Punisher",
        imgSrc: "img/Punisher.jpg",
        class: "pistol",
        alt: "Punisher",
        damage: 1.90,
        capacity: 24,
        weight: 6.0
    },
    {
        name: "Red-9",
        imgSrc: "img/Red-9.jpg",
        class: "pistol",
        alt: "Red-9",
        damage: 4.05,
        capacity: 16,
        weight: 6.0
    },
    {
        name: "Riot",
        imgSrc: "img/Riot.png",
        class: "rifle",
        alt: "Riot Gun",
        damage: 19.2,
        capacity: 12,
        weight: 10.0
    },
    {
        name: "Sentinel",
        imgSrc: "img/Sentinel.jpg",
        class: "pistol",
        alt: "Sentinel Nine",
        damage: 1.9,
        capacity: 31,
        weight: 6.0
    },
    {
        name: "SG-09",
        imgSrc: "img/SG-09.jpg",
        class: "pistol",
        alt: "SG-09 R",
        damage: 2.00,
        capacity: 18,
        weight: 6.0
    },
    {
        name: "Skull",
        imgSrc: "img/Skull.png",
        class: "rifle",
        alt: "Skull Shaker",
        damage: 18.1,
        capacity: 6,
        weight: 10.0
    },
    {
        name: "SR-M1903",
        imgSrc: "img/SR.png",
        class: "rifle",
        alt: "SR M1903",
        damage: 10.6,
        capacity: 13,
        weight: 10.0
    },
    {
        name: "Stingray",
        imgSrc: "img/Stingray.png",
        class: "rifle",
        alt: "Stingray",
        damage: 4.90,
        capacity: 18,
        weight: 10.0
    },
    {
        name: "Striker",
        imgSrc: "img/Striker.png",
        class: "rifle",
        alt: "Striker",
        damage: 16.2,
        capacity: 48,
        weight: 10.0
    },
    {
        name: "TMP",
        imgSrc: "img/TMP.jpg",
        class: "pistol",
        alt: "TMP",
        damage: 1.65,
        capacity: 70,
        weight: 6.0
    },
    {
        name: "W-870",
        imgSrc: "img/W.png",
        class: "rifle",
        alt: "W-870",
        damage: 20.2,
        capacity: 10,
        weight: 10.0
    }
];

var armasUsuario = [];
const capacity = 70.0;

// Função para adicionar arma
function adicionarArma(armaId, armaNome) {
    if (armasUsuario.includes(armaId)) {
        alert('Arma já adicionada!');
        return;
    }

    if (calcularPesoTotal() + obterPesoArma(armaId) > capacity) {
        alert('Capacidade da mochila excedida!');
        return;
    }

    armasUsuario.push(armaId);

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

// Função para obter o peso de uma arma
function obterPesoArma(armaId) {
    const arma = weapons.find(w => w.name === armaId);

    return arma ? arma.weight : 0;
}

// Função para atualizar a exibição das armas selecionadas
function atualizarArmasUsuario() {
    var listaArmasUsuario = document.getElementById('armasUsuario');
    listaArmasUsuario.innerHTML = '';

    armasUsuario.forEach(function (armaId) {
        var arma = weapons.find(function (w) { return w.name === armaId; });

        if (arma) {
            var itemLista = document.createElement('div');
            itemLista.innerHTML = `<strong>${arma.name}</strong> - Dano: ${arma.damage.toFixed(2)}, Capacidade: ${arma.capacity}`;
            listaArmasUsuario.appendChild(itemLista);
        }
    });

    var pesoTotalElement = document.createElement('div');
    pesoTotalElement.innerHTML = `Peso Total: ${calcularPesoTotal().toFixed(2)} / ${capacity}<br>Dano Total: ${calcularDanoTotalUsuario().toFixed(2)}`;
    listaArmasUsuario.appendChild(pesoTotalElement);
}

document.addEventListener("DOMContentLoaded", function () {
    knapsack(weapons, 70);
    console.log("Script rodando!");

    const armasSelecionadasDiv = document.getElementById("armasSelecionadas");
    
    const result = knapsack(weapons, capacity);

    const armasSelecionadas = result.selectedWeapons;

    const htmlArmasSelecionadas = armasSelecionadas.map(arma => `
        <div>
            <strong>${arma.name}</strong> - Dano: ${arma.damage}, Capacidade: ${arma.capacity}
        </div>
    `).join('');

    armasSelecionadasDiv.innerHTML = htmlArmasSelecionadas;

    var pesoTotalElement = document.createElement('div');
    pesoTotalElement.textContent = 'Dano Total Melhores Armas: ' + calcularDanoTotalMelhoresArmas().toFixed(2);
    armasSelecionadasDiv.appendChild(pesoTotalElement);
});

// Função para calcular o dano total das armas do usuário
function calcularDanoTotalUsuario() {
    var danoTotalUsuario = 0;

    armasUsuario.forEach(function (armaId) {
        var arma = weapons.find(function (w) { return w.name === armaId; });
        if (arma) {
            danoTotalUsuario += arma.damage * arma.capacity;
        }
    });

    return danoTotalUsuario;
}

// Função para calcular o dano total das melhores armas
function calcularDanoTotalMelhoresArmas() {
    var danoTotalMelhoresArmas = 0;

    const armasSelecionadas = knapsack(weapons, capacity).selectedWeapons;

    armasSelecionadas.forEach(function (arma) {
        danoTotalMelhoresArmas += arma.damage * arma.capacity;
    });

    return danoTotalMelhoresArmas;
}

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

