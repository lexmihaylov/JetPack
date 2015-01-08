# JetPack

JetPack is a compilation of methods that will make your life easyer. It includes:
 * extension of the math api;
 * easy access to some of the browser's functionality;
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

#### jPack.calc.pointOfCircle (point, radius, angInDeg)

Calculate a point of a cicle
 * `point` -  an object containing the circles centerPoint
 * `radius` - the circles radius value
 * `angInDeg` - value of offset angle in degrees

__Example:__

```javascript
jPack.calc.pointOfCircle({x: 0, y: 0}, 100, 45) // => Object {x: 70.71067811865476, y: 70.71067811865474}
```

#### jPack.calc.pointOfEllipse (point, radiusX, radiusY, angInDeg)

Calculate a point of an ellipse
 * `point` -  an object containing the circles centerPoint
 * `radiusX` - the circles radius value on the X axis
 * `radiusY` - the circles radius value on the Y axis
 * `angInDeg` - value of offset angle in degrees

__Example:__

```javascript
jPack.calc.pointOfEllipse({x: 0, y: 0}, 100, 50, 45) // => Object {x: 70.71067811865476, y: 35.35533905932737}
```

#### jPack.calc.distanceBetweenPoints (point1, point2)

Calculates the distance between two points
 * `point1`
 * `point2`

__Example:__

```javascript
jPack.calc.distanceBetweenPoints({x: 0, y: 0}, {x: 50, y: 100}) // => 50.00999900019995
```

#### jPack.calc.pointInRectangle (point, rect)

Determins if a point is contained inside a rectangle
 * `point`
 * `rect`

__Example:__

```javascript
jPack.calc.pointInRectangle({
    x: 120,
    y: 120
}, {
    x: 50,
    y: 100,
    width: 100,
    height: 100
}) // => true
```

#### jPack.calc.pointInCircle (point, radius, centerPoint)

Determins if a point is contained inside a circle
 * `point`
 * `radius`
 * `centerPoint`

__Example:__

```javascript
jPack.calc.pointInCircle({
    x: 120,
    y: 120
}, 200, {
    x: 50,
    y: 100
}) // => true
```

#### jPack.calc.measureText (text, fontSize, fontFamily)

Gets mesurements of text

_Note: this method uses a canvas to determin the text metrics_

 * `text` - the text string
 * `fontSize` - the text size
 * `fontFamily` - the font used

__Example:__

```javascript
jPack.calc.measureText('Hello World', 20, 'Arial') // => TextMetrics {width: 51.6796875}
```

### jPack.browser

#### jPack.browser.isMobile ()

Returns `true` if the browser is mobile and `false` if it's not

__Example:__

```javascript
jPack.browser.isMobile() // => false
```

#### jPack.browser.hasFlashEnabled ()

Returns `true` if the browser has flash enabled and `false` if it doesn't have it enabled

__Example:__

```javascript
jPack.browser.hasFlashEnabled() // => true
```

#### jPack.browser.cookie.set (name, value, opt)

Create a cookie on the clients browser
 * `name` - cookie name
 * `value` - cookie value
 * `opt` (optional) - cookie options

__Example:__

```javascript
jPack.browser.cookie.set('my_cookie', 'my_cookie_val', {
    expires: 60 * 60 * 24, // (optional) day in seconds
    path: '/', // optional
    domain: 'example.com' // optional
})
```

#### jPack.browser.cookie.get (name)

Gets the value of a cookie
 * `name` - cookie name

__Example:__

```javascript
jPack.browser.cookie.get('my_cookie') // => "my_cookie_val"
```

#### jPack.browser.cookie.destroy (name)

Destroys a cookie
 * `name` - cookie name

__Example:__

```javascript
jPack.browser.cookie.destroy('my_cookie')
jPack.browser.cookie.get('my_cookie') // => null
```

####  jPack.Animation Class

Creates an animation object using requestAnimationFrame or setTimeout
 * `constructor(handler)`
    * `handler` - a callback that will be called on every draw event
 * `start()` - Start the animation loop
 * `stop()` - Stop/Pause animation loop
 * `destroy()` - Destroy the animation loop

__Example:__

```javascript
var animation = new jPack.Animation(function() {
    console.log('draw cycle');
});

animation.start();   // start animation loop
animation.stop();    // pause animation loop
animation.start();   // start the animation loop again
animation.destroy(); // destroy animation loop
```