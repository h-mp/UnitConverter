# Testrapport 

För att köra testerna, använd följande kommando i terminalen:

```sh
npm test
```

De individuella Jest-testfallen för varje klass finns i /tests mappen. Varje klass har sin egen testfil. 

Det finns 48 tester totalt.

## Testresultat

### InputValidator
| Vad som testats | Hur det har testats | Testresultat |
|----------------------------------|---------------------|--------------|
| Validating input type number | Jest | OK |
| Validating input type string | Jest | OK |
| Validating positive number | Jest | OK |
| Validating Celsius temperature range | Jest | OK |
| Validating Fahrenheit temperature range | Jest | OK |

### ConverterSystem
| Vad som testats | Hur det har testats | Testresultat |
|----------------------------------|---------------------|--------------|
| Check temperature conversion | Jest | OK |
| Check input validation in temperature conversion | Jest | OK |
| Check length conversion | Jest | OK |
| Check input validation in length conversion | Jest | OK |
| Check weight conversion | Jest | OK |
| Check input validation in weight conversion | Jest | OK |
| Check volume conversion | Jest | OK |
| Check input validation in volume conversion | Jest | OK |

### ConverterSelector
| Vad som testats | Hur det har testats | Testresultat |
|----------------------------------|---------------------|--------------|
| Converting temperature from Celsius | Jest | OK |
| Converting temperature from Fahrenheit | Jest | OK |
| Converting length from meters | Jest | OK |
| Converting length from feet | Jest | OK |
| Converting length from centimeters | Jest | OK |
| Converting length from inches | Jest | OK |
| Converting weight from kilograms | Jest | OK |
| Converting weight from pounds | Jest | OK |
| Converting weight from grams | Jest | OK |
| Converting weight from ounches | Jest | OK |
| Converting volume from liters | Jest | OK |
| Converting volume from gallons | Jest | OK |
| Converting volume from pints | Jest | OK |
| Converting volume from deciliters | Jest | OK |
| Converting volume from cups | Jest | OK |

### TemperatureConverter
| Vad som testats | Hur det har testats | Testresultat |
|----------------------------------|---------------------|--------------|
| Converting Fahrenheit to Celsius | Jest | OK |
| Converting Celsius to Fahrenheit | Jest | OK |
| Validating input | Jest | OK |

### LengthConverter
| Vad som testats | Hur det har testats | Testresultat |
|----------------------------------|---------------------|--------------|
| Converting meters to feet | Jest | OK |
| Converting feet to meters | Jest | OK |
| Converting centimeters to inches | Jest | OK |
| Converting inches to centimeters | Jest | OK |
| Validating input | Jest | OK |

### WeightConverter
| Vad som testats | Hur det har testats | Testresultat |
|----------------------------------|---------------------|--------------|
| Converting kilograms to pounds | Jest | OK |
| Converting pounds to kilograms | Jest | OK |
| Converting grams to ounces | Jest | OK |
| Converting ounces to grams | Jest | OK |
| Validating input | Jest | OK |

### VolumeConverter
| Vad som testats | Hur det har testats | Testresultat |
|----------------------------------|---------------------|--------------|
| Converting gallons to liters | Jest | OK |
| Converting liters to gallons | Jest | OK |
| Converting pints to liters | Jest | OK |
| Converting liters to pints | Jest | OK |
| Converting cups to deciliters | Jest | OK |
| Converting deciliters to cups | Jest | OK |
| Validating input | Jest | OK |
