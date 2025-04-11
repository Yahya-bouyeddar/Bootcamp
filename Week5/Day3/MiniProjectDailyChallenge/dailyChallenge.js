let inputUser = document.getElementById("inputUser");
let result = document.getElementById("result");
let button = document.getElementById("button");
let selectCurrency = document.getElementById("selectCurrency");
let Select1 = document.getElementById("Select1");
// let option1;
// let option2;
let choiceUser;
let resultat = document.getElementById("resultat");

async function getCurrencies() {
  try {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/4959d7aa68804277acae8ddc/codes"
    );

    if (!response.ok) {
      throw new Error("erreur", response.status);
    }

    const data = await response.json();

    if (!Array.isArray(data.supported_codes)){
      throw new Error("unsuported data")
    }

    return data.supported_codes;
  } catch (error) {
    console.error("une erreur s est produite", error);
    return [];
  }
}

async function getResult(option1, option2) {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/4959d7aa68804277acae8ddc/pair/${option1}/${option2}`
    );

    if (!response.ok) {
      throw new Error("erreur", response.status);
    }

    const data = await response.json();
    return data.conversion_rate;
  } catch (error) {
    console.error("une errer s est produite", error);
  }
}

button.addEventListener("click", async function getR() {
  choiceUser = inputUser.value;
  const _option1 = Select1.value
  const _option2 = selectCurrency.value

  const conversionRate = await getResult(_option1, _option2);

  if (conversionRate) {
    resultat.textContent = conversionRate * choiceUser;
  }
});


(async function main() {
  const currenciesData = await getCurrencies();

  currenciesData.forEach((item) => {
    const option = document.createElement("option");
    option.value = item[0];
    option.textContent = `${item[0]} -- ${item[1]}`;
    Select1.appendChild(option);
    selectCurrency.appendChild(option.cloneNode(true));
  });


})()

