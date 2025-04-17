class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene1' });
    }

    preload() {
        this.load.image('background1', 'background1.jpg');
    }

    create() {
        this.add.image(0, 0, 'background1').setOrigin(0, 0);
        this.add.text(100, 100, 'Scene 1', { fill: '#0f0' });

        this.input.keyboard.on('keydown-SPACE', () => {
            console.log('Space pressed, switching to Scene2');
            this.scene.transition({ target: 'Scene2', duration: 1000 });
        });
    }
}



const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Scene1]
};
 
const game = new Phaser.Game(config);
