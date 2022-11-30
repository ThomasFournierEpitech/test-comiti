function doDevis(memberNumber, federation, sectionNumber) {
    console.log("Nombre d'adhérent: " + memberNumber)
    console.log("Fédération: " + federation)
    console.log("Nombre de section: " + sectionNumber)
    
    var memberPrice = 0;
    if (memberNumber <= 100) {
        memberPrice = 10
    } else if (memberNumber <= 200) {
        memberPrice = memberNumber * 0.1
    } else if (memberNumber <= 500) {
        memberPrice = memberNumber * 0.09
    } else if (memberNumber <= 1000) {
        memberPrice = memberNumber * 0.08
    } else if (memberNumber >= 10000) {
        memberPrice = 1000
    } else {
        memberPrice = ((memberNumber - memberNumber%1000) /1000) * 70
    }
    if (federation == "G") {
        memberPrice = memberPrice * 0.85
    }
    memberPrice = Math.round(memberPrice * 100) / 100
    
    var sectionFreeNumber = 0
    if (memberNumber >= 1000) {
        sectionFreeNumber++
    }
    if (federation == "N") {
        sectionFreeNumber++
        sectionFreeNumber++
    }
    
    var discountedSectionNumber = 0
    var sectionTarif = 5
    var sectionTarifDiscounted = 3
    
    var month = new Date().getMonth() + 1 
    const loop = sectionNumber
    for (i=1; i<=loop; i++) {
        if (i % month == 0) {
            discountedSectionNumber++
        }
    }
    
    if (federation == "B") {
        sectionTarif = sectionTarif * 0.7
    }
    
    var sectionPrice = 0
    var sectionToPay = sectionNumber
    var sectionDiscountedToPay = discountedSectionNumber
    if (sectionFreeNumber >= sectionNumber) {
        sectionToPay = 0
    } else {
        sectionToPay = sectionNumber - sectionFreeNumber
    }
    sectionFreeNumber = sectionFreeNumber - sectionNumber
    
    if (sectionFreeNumber > 0) {
        if (sectionFreeNumber >= sectionDiscountedToPay) {
            sectionDiscountedToPay = 0
        } else {
            sectionDiscountedToPay = sectionDiscountedToPay - sectionFreeNumber
        }
    }
    
    sectionPrice = sectionTarif * sectionToPay + sectionTarifDiscounted * sectionDiscountedToPay

    var fullPrice = memberPrice + sectionPrice
    var priceTTC = Math.round((fullPrice + fullPrice*0.2) * 100) / 100
    console.log("-------------------------------------")
    console.log("Prix HT adhérent: " + memberPrice + "€/mois")
    console.log("Prix HT section: " + sectionPrice + "€/mois")
    console.log("Prix HT: " + fullPrice + "€/mois")
    console.log("Prix HT: " + fullPrice*12 + "€/an")
    console.log("Prix TTC: " + priceTTC*12 + "€/an")
}
