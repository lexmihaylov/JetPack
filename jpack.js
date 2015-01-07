/**
 * =========================================================================== *
 * Collection of reusable tools                                                *
 * @author Alexander Mihaylov <lex.mihaylov@gmail.com>                         *
 * =========================================================================== *
 */

/**
 * jpack wrapper
 * @param {window} win
 * @returns {undefined}
 */
(function(win) {
    win.jPack = win.jPack || {};
    
    /**
     * Library version
     */
    win.jPack.VERSION = '0.1.0';

    /**
     * Contains additional math methods
     */
    win.jPack.calc = {
        /**
         * Converts radians to degrees
         * @param {Number} radians
         * @returns {Number}
         */
        radToDeg: function(radians) {
            return radians * (180 / Math.PI);
        },

        /**
         * Converts degrees to radians
         * @param {Number} degrees
         * @returns {Number}
         */
        degToRad: function(degrees) {
            return degrees * (Math.PI / 180);
        },

        /**
         * Generates a random number
         * @param {Number} min
         * @param {Number} max
         * @returns {Number}
         */
        random: function(min, max) {
            return Math.random() * (max - min) + min;
        },

        /**
         * Rounds a value with precision
         * @param {Number} num
         * @param {Number} precision
         * @returns {Number}
         */
        round: function(num, precision) {
            if (!precision) precision = 0;
            var p = Math.pow(10, precision);
            return Math.round(num * p) / p;
        },

        /**
         * Floors a value with precision
         * @param {type} num
         * @param {type} precision
         * @returns {Number}
         */
        floor: function(num, precision) {
            if (!precision) precision = 0;
            var p = Math.pow(10, precision);
            return Math.floor(num * p) / p;
        },

        /**
         * Ceils a value with precision
         * @param {type} num
         * @param {type} precision
         * @returns {Number}
         */
        ceil: function(num, precision) {
            if (!precision) precision = 0;
            var p = Math.pow(10, precision);
            return Math.ceil(num * p) / p;
        },

        /**
         * calculate percentage value
         * @param {Number} part
         * @param {Number} whole
         * @returns {Number}
         */
        percentage: function(part, whole) {
            return part / whole * 100;
        },

        /**
         * Calculates the intersection between to rectangles and returns a new rectangle
         * containing the dimenssions of the intersected area
         * @param {Object} rect1
         * @param {Object} rect2
         * @returns {Object}
         */
        rectIntersect: function(rect1, rect2) {
            var rx1 = rect1.x,
                ry1 = rect1.y,
                rx11 = rx1 + rect1.width,
                ry11 = ry1 + rect1.height,

                rx2 = rect2.x,
                ry2 = rect2.y,
                rx21 = rx2 + rect2.width,
                ry21 = ry2 + rect2.height;

            var newRect = {
                x: Math.max(rx2, rx1),
                y: Math.max(ry2, ry1)
            };

            newRect.width = Math.min(rx21, rx11) - Math.max(rx2, rx1);
            newRect.height = Math.min(ry21, ry11) - Math.max(ry2, ry1);

            return newRect;
        },

        /**
         * Calculate a point of a cicle
         * @param {Object} point
         * @param {Number} radius
         * @param {Number} angInDeg
         * @returns {Object}
         */
        pointOfCircle: function(point, radius, angInDeg) {
            return {
                x: point.x + radius * Math.cos(this.degToRad(angInDeg)),
                y: point.y + radius * Math.sin(this.degToRad(angInDeg))
            };
        },


        /**
         * Calculate a point of an ellipse
         * @param {Object} point
         * @param {Number} radiusX
         * @param {Number} radiusY
         * @param {Number} angInDeg
         * @returns {Object}
         */
        pointOfEllipse: function(point, radiusX, radiusY, angInDeg) {
            return {
                x: point.x + radiusX * Math.cos(this.degToRad(angInDeg)),
                y: point.y + radiusY * Math.sin(this.degToRad(angInDeg))
            };
        },

        /**
         * Calculates the distance between two points
         * @param {Object} point1
         * @param {Object} point2
         * @returns {Number}
         */
        distanceBetweenPoints: function(point1, point2) {
            return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y, point1.y, 2));
        },

        /**
         * Determins if a point is contained inside a rectabgle
         * @param {type} point
         * @param {type} rect
         * @returns {Boolean}
         */
        pointInRectangle: function(point, rect) {
            var rx = rect.x + rect.width;
            var ry = rect.y + rect.height;
            return (point.x > rect.x && point.y > rect.y && point.x < rx && point.y < ry);
        },

        /**
         * Determins if a point is inside a circle
         * @param {Object} point
         * @param {Number} radius
         * @param {Object} centerPoint
         * @returns {Boolean}
         */
        pointInCircle: function(point, radius, centerPoint) {
            return (Math.pow(point.x - centerPoint.x, 2) + Math.pow(point.y - centerPoint.y, 2)) < Math.pow(radius, 2);
        },

        /**
         * Gets a text mesurements
         * @param {type} text
         * @param {type} fontSize
         * @param {type} fontFamily
         * @returns {Object}
         */
        measureText: function(text, fontSize, fontFamily) {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            ctx.fond = fontSize + " " + fontFamily;
            return ctx.measureText(text);
        }
    };

    /**
     * Creates an animation object using requestAnimationFrame or setTimeout
     * @class jpack.Animation
     * @constructor
     */
    win.jPack.Animation = function(handler) {
        this.animationFrame = win.requestAnimationFrame ||
            win.mozRequestAnimationFrame ||
            win.webkitRequestAnimationFrame ||
            win.msRequestAnimationFrame ||
            function(callback) {
                return win.setTimeout(callback, 1000 / 60);
            };
        this.handler = handler;
        this.animId = null;
        this.isStopped = false;
        this.isDestroyed = false;
        this.isStarted = false;
    };

    /**
     * public methods
     */
    win.jPack.Animation.prototype = {
        /**
         * Start the animation loop
         * @returns {undefined}
         */
        start: function() {
            var _this = this;
            _this.isStopped = false;
            if (!_this.isStarted) {
                _this.isStarted = true;

                var loopFn = function () {
                    if (!_this.isDestroyed) {
                        if (!_this.isStopped) {
                            _this.handler.apply(_this, arguments);
                        }

                        _this.animationFrame.call(win, loopFn);
                    }
                };

                _this.animationFrame.call(win, loopFn);

            }
        },

        /**
         * Stop/Pause animation loop
         * @returns {undefined}
         */
        stop: function() {
            this.isStopped = true;
        },

        /**
         * Destroy the animation loop
         * @returns {undefined}
         */
        destroy: function() {
            this.isDestroyed = true;
            this.isStarted = false;
        }
    };

    /**
     * Creates an async task using requestAnimationFrame or setTimeout
     * @param {function} handler
     * @class jpackAsync
     * @constructor
     */
    win.jPack.Async = function(handler) {
        this.asyncTask = win.requestAnimationFrame ||
            win.mozRequestAnimationFrame ||
            win.webkitRequestAnimationFrame ||
            win.msRequestAnimationFrame ||
            function(callback) {
                return win.setTimeout(callback, 0);
            };
        this.handler = handler;
    };

    /**
     * public methods
     */
    win.jPack.Async.prototype = {
        /**
         * Execute a task asyncroniously
         * @returns {undefined}
         */
        start: function() {
            var _this = this;
            _this.asyncTask.call(win, function() {
                _this.handler.apply(_this, arguments);
            });
        }
    };
})(window);