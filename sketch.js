// Set global variables, vehicles mean the red,grey and blue rect.
let canvasWidth = 1000;
let canvasHeight = 1000;
let yellowRects = [];
let blueRects = [];
let redRects = [];
let grayRects = [];
let extraYellowRects = [];
let pixelLength = 20;
let entries = [];
let vehicles = [];

let firstRun = true;


// Set fixed classes with rectangles of different colors and sizes. The purpose of distinguishing them is to facilitate later animation and to give them unique functions.
class YellowRect {
  constructor(x, y, width, height, rotation) {
    this.x = x ?? 0;
    this.y = y ?? 0;
    this.width = width ?? canvasWidth;
    this.height = height ?? canvasHeight;
    this.rotation = rotation ?? 0;
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);

    noStroke();
    fill(250, 201, 1);
    rect(0, 0, this.width, this.height);

    pop();
  }
}

class BlueRect {
  constructor(x, y, width, height, rotation) {
    this.x = x ?? 0;
    this.y = y ?? 0;
    this.width = width ?? canvasWidth;
    this.height = height ?? canvasHeight;
    this.rotation = rotation ?? 0;
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);

    noStroke();
    fill(34, 80, 149);
    rect(0, 0, this.width, this.height);

    pop();
  }
}

class RedRect {
  constructor(x, y, width, height, rotation) {
    this.x = x ?? 0;
    this.y = y ?? 0;
    this.width = width ?? canvasWidth;
    this.height = height ?? canvasHeight;
    this.rotation = rotation ?? 0;
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);

    noStroke();
    fill(221, 1, 0);
    rect(0, 0, this.width, this.height);

    pop();
  }
}

class GrayRect {
  constructor(x, y, width, height, rotation) {
    this.x = x ?? 0;
    this.y = y ?? 0;
    this.width = width ?? canvasWidth;
    this.height = height ?? canvasHeight;
    this.rotation = rotation ?? 0;
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);

    noStroke();
    fill(200);
    rect(0, 0, this.width, this.height);

    pop();
  }
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // Save rects of different colors and types into an array
  // horizontal routes (Record the entrance and exit coordinates on the horizontal route of the road map in the work, that is, the coordinates of the canvas against the edge of the canvas.)
  yellowRects.push(new YellowRect(0, 20, 1000, pixelLength));
  entries.push({ x: 0, y: 20 });
  entries.push({ x: 1000, y: 20 });

  yellowRects.push(new YellowRect(0, 140, 1000, pixelLength));
  entries.push({ x: 0, y: 140 });
  entries.push({ x: 1000, y: 140 });

  yellowRects.push(new YellowRect(0, 320, 1000, pixelLength));
  entries.push({ x: 0, y: 320 });
  entries.push({ x: 1000, y: 320 });

  yellowRects.push(new YellowRect(0, 380, 1000, pixelLength));
  entries.push({ x: 0, y: 380 });
  entries.push({ x: 1000, y: 380 });

  yellowRects.push(new YellowRect(0, 500, 1000, pixelLength));
  entries.push({ x: 0, y: 500 });
  entries.push({ x: 1000, y: 500 });

  yellowRects.push(new YellowRect(0, 560, 1000, pixelLength));
  entries.push({ x: 0, y: 560 });
  entries.push({ x: 1000, y: 560 });

  yellowRects.push(new YellowRect(0, 620, 60, pixelLength));
  entries.push({ x: 0, y: 620 });

  yellowRects.push(new YellowRect(60, 660, 460, pixelLength));

  yellowRects.push(new YellowRect(0, 700, 60, pixelLength));
  entries.push({ x: 0, y: 700 });

  yellowRects.push(new YellowRect(0, 760, 1000, pixelLength));
  entries.push({ x: 0, y: 760 });
  entries.push({ x: 1000, y: 760 });

  yellowRects.push(new YellowRect(0, 800, 60, pixelLength));
  entries.push({ x: 0, y: 800 });

  yellowRects.push(new YellowRect(0, 860, 1000, pixelLength));
  entries.push({ x: 0, y: 860 });
  entries.push({ x: 1000, y: 860 });

  yellowRects.push(new YellowRect(0, 960, 1000, pixelLength));
  entries.push({ x: 0, y: 960 });
  entries.push({ x: 1000, y: 960 });

  // vertical routes
  yellowRects.push(new YellowRect(20, 0, pixelLength, 320));
  entries.push({ x: 20, y: 0 });

  yellowRects.push(new YellowRect(60, 0, pixelLength, 1000));
  entries.push({ x: 60, y: 0 });
  entries.push({ x: 60, y: 1000 });

  yellowRects.push(new YellowRect(120, 0, pixelLength, 860));
  entries.push({ x: 120, y: 0 });

  yellowRects.push(new YellowRect(240, 0, pixelLength, 1000));
  entries.push({ x: 240, y: 0 });
  entries.push({ x: 240, y: 1000 });

  yellowRects.push(new YellowRect(480, 0, pixelLength, 1000));
  entries.push({ x: 480, y: 0 });
  entries.push({ x: 480, y: 1000 });

  yellowRects.push(new YellowRect(520, 0, pixelLength, 320));
  entries.push({ x: 520, y: 0 });

  yellowRects.push(new YellowRect(520, 380, pixelLength, 620));
  entries.push({ x: 520, y: 1000 });

  yellowRects.push(new YellowRect(600, 380, pixelLength, 180));

  yellowRects.push(new YellowRect(800, 0, pixelLength, 1000));
  entries.push({ x: 800, y: 0 });
  entries.push({ x: 800, y: 1000 });

  yellowRects.push(new YellowRect(860, 0, pixelLength, 320));
  entries.push({ x: 860, y: 0 });

  yellowRects.push(new YellowRect(900, 0, pixelLength, 380));
  entries.push({ x: 900, y: 0 });

  yellowRects.push(new YellowRect(900, 560, pixelLength, 220));

  yellowRects.push(new YellowRect(960, 0, pixelLength, 1000));
  entries.push({ x: 960, y: 0 });
  entries.push({ x: 960, y: 1000 });

  extraYellowRects.push(new YellowRect(120, 60, 120, pixelLength * 2));
  extraYellowRects.push(new YellowRect(120, 240, 120, pixelLength * 3));
  extraYellowRects.push(new YellowRect(800, 420, 160, pixelLength * 3));
  extraYellowRects.push(new YellowRect(800, 660, 160, pixelLength * 2));
  extraYellowRects.push(new YellowRect(120, 700, 120, pixelLength * 3));
  extraYellowRects.push(new YellowRect(160, 320, pixelLength * 3, 80));
  extraYellowRects.push(new YellowRect(300, 380, pixelLength * 3, 120));
  extraYellowRects.push(new YellowRect(400, 320, pixelLength * 3, 200));

  blueRects.push(new BlueRect(80, 180, pixelLength * 3, 60));
  blueRects.push(new BlueRect(80, 600, pixelLength * 3, 60));
  blueRects.push(new BlueRect(300, 420, pixelLength * 3, 80));
  blueRects.push(new BlueRect(600, 160, pixelLength * 5, 160));
  blueRects.push(new BlueRect(880, 100, pixelLength * 4, 40));
  blueRects.push(new BlueRect(820, 600, pixelLength * 4, 60));

  redRects.push(new RedRect(160, 40, pixelLength * 3, 100));
  redRects.push(new RedRect(140, 440, pixelLength * 5, 60));
  redRects.push(new RedRect(280, 40, pixelLength * 4, 100));
  redRects.push(new RedRect(400, 860, pixelLength * 3, 140));
  redRects.push(new RedRect(600, 200, pixelLength * 5, 80));
  redRects.push(new RedRect(860, 180, pixelLength * 3, 60));
  redRects.push(new RedRect(640, 400, pixelLength * 5, 160));
  redRects.push(new RedRect(880, 420, pixelLength, 60));
  redRects.push(new RedRect(820, 700, pixelLength * 4, 60));

  grayRects.push(new GrayRect(160, 100, pixelLength * 3, 20));
  grayRects.push(new GrayRect(160, 260, pixelLength * 3, 20));
  grayRects.push(new GrayRect(180, 340, pixelLength, 40));
  grayRects.push(new GrayRect(180, 720, pixelLength * 2, 20));
  grayRects.push(new GrayRect(300, 60, pixelLength * 2, 40));
  grayRects.push(new GrayRect(280, 120, pixelLength * 4, 20));
  grayRects.push(new GrayRect(400, 380, pixelLength * 3, 20));
  grayRects.push(new GrayRect(400, 420, pixelLength * 3, 60));
  grayRects.push(new GrayRect(400, 900, pixelLength * 3, 60));
  grayRects.push(new GrayRect(660, 420, pixelLength * 3, 60));
  grayRects.push(new GrayRect(640, 540, pixelLength * 5, 20));

  frameRate(6);   // vehicles speed
}

function draw() {
  background(240);

  for (let i = 0; i < yellowRects.length; i++) {
    yellowRects[i].draw();
  }

  if (firstRun) {
    initVehicles();
    firstRun = false;
  }

  moveVehicles();

  drawVehicles();

  // Draw all the rects in the array
   for (let i = 0; i < extraYellowRects.length; i++) {
     extraYellowRects[i].draw();
   }
   for (let i = 0; i < blueRects.length; i++) {
     blueRects[i].draw();
   }
   for (let i = 0; i < redRects.length; i++) {
     redRects[i].draw();
   }
   for (let i = 0; i < grayRects.length; i++) {
     grayRects[i].draw();
   }
}

// Modified the logic of identifying yellow squares in group code. Now do a random operation every time a yellow rect is recognized, and set it to 30% chance that the yellow rect will turn into a rect of other colors.
function initVehicles() {
    const colors = [color(34,80,149), color(221,1,0), color(200),]; // "use rbg to change #225095 in group code"
    const dirs = ['up', 'down', 'left', 'right'];
    loadPixels();
    for (let x = 0; x < canvasWidth; x += pixelLength) {
      for (let y = 0; y < canvasHeight; y += pixelLength) {
        const col = get(x, y);
        if (col[0] === 250 && col[1] === 201 && col[2] === 1) {
          // 30% chance to change cell color
          if (random(0, 1) < 0.3) {
              vehicles.push({x: x, y: y, dir: random(dirs), spd: 1, col: random(colors),});
          }
        }
      }
    }
}

function moveVehicles() {
  loadPixels();
  // Determine the direction in which the car can run 
  for (let i = 0; i < vehicles.length; i++) {
    // Check whether the original direction of the car is feasible
    const dir = vehicles[i].dir;
    let dirFeasible = false;
    const x = vehicles[i].x;
    const y = vehicles[i].y;
    if (dir == 'up') {
      if (y != 0) {
        const neighourCellCol = get(x, y - pixelLength);
        if (neighourCellCol[0] === 250 && neighourCellCol[1] === 201 && neighourCellCol[2] === 1) {
          dirFeasible = true;
        }
      } else {
        // when move out of canvas
        dirFeasible = true;
      }
    } else if (dir == 'down') {
      if (y != canvasHeight - pixelLength) {
        const neighourCellCol = get(x, y + pixelLength);
        if (neighourCellCol[0] === 250 && neighourCellCol[1] === 201 && neighourCellCol[2] === 1) {
          dirFeasible = true;
        }
      } else {
        // when move out of canvas
        dirFeasible = true;
      }
    } else if (dir == 'left') {
      if (x != 0) {
        const neighourCellCol = get(x - pixelLength, y);
        if (neighourCellCol[0] === 250 && neighourCellCol[1] === 201 && neighourCellCol[2] === 1) {
          dirFeasible = true;
        }
      } else {
        // when move out of canvas
        dirFeasible = true;
      }
    } else {
      if (x != canvasWidth - pixelLength) {
        const neighourCellCol = get(x + pixelLength, y);
        if (neighourCellCol[0] === 250 && neighourCellCol[1] === 201 && neighourCellCol[2] === 1) {
          dirFeasible = true;
        }
      } else {
        // when move out of canvas
        dirFeasible = true;
      }
    }
    // If it is impassable, check the condition of surrounding roads
    if (!dirFeasible) {
      let feasibleDirs = [];
      // Check if the above rect is possible
      {
        const neighourCellCol = get(x, y - pixelLength);
        if (neighourCellCol[0] === 250 && neighourCellCol[1] === 201 && neighourCellCol[2] === 1) {
          feasibleDirs.push('up');
        }
      }
      // Check if the above rect is possible
      {
        const neighourCellCol = get(x, y + pixelLength);
        if (neighourCellCol[0] === 250 && neighourCellCol[1] === 201 && neighourCellCol[2] === 1) {
          feasibleDirs.push('down');
        }
      }
      // Check if the left rect is possible
      {
        const neighourCellCol = get(x - pixelLength, y);
        if (neighourCellCol[0] === 250 && neighourCellCol[1] === 201 && neighourCellCol[2] === 1) {
          feasibleDirs.push('left');
        }
      }
      // Check if the right rect is possible
      {
        const neighourCellCol = get(x + pixelLength, y);
        if (neighourCellCol[0] === 250 && neighourCellCol[1] === 201 && neighourCellCol[2] === 1) {
          feasibleDirs.push('right');
        }
      }

      vehicles[i].dir = random(feasibleDirs);
    }
  }

  //Change the position of the vehicle[i].x/y +- pixelLength
  for (let i = 0; i < vehicles.length; i++) {
    const dir = vehicles[i].dir;
    if (dir == 'up') {
      vehicles[i].y -= pixelLength;
    } else if (dir == 'down') {
      vehicles[i].y += pixelLength;
    } else if (dir == 'left') {
      vehicles[i].x -= pixelLength;
    } else {
      vehicles[i].x += pixelLength;
    }
  }

  // If the vehicles moves out of the canvas, reinitialize the vehicle's position to a random entrance
  for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].x < 0 || vehicles[i].x > canvasWidth ||
      vehicles[i].y < 0 || vehicles[i].y > canvasHeight) {
        const entry = random(entries);
        vehicles[i].x = entry.x;
        vehicles[i].y = entry.y;
  
        if (entry.x == 0) {
          vehicles[i].dir = 'right';  
        } else if (entry.x == canvasWidth - pixelLength) {
          vehicles[i].dir = 'left';  
        } else if (entry.y == 0) {
          vehicles[i].dir = 'down';  
        } else {
          vehicles[i].dir = 'up';  
        }
    }
  }
}

function drawVehicles() {
  for (let i = 0; i < vehicles.length; i++) {
    noStroke();
    fill(vehicles[i].col);
    rect(vehicles[i].x, vehicles[i].y, pixelLength, pixelLength);
  }
}
