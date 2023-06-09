class cinpro extends Phaser.Scene{
    constructor() {
        super('cinematic prototype');
    }

    preload(){
        this.load.path = '../assets/';
        this.load.image('f', 'F.png');
        this.load.image('l', 'L.png');
        this.load.image('u', 'U.png');
        this.load.image('x', 'X.png');
        this.load.image('bckgrnd', 'backback.png');
        this.load.image('p', 'prod.png');
        this.load.audio('intro', 'introa.mp3')
    }

    create() {

        let start = this.sound.add(
            "intro",
           );
           start.play();

        let ff = this.add.image(
            0,
            557,
            'f',
        )
        ff.setScale(.75);
        ff.setAngle(-9);

        this.tweens.add({
            targets: ff,
            x: 900,
            y: 557,
            duration: 3500,
            ease: 'Back',
            
        });

        let ll = this.add.image(
            950,
            1530,
            'l',
        )
        ll.setScale(.75);

        this.tweens.add({
            targets: ll,
            x: 950,
            y: 530,
            duration: 3500,
            ease: 'Back',
            
        });

        let uu = this.add.image(
            980,
            -300,
            'u',
        )
        uu.setScale(.70);

        this.tweens.add({
            targets: uu,
            x: 980,
            y: 520,
            duration: 3500,
            ease: 'Back',
            
        });

        let xx = this.add.image(
            1800,
            557,
            'x',
        )
        xx.setScale(.75);
        xx.setAngle(7);

        this.tweens.add({
            targets: xx,
            x: 1020,
            y: 553,
            duration: 3500,
            ease: 'Back',
            
        });


        let pp = this.add.image(
            960,
            600,
            'p',
        )

        this.tweens.add({
            targets: pp,
            alpha: {start: 0, to: 1},
            delay: 3700,
            duration: 4000,
            ease: 'Cubic',
         });

        let bck = this.add.image(
            960,
            540,
            'bckgrnd',
        )
        bck.setDepth(-1)
        

        this.time.delayedCall(5750, () => {
            this.cameras.main.fadeOut(2000, 0,0,0);
            this.time.delayedCall(3000, () => this.scene.start('menu'));
        });

        // let div = this.add.rectangle(960, 540, 5, 1500, 0xffffff);
        // div.setAlpha(.1);

        // let mid = this.add.rectangle(960, 540, 1500, 5, 0xffffff);
        // mid.setAlpha(.1);

    }
}




class Menu extends Phaser.Scene{
    constructor() {
        super('menu');
    }

    preload(){
        this.load.path = '../assets/';
        this.load.image('menu', 'menuscrn.png');
        this.load.image('start', 'strt.png');
        this.load.image('cntl', 'cntrl.png');
        this.load.image('cdt', 'crdt.png');
        this.load.image('p', 'prod.png');
        this.load.audio('intro', 'introa.mp3')
    }

    create() {


        let main = this.add.image(
            960,
            540,
            'menu',
        )
        main.setScale(1);
        main.setAlpha(0);

        let play = this.add.image(
            960,
            540,
            'start',
        )
        play.setScale(1);
        play.setAlpha(0);

        let controls = this.add.image(
            960, 
            560,
            'cntl',
        )
        controls.setScale(1);
        controls.setAlpha(0);

        let credits = this.add.image(
            960,
            580,
            'cdt',
        )
        credits.setScale(1);
        credits.setAlpha(0);

        


        

        


    }




    

}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920, //960
        height: 1080 //540
    },
    scene: [cinpro, Menu],
    title: "Cinematic Prototype",
});