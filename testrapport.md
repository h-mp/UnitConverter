# Testrapport 

För att köra testerna, använd följande kommando i terminalen:

```sh
npm test
```

De individuella Jest-testfallen för varje klass finns i /tests mappen. Varje klass har sin egen testfil och varje metod har testats. 
En testfall kan inkludera flera tester som testar samma funktion med olika typer av indata.

Det finns 48 tester totalt.

## Testresultat

![Jest test summary](testrapport-images/TestSummary.png)

Raderna som inte täcks av testfallen är default fallen i switch satserna. 

### InputValidator
![InputValidator tests](testrapport-images/InputValidator.png)

### ConverterSystem

![ConverterSystem tests](testrapport-images/ConverterSystem.png)

### TemperatureConverter

![TemperatureConverter tests](testrapport-images/TemperatureConverter.png)

### LengthConverter

![LengthConverter tests](testrapport-images/LengthConverter.png)

### SpeedConverter

![SpeedConverter tests](testrapport-images/SpeedConverter.png)

### WeightConverter

![WeightConverter tests](testrapport-images/WeightConverter.png)

### VolumeConverter

![VolumeConverter](testrapport-images/VolumeConverter.png)
