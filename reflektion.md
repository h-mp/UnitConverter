# Reflektion

## Kapitel 2: Namngivning
Eftersom i dagsläget är alla publika metoderna ganska lika varandra, tog jag med parameternamn i reflektionslistan också.

| Namn och förklaring | Reflektion och regler från Clean Code |
|--------------------|-------------------|
| **ConverterSystem** <br> Klassnamn på huvudklassen i modulen | **Class Names** </br> Namnet är en substantivfras. </br> **Don't Add Gratuitous Context** </br> Att ha System med i klassnamnet är överflödigt, eftersom det tillför inte något extra värde till förståelsen av klassens funktionalitet. Bara Converter skulle räcka. |
| **convertLength()** <br> Metodnamn på metod som omvandlar längdvärden till andra enheter. | **Method Names** </br> Namnet börjar med ett verb. </br> **Add Meaningful Context** </br> I det här fallet har jag flera metoder som använder verbet convert. För att tydligt skilja dem har jag lagt till "mätningstypen", i det här fallet length. |
| **convertMultipleValues()** <br> Metodnamn på metod som omvandlar flera värden på samma gång. | **Add Meaningful Context** </br> Metodnamnet måste berätta att metoden omvandlar många värden av samma "mätningstyp" och enhet. </br> **Avoid Disinformation** </br> Values kan vara ett alltför brett begrepp och kan tolkas på många olika sätt. Det skulle vara bättre att använda Numbers, som redan används i de flesta parametrarna. </br> **Use Intention-Revealing Names** </br> Namnet berättar tydligt vad metoden gör. |
| **conversionType** <br> Parameternamn i metoden convertMultipleValues() | **Avoid disinformation** </br> Type kan blandas ihop med typer som används i JS operatorn typeOf(). Ett bättre namn skulle vara t.ex. measurementCategory. </br> **Use Pronounceable Names** </br> Namnet är lätt att uttala i diskussion. |
| **numberToConvert** <br> Parameternamn i alla tillgängliga metoder (i metoden convertMultipleValues() kallas det numbersToConvert) | **Don’t Add Gratuitous Context** </br> Även om det gör parameternamnet tydligare, skulle bara Number räcka till i funktionskontexten som den används i. </br> **Use Searchable Names** </br> Namnet är lätt att hitta med sökfunktionen. Dock om den skulle ändras till bara Number, skulle den blandas ihop med typen number. |

Allmän reflektion:
I tidigare kursernas muntliga examinationer har jag ofta fått bra feedback om kodens läsbarhet och tydlighet. Jag har tänkt att jag namnger så tydligt som möjligt för att underlätta förståelsen för mig själv senare. Det har nämligen ofta varit lite svårt att komma in i tidigare skriven kod utan förstårbara namn. 

Det känns nyttigt att tänka lite djupare på namngivningen, då det är lätt att göra för korta, långa eller onödigt beskrivande namn. 

Jag vill ta upp ännu ett val jag gjorde med namngivningen i Converter-klasserna. Alla konverteringsmetoderna, t.ex. metersToFeet, celsiusToFahrenheit och gallonsToLiters, är skrivna utan verb. Det bryter mot reglerna i Clean Code, men jag inser att metoderna är ändå tydliga i kontextet de används i, t.ex. LengthConverter.metersToFeet. Att lägga till convertFrom framför varje existerande metodnamn gör namnen onödigt långa. Det här valet är också konsistent i varje enskild Converter klass.
