/**
 * @author Fábio Henrique M. Oliveira
 */

/*
 The leapToScene function takes a position in leap space
 and converts it to the space in the canvas.

 It does this by using the interaction box, in order to
 make sure that every part of the canvas is accesible
 in the interaction area of the leap
 */
function leapToScene(leapPos, frame) {

    // Gets the interaction box of the current frame
    var iBox = frame.interactionBox;

    // Gets the left border and top border of the box
    // In order to convert the position to the proper
    // location for the canvas
    var left = iBox.center[0] - iBox.size[0] / 2;
    var top = iBox.center[1] + iBox.size[1] / 2;

    // Takes our leap coordinates, and changes them so
    // that the origin is in the top left corner
    var x = leapPos[0] - left;
    var y = leapPos[1] - top;

    // Divides the position by the size of the box
    // so that x and y values will range from 0 to 1
    // as they lay within the interaction box
    x /= iBox.size[0];
    y /= iBox.size[1];

    // Uses the height and width of the canvas to scale
    // the x and y coordinates in a way that they
    // take up the entire canvas
    x *= width;
    y *= height;

    // Returns the values, making sure to negate the sign
    // of the y coordinate, because the y basis in canvas
    // points down instead of up
    return [x, -y];

}

// Get the velocity of the hand (norm)
function calc3DVectorNorm(vector) {
    return Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1] + vector[2] * vector[2]);
}

// Convert microseconds to seconds and return it
function usToS(time) {
    return time / 1000000;
}

// Convert milliseconds to seconds and return it
function msToS(time) {
    return time / 1000;
}

// Convert microseconds to milliseconds and return it
function usToMs(time) {
    return time / 1000;
}
