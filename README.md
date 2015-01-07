# JetPack

JetPack is a compilation of methods that will make your life easyer. It includes:
 * extension of the math api;
 * easy access to browser functionality;
 * Animation Class - requestAnimationFrame if available or a setTimeout fallback.
 

## Installation

    bower install lexmihaylov/JetPack
    
## API Documentation

### jPack.calc

#### jPack.calc.random (min, max)

Generates a random number between `min` value and `max` value

__Example:__

```javascript
jPack.calc.random (1, 10);
```

#### jPack.calc.round (num, precision)

Rounds a float value
 * `num` - the number that needs to be rounded
 * `precision` - number of digits after the decimal point

__Example:__

```javascript
jPack.calc.round (1.56777778, 2); // => 1.57
jPack.calc.round (1.56777778);    // => 2
```

#### jPack.calc.floor (num, precision)

Rounds down a float value
 * `num` - the number that needs to be rounded
 * `precision` - number of digits after the decimal point

__Example:__

```javascript
jPack.calc.floor (1.56777778, 2); // => 1.56
jPack.calc.floor (1.56777778);    // => 1
```

#### jPack.calc.ceil (num, precision)

Rounds up a float value
 * `num` - the number that needs to be rounded
 * `precision` - number of digits after the decimal point

__Example:__

```javascript
jPack.calc.ceil (1.3333, 2); // => 1.34
jPack.calc.ceil (1.3333);    // => 2
```
