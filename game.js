class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene1' });
    }

    create() {
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