function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        const rate = data.rates[toCurrency];
        if (rate) {
          const result = amount * rate;
  
          document.getElementById(
            "result"
          ).textContent = `${amount} ${fromCurrency} = ${result.toFixed(
            2
          )} ${toCurrency}`;
        } else {
          document.getElementById("result").textContent = "Invalid Currency.";
        }
        animateResult();
      })
      .catch((error) => console.error("Error:", error));
  }
  
  function animateResult() {
    gsap.fromTo(
      "#result",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    gsap.fromTo(
      ".converter",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5 }
    );
  });
  