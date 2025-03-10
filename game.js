class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene1' });
    }

    create() {
        game.scene.add('default', background1)
        this.add.image(0, 0, 'background1').setOrigin(0,0)
        this.add.text(100, 100, 'Scene 1', { fill: '#0f0' });
        this.input.keyboard.on('keydown-SPACE', () => {
            this.scene.transition({ target: 'Scene2', duration: 1000 });
        });
    }
}

class Scene2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene2' });
    }

    create() {
        game.scene.add('default', background2)
        this.add.image(0, 0, 'background2').setOrigin(0,0)
        this.add.text(100, 100, 'Scene 2', { fill: '#0f0' });
        this.input.keyboard.on('keydown-SPACE', () => {
            this.scene.transition({ target: 'Scene3', duration: 1000 });
        });
    }
}

class Scene3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene3' });
    }

    create() {
        game.scene.add('default', background3)
         this.add.image(0, 0, 'background3').setOrigin(0,0)
        this.add.text(100, 100, 'Scene 3', { fill: '#0f0' });
        this.input.keyboard.on('keydown-SPACE', () => {
            this.scene.transition({ target: 'Scene4', duration: 1000 });
        });
    }
}

class Scene4 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene4' });
    }

    create() {
        game.scene.add('default', background4)
         this.add.image(0, 0, 'background4').setOrigin(0,0)
        this.add.text(100, 100, 'Scene 4', { fill: '#0f0' });
        this.input.keyboard.on('keydown-SPACE', () => {
            this.scene.transition({ target: 'Scene5', duration: 1000 });
        });
    }
}

class Scene5 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene5' });
    }

    create() {
        game.scene.add('default', background5)
         this.add.image(0, 0, 'background5').setOrigin(0,0)
        this.add.text(100, 100, 'Scene 5', { fill: '#0f0' });
        this.input.keyboard.on('keydown-SPACE', () => {
            this.scene.transition({ target: 'Scene1', duration: 1000 });
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Scene1, Scene2, Scene3, Scene4, Scene5]
};

const game = new Phaser.Game(config);
