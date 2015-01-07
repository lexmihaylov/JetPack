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

#### jPack.calc.percentage (part, whole)

Calculates the percentage value
 * `part` - value of part
 * `whole` - value of total

__Example:__

```javascript
jPack.calc.percentage (1, 2); // => 50
```

#### jPack.calc.radToDeg (radians)

Converts radians to degrees
 * `radians` - angle value in radians

__Example:__

```javascript
jPack.calc.radToDeg(Math.PI/2) // => 90
```

#### jPack.calc.degToRad (degrees)

Converts degrees to radians
 * `degrees` - angle value in degrees

__Example:__

```javascript
jPack.calc.degToRad(90) // => 1.5707963267948966
```

#### jPack.calc.rectIntersect (rect1, rect2)

Calculates the intersection between two rectangles and returns a new rectangle
 * `rect1`
 * `rect2`

__Example:__

```javascript
jPack.calc.rectIntersect({
    x: 0,
    y: 0,
    width: 100,
    height: 100
}, {
    x: 50,
    y: 50,
    width: 100,
    height: 100
}) // => Object {x: 50, y: 50, width: 50, height: 50}
```