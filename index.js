const produtos = [
  {
    nome: "Uva Crimson",
    preco: 44.99,
  },
  {
    nome: "Vinho Canção",
    preco: 17.98,
  },
  {
    nome: "Água de coco",
    preco: 8.99,
  },
  {
    nome: "Mamão",
    preco: 9.98,
  },
  {
    nome: "Água tônica",
    preco: 17.98,
  },
];

const body = document.querySelector("body");
body.classList.add("container");

const main = document.createElement("main");

const h1 = document.createElement("h1");
h1.innerHTML = "Virtual Market";

const div_table = document.createElement("div");
div_table.classList.add("table");

const h3 = document.createElement("h3");
h3.innerHTML = "Item";

const span = document.createElement("span");
span.innerHTML = "Preço";

const ul = document.createElement("ul");
ul.classList.add("lista");

div_table.append(h3, span);

let soma = 0;

for (let i = 0; i < produtos.length; i++) {
  let li = document.createElement("li");

  let p = document.createElement("p")
  p.innerText = produtos[i].nome;

  let div_item = document.createElement("div");
  
  let span = document.createElement("span");
  span.innerText = `R$ ${produtos[i].preco}`;
  
  li.append(p, span)

  div_item.classList.add(`item_${i + 1}`);

  div_item.append(li);

  ul.append(div_item);
  
  soma += produtos[i].preco;
}

const section = document.createElement("section");
section.classList.add("finalizar");

const div_total_fim = document.createElement("div");
div_total_fim.classList.add("total_fim");

const h3_total = document.createElement("h3");
h3_total.innerHTML = "Total";

const button = document.createElement("button");
button.innerHTML = "Finalizar compra";
button.classList = "button";

const span_total = document.createElement("span");
span_total.innerHTML = `R$ ${soma.toFixed(2)}`;

div_total_fim.append(h3_total, span_total);

section.append(div_total_fim, button);

main.append(h1, div_table, ul, section);

body.append(main);
