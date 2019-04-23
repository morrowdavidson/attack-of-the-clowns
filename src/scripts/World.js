class World {
  constructor(gameField) {
    this.width = 1300;
    this.height = 700;

    // the second number is the amount of walkable height from the bottom of the playArea
    this.vTravelHeight = this.height - 470; 

    // Sets up gamefield 
    this.gameField = gameField;
    this.gameField.style.height = this.height + 'px';
    this.gameField.style.width =  this.width + 'px';

    this.playFieldObjects = [];

    // console.log(this.isColliding({x: 100, y: 100, width: 100, height: 100}, {x: 100, y: 100, width: 99, height: 99}));
  }

  update(speed) {
    this.playFieldObjects.forEach(object => {
      object.x += speed * 50;
    });
  }

  draw() {
    this.playFieldObjects.forEach(object => {
      object.element.style.left = object.x + 'px';
      object.element.style.top = object.y + 'px';
    });
  }

  // Register an object to be tracked by the world
  registerStatic(object) {
    object.element = document.createElement('div');
    object.element.classList.add(object.cssClass);
    this.gameField.appendChild(object.element);
    this.playFieldObjects.push(object);
  }

  registerDynamic(object) {
    this.playFieldObjects.push(object);
  }

  anyCollisionsWith(entity) {
    return this.playFieldObjects.some(playFieldObject => {
      if(playFieldObject.feet) {
        return this.isColliding(playFieldObject.feet, entity);
      }
      return this.isColliding(playFieldObject, entity);
    });
  }

  isColliding(rect1, rect2) {
    return (
      rect1.x + rect1.width > rect2.x  &&
      rect1.x < rect2.x + rect2.width  &&
      rect1.y + rect1.height > rect2.y &&
      rect1.y < rect2.y + rect2.height
    );
  }
}

export default World;