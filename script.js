function calculateLaptopRemainingDebt() {
    const LaptopPurchasePrice = parseFloat(document.getElementById('LaptopPurchasePrice').value);
    const LaptopPurchaseDate = new Date(document.getElementById('LaptopPurchaseDate').value);
    const LaptopTerminationDate = new Date(document.getElementById('LaptopTerminationDate').value);
    // Format date to DD-MM-YYYY
    const day = String(LaptopTerminationDate.getDate()).padStart(2, '0');
    const month = String(LaptopTerminationDate.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar
    const year = LaptopTerminationDate.getFullYear();
    const formattedDateLaptop = `${day}-${month}-${year}`;

    // Format LaptopPurchaseDate to DD-MM-YYYY
  const dayP = String(LaptopPurchaseDate.getDate()).padStart(2, '0');
  const monthP = String(LaptopPurchaseDate.getMonth() + 1).padStart(2, '0');
  const yearP = LaptopPurchaseDate.getFullYear();
  const LaptopFormattedPurchaseDate = `${dayP}-${monthP}-${yearP}`;
    
    const laptopType = document.querySelector('input[name="laptopType"]:checked').value;
  
    const LaptopMonthsInUse = Math.floor((LaptopTerminationDate - LaptopPurchaseDate) / (30 * 24 * 60 * 60 * 1000));
    let LaptopRemainingMonths = 0;
    let LaptopPerMonthOff = 0;
  
    let LaptopResidualValue = 0;
    let AdministrationCosts = 100;
    let OldLaptopResidualValue = 0;
    let OldLaptopRemainingMonths = 0;
    let OldLaptopPerMonthOff = 0;
    let residualPercentage = 0;
    let percentage = 0;
    let LaptopType = '';
    let VeryOldLaptopResidualValue = 0;
    let ifMacBook = false;
    // Toon de copy-knop zodra er resultaat is
    document.getElementById("copyLaptopBtn").style.display = "inline-block";

  
    switch (laptopType) {
      case 'standard':
        LaptopType = 'Standard Windows/Surface';
        if (LaptopMonthsInUse < 48) {
          LaptopResidualValue = ((LaptopPurchasePrice * 0.95) / 48) * (48 - LaptopMonthsInUse);
          residualPercentage = 0.05 * LaptopPurchasePrice;
          percentage = 5;
          LaptopRemainingMonths = 48 - LaptopMonthsInUse;
          LaptopPerMonthOff = LaptopPurchasePrice * 0.95 / 48;
        } else if (LaptopMonthsInUse >= 48 && LaptopMonthsInUse <= 72) {
          OldLaptopResidualValue = LaptopPurchasePrice * 0.05;
          // residualPercentage = 0.1 * LaptopPurchasePrice;
          // percentage = 10;
          OldLaptopAfterUsed = 24 + (LaptopMonthsInUse - 72);
          OldLaptopRemainingMonths =  72 - LaptopMonthsInUse;
          OldLaptopPerMonthOff = OldLaptopResidualValue  / 24;
          OldLaptopResidualValue = OldLaptopPerMonthOff * OldLaptopRemainingMonths;
        } else if (LaptopMonthsInUse > 72) {
          VeryOldLaptopResidualValue = 100;
          LaptopResidualValue = 0;          
          LaptopRemainingMonths = 0;
        }
        break;
      case 'power':
        LaptopType = 'Power Windows Laptop';
        if (LaptopMonthsInUse < 48) {
          LaptopResidualValue = ((LaptopPurchasePrice * 0.90) / 48) * (48 - LaptopMonthsInUse);
          residualPercentage = 0.1 * LaptopPurchasePrice;
          percentage = 10;
          LaptopRemainingMonths = 48 - LaptopMonthsInUse;
          LaptopPerMonthOff = LaptopPurchasePrice * 0.90 / 48;
        } else if (LaptopMonthsInUse >= 48 && LaptopMonthsInUse <= 72) {
          OldLaptopResidualValue = LaptopPurchasePrice * 0.1;
          // residualPercentage = 0.1 * LaptopPurchasePrice;
          // percentage = 10;
          OldLaptopAfterUsed = 24 + (LaptopMonthsInUse - 72);
          OldLaptopRemainingMonths = 72 - LaptopMonthsInUse;
          OldLaptopPerMonthOff = OldLaptopResidualValue  / 24;
          OldLaptopResidualValue = OldLaptopPerMonthOff * OldLaptopRemainingMonths;
        } else if (LaptopMonthsInUse > 72) {
          VeryOldLaptopResidualValue = 100;
          LaptopResidualValue = 0;          
          LaptopRemainingMonths = 0;
        }
        break;
      case 'macbook':
        LaptopType = 'MacBook';
        ifMacBook = true;
        if (LaptopMonthsInUse < 60) {
          LaptopResidualValue = ((LaptopPurchasePrice * 0.95) / 60) * (60 - LaptopMonthsInUse);
          residualPercentage = 0.05 * LaptopPurchasePrice;
          percentage = 5;
          LaptopRemainingMonths = 60 - LaptopMonthsInUse;
          LaptopPerMonthOff = LaptopPurchasePrice * 0.95 / 60;
        } else if (LaptopMonthsInUse >= 60 && LaptopMonthsInUse <= 84) {
          OldLaptopResidualValue = LaptopPurchasePrice * 0.05;
          // residualPercentage = 0.1 * LaptopPurchasePrice;
          // percentage = 10;
          OldLaptopAfterUsed = 24 + (LaptopMonthsInUse - 84);
          OldLaptopRemainingMonths = 84 - LaptopMonthsInUse;
          OldLaptopPerMonthOff = OldLaptopResidualValue  / 24;
          OldLaptopResidualValue = OldLaptopPerMonthOff * OldLaptopRemainingMonths;
        } else if (LaptopMonthsInUse > 84) {
          VeryOldLaptopResidualValue = 100;
          LaptopResidualValue = 0;          
          LaptopRemainingMonths = 0;
        }
        break;
        case 'powermacbook':
          LaptopType = 'Power MacBook';
          ifMacBook = true;
          if (LaptopMonthsInUse < 60) {
            LaptopResidualValue = ((LaptopPurchasePrice * 0.90) / 60) * (60 - LaptopMonthsInUse);
          residualPercentage = 0.1 * LaptopPurchasePrice;
          percentage = 10;
          LaptopRemainingMonths = 60 - LaptopMonthsInUse;
          LaptopPerMonthOff = LaptopPurchasePrice * 0.90 / 60;
        } else if (LaptopMonthsInUse >= 60 && LaptopMonthsInUse <= 84) {
          OldLaptopResidualValue = LaptopPurchasePrice * 0.1;
          // residualPercentage = 0.1 * LaptopPurchasePrice;
          // percentage = 10;
          OldLaptopAfterUsed = 24 + (LaptopMonthsInUse - 84);
          OldLaptopRemainingMonths = 84 - LaptopMonthsInUse;
          OldLaptopPerMonthOff = OldLaptopResidualValue  / 24;
          OldLaptopResidualValue = OldLaptopPerMonthOff * OldLaptopRemainingMonths;
        } else if (LaptopMonthsInUse > 84) {
          VeryOldLaptopResidualValue = 100;
          LaptopResidualValue = 0;          
          LaptopRemainingMonths = 0;
        }
        break;
    }
  
    const LaptopRemainingDebt = LaptopResidualValue + residualPercentage + AdministrationCosts;
    const OldLaptopRemainingDebt = OldLaptopResidualValue + AdministrationCosts;

    const BTW_RATE = 0.21;
    const btwBox = (amount) => {
      const btw = amount * BTW_RATE;
      const inclBtw = amount + btw;
      return `
        <div class="btw-box">
          <span class="btw-label">Restwaarde incl. 21% BTW:</span>
          <span class="btw-amount">€${inclBtw.toFixed(2)}</span>
          <span class="btw-sub">Restwaarde Laptop excl. BTW: €${amount.toFixed(2)} (+ €${btw.toFixed(2)} BTW)</span>
        </div>`;
    };

    const LaptopResultElement = document.getElementById('LaptopResult');
    if (ifMacBook === true) {
      if (LaptopMonthsInUse >= 60 && LaptopMonthsInUse <= 84) {
        LaptopResultElement.innerHTML = `
        ${btwBox(OldLaptopRemainingDebt)}
        <strong>---Oude LAPTOP - In de periode van 24 maanden na afschrijving---</strong>
        <br>(${OldLaptopResidualValue.toFixed(2)} restant afschrijving + ${AdministrationCosts} euro administratiekosten)
        <br><br> Laptop Type: <strong> ${LaptopType} </strong>
        <br> Aankoopprijs: ${LaptopPurchasePrice} euro
        <br> Aankoopdatum: ${LaptopFormattedPurchaseDate}
        <br> Uit dienst datum: ${formattedDateLaptop}
        <br> Gebruikt totaal: ${LaptopMonthsInUse} maanden
        <br> Aantal maanden na afschrijving: ${OldLaptopAfterUsed} maanden
        <br> Afgerekend per maand na afschrijving: ${OldLaptopPerMonthOff.toFixed(2)} euro`;
      } else if (LaptopMonthsInUse > 0 && LaptopMonthsInUse < 60) {
        LaptopResultElement.innerHTML = `
        ${btwBox(LaptopRemainingDebt)}
        <br>(${LaptopResidualValue.toFixed(2)} restant afschrijving + ${residualPercentage.toFixed(2)} euro ${percentage}% van de aanschaf + ${AdministrationCosts} euro administratiekosten)
        <br><br> Laptop Type: <strong> ${LaptopType} </strong>
        <br> Aankoopprijs: ${LaptopPurchasePrice} euro
        <br> Aankoopdatum: ${LaptopFormattedPurchaseDate}
        <br> Uit dienst datum: ${formattedDateLaptop}
        <br> Gebruikt totaal: ${LaptopMonthsInUse} maanden
        <br> Resterende maanden: ${LaptopRemainingMonths} maanden
        <br> Afgerekend per maand: ${LaptopPerMonthOff.toFixed(2)} euro`;
      } else if (LaptopMonthsInUse > 84) {
        LaptopResultElement.innerHTML = `
        ${btwBox(AdministrationCosts)}
        <strong>---Alleen Administratie Kosten---</strong>
        <br><br> Laptop Type: <strong> ${LaptopType} </strong>
        <br> Aankoopprijs: ${LaptopPurchasePrice} euro
        <br> Aankoopdatum: ${LaptopFormattedPurchaseDate}
        <br> Uit dienst datum: ${formattedDateLaptop}
        <br> Gebruikt totaal: ${LaptopMonthsInUse} maanden
        <br> Afgerekend per maand: ${LaptopPerMonthOff.toFixed(2)} euro`;
      }

    } else {
      if (LaptopMonthsInUse >= 48 && LaptopMonthsInUse <= 72) {
        LaptopResultElement.innerHTML = `
        ${btwBox(OldLaptopRemainingDebt)}
        <strong>---Oude LAPTOP - In de periode van 24 maanden na afschrijving---</strong>
        <br>(${OldLaptopResidualValue.toFixed(2)} restant afschrijving + ${AdministrationCosts} euro administratiekosten)
        <br><br> Laptop Type: <strong> ${LaptopType} </strong>
        <br> Aankoopprijs: ${LaptopPurchasePrice} euro
        <br> Aankoopdatum: ${LaptopFormattedPurchaseDate}
        <br> Uit dienst datum: ${formattedDateLaptop}
        <br> Gebruikt totaal: ${LaptopMonthsInUse} maanden
        <br> Aantal maanden na afschrijving: ${OldLaptopAfterUsed} maanden
        <br> Afgerekend per maand na afschrijving: ${OldLaptopPerMonthOff.toFixed(2)} euro`;
      } else if (LaptopMonthsInUse > 0 && LaptopMonthsInUse < 48) {
        LaptopResultElement.innerHTML = `
        ${btwBox(LaptopRemainingDebt)}
        <br>(${LaptopResidualValue.toFixed(2)} restant afschrijving + ${residualPercentage.toFixed(2)} euro ${percentage}% van de aanschaf + ${AdministrationCosts} euro administratiekosten)
        <br><br> Laptop Type: <strong> ${LaptopType} </strong>
        <br> Aankoopprijs: ${LaptopPurchasePrice} euro
        <br> Aankoopdatum: ${LaptopFormattedPurchaseDate}
        <br> Uit dienst datum: ${formattedDateLaptop}
        <br> Gebruikt totaal: ${LaptopMonthsInUse} maanden
        <br> Resterende maanden: ${LaptopRemainingMonths} maanden
        <br> Afgerekend per maand: ${LaptopPerMonthOff.toFixed(2)} euro`;
      } else if (LaptopMonthsInUse > 72) {
        LaptopResultElement.innerHTML = `
        ${btwBox(AdministrationCosts)}
        <strong>---Alleen Administratie Kosten---</strong>
        <br><br> Laptop Type: <strong> ${LaptopType} </strong>
        <br> Aankoopprijs: ${LaptopPurchasePrice} euro
        <br> Aankoopdatum: ${LaptopFormattedPurchaseDate}
        <br> Uit dienst datum: ${formattedDateLaptop}
        <br> Gebruikt totaal: ${LaptopMonthsInUse} maanden
        <br> Afgerekend per maand: ${LaptopPerMonthOff.toFixed(2)} euro`;
      }

    }

    
  

    
    // LaptopResultElement.innerHTML = `
    // Restwaarde Laptop is: <b>€${LaptopRemainingDebt.toFixed(2)}</b>
    // <br>(${LaptopResidualValue.toFixed(2)} restant afschrijving + ${residualPercentage.toFixed(2)} euro ${percentage}% van de aanschaf + ${AdministrationCosts} euro administratiekosten)
    // <br><br> Laptop Type: <strong> ${LaptopType} </strong>
    // <br> Aankoopprijs: ${LaptopPurchasePrice} euro
    // <br> Gebruikt totaal: ${LaptopMonthsInUse} maanden
    // <br> Resterende maanden: ${LaptopRemainingMonths} maanden
    // <br> Afgerekend per maand: ${LaptopPerMonthOff.toFixed(2)} euro`;
    
  }



  


function calculatePhoneRemainingDebt(){
  const PhoneBudget = parseFloat(document.getElementById('PhoneBudget').value);
  const PhonePurchaseDate = new Date(document.getElementById('PhonePurchaseDate').value);
  const PhoneTerminationDate = new Date(document.getElementById('PhoneTerminationDate').value);
  // Format date to DD-MM-YYYY
  const day = String(PhoneTerminationDate.getDate()).padStart(2, '0');
  const month = String(PhoneTerminationDate.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar
  const year = PhoneTerminationDate.getFullYear();
  const formattedDatePhone = `${day}-${month}-${year}`;
    
  // Format PhonePurchaseDate to DD-MM-YYYY
  const dayP = String(PhonePurchaseDate.getDate()).padStart(2, '0');
  const monthP = String(PhonePurchaseDate.getMonth() + 1).padStart(2, '0');
  const yearP = PhonePurchaseDate.getFullYear();
  const PhoneFormattedPurchaseDate = `${dayP}-${monthP}-${yearP}`;

  const PhoneMonthsInUse = Math.floor((PhoneTerminationDate - PhonePurchaseDate) / (30 * 24 * 60 * 60 * 1000));
  let PhoneRemainingMonths = 36 - PhoneMonthsInUse;
  const PhonePerMonthOff = PhoneBudget / 36;


  let PhoneResidualValue = 0;

  if (PhoneMonthsInUse < 36) {
    PhoneResidualValue = (PhoneBudget - ((PhoneBudget / 36) * PhoneMonthsInUse));
  } else {
    PhoneResidualValue = 0;
    PhoneRemainingMonths = 0;
  }

  const PhoneResultElement = document.getElementById('PhoneResult');
  PhoneResultElement.innerHTML = `
  Restwaarde Telefoon Voucher: <b>${PhoneResidualValue.toFixed(2)}</b> euro
  <br>Aankoopprijs: ${PhoneBudget} euro
  <br>Aankopdatum: ${PhoneFormattedPurchaseDate}
  <br>Uit dienst datum: ${formattedDatePhone}  
  <br>Gebruikt totaal: ${PhoneMonthsInUse} maanden
  <br>Resterende maanden: ${PhoneRemainingMonths} maanden
  <br>Afgerekend per maand: ${PhonePerMonthOff.toFixed(2)} euro`;

  document.getElementById("copyPhoneBtn").style.display = "inline-block";


}


function calculateCoolblueRemainingDebt(){
  const CoolblueBudget = parseFloat(document.getElementById('CoolblueBudget').value);
  const CoolbluePurchaseDate = new Date(document.getElementById('CoolbluePurchaseDate').value);
  const CoolblueTerminationDate = new Date(document.getElementById('CoolblueTerminationDate').value);
    // Format date to DD-MM-YYYY
  const day = String(CoolblueTerminationDate.getDate()).padStart(2, '0');
  const month = String(CoolblueTerminationDate.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar
  const year = CoolblueTerminationDate.getFullYear();
  const formattedDateCoolblue = `${day}-${month}-${year}`;


  // Format PhonePurchaseDate to DD-MM-YYYY
  const dayP = String(CoolbluePurchaseDate.getDate()).padStart(2, '0');
  const monthP = String(CoolbluePurchaseDate.getMonth() + 1).padStart(2, '0');
  const yearP = CoolbluePurchaseDate.getFullYear();
  const CoolblueFormattedPurchaseDate = `${dayP}-${monthP}-${yearP}`;

  const CoolblueMonthsInUse = Math.floor((CoolblueTerminationDate - CoolbluePurchaseDate) / (30 * 24 * 60 * 60 * 1000));
  let CoolblueRemainingMonths = 36 - CoolblueMonthsInUse;
  const CoolbluePerMonthOff = CoolblueBudget / 36;


  let CoolblueResidualValue = 0;

  if (CoolblueMonthsInUse < 36) {
    CoolblueResidualValue = (CoolblueBudget - ((CoolblueBudget / 36) * CoolblueMonthsInUse));
  } else {
    CoolblueResidualValue = 0;
    CoolblueRemainingMonths = 0;
  }

  const CoolblueResultElement = document.getElementById('CoolblueResult');
  CoolblueResultElement.innerHTML = `
  Restwaarde Coolblue: <b>${CoolblueResidualValue.toFixed(2)}</b> euro 
  <br>Aankoopprijs: ${CoolblueBudget} euro
  <br>Aankoopdatum: ${CoolblueFormattedPurchaseDate}
  <br>Uit dienst datum: ${formattedDateCoolblue}  
  <br>Gebruikt totaal: ${CoolblueMonthsInUse} maanden
  <br>Resterende maanden: ${CoolblueRemainingMonths} maanden
  <br>Afgerekend per maand: ${CoolbluePerMonthOff.toFixed(2)} euro`;

  document.getElementById("copyCoolblueBtn").style.display = "inline-block";


  

}


function copyLaptopResult() {
    const resultText = document.getElementById("LaptopResult").innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        alert("Berekening laptop gekopieerd!");
    }).catch(err => {
        console.error("Kopiëren mislukt: ", err);
    });
}

function copyPhoneResult() {
    const resultText = document.getElementById("PhoneResult").innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        alert("Berekening Telefoon gekopieerd!");
    }).catch(err => {
        console.error("Kopiëren mislukt: ", err);
    });
}

function copyCoolblueResult() {
    const resultText = document.getElementById("CoolblueResult").innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        alert("Berekening CoolBlue gekopieerd!");
    }).catch(err => {
        console.error("Kopiëren mislukt: ", err);
    });
}




