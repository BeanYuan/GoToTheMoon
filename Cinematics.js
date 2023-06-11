class cinpro extends Phaser.Scene{
    constructor() {
        super('cinematic prototype');
    }

    preload(){
        this.load.path = './assets/';
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
        this.load.path = './assets/';
        this.load.image('men', 'menuscrn.png');
        this.load.image('start', 'Play.png');
        this.load.image('cntl', 'cntrl.png');
        this.load.image('cdt', 'crdt.png');
        this.load.image('star', 'star.png');
        this.load.audio('intro', 'introa.mp3')
    }

    create() {


        let main = this.add.image(
            960,
            540,
            'men',
        )
        main.setScale(1);
        main.setAlpha(0);
        main.setDepth(-1);

        let play = this.add.image(
            -500,
           500,
            'start',
        )
        play.setScale(.2);
        //play.setAlpha(0);

        let controls = this.add.image(
            2500, 
            580,
            'cntl',
        )
        controls.setScale(.2);
        //controls.setAlpha(0);

        let credits = this.add.image(
            960,
            2000,
            'cdt',
        )
        credits.setScale(.2);
        //credits.setAlpha(0);


        const timeline = this.add.timeline([
        {
            at: 0,
            tween: {
                targets: main,
                duration: 3000,
                alpha: {from: 0, to: 1}, // corrected 'alpha' property name
            }
        },
        {

            at: 4,
            tween: {
                targets: play,
                x: 960,
                y: 500,
                delay: 750,
                duration: 3000,
                ease: 'Quadratic',
            },
        },

        {

            at: 4, 
            tween: {
                targets: controls,
                x: 960,
                y: 600,
                delay: 750,
                duration: 3000,
                ease: 'Quadratic',
            },


        },

        {

            at: 4, 
            tween: {
                targets: credits,
                x: 960,
                y: 700,
                delay: 750,
                duration: 3000,
                ease: 'Quadratic',
            },


        },

        
        ]);

        timeline.play();

        play.setInteractive();
        play.on('pointerover', () => {
            this.tweens.add({
                targets: play,
                scaleX: .3,
                scaleY: .3,
                duration: 100
            });
        });

        play.on('pointerout', () => {
            this.tweens.add({
                targets: play,
                scaleX: .2,
                scaleY: .2,
                duration: 100
            });
        });

        credits.setInteractive();
        credits.on('pointerover', () => {
            this.tweens.add({
                targets: credits,
                scaleX: .3,
                scaleY: .3,
                duration: 100
            });
        });

        credits.on('pointerout', () => {
            this.tweens.add({
                targets: credits,
                scaleX: .2,
                scaleY: .2,
                duration: 100
            });
        });

        controls.setInteractive();
        controls.on('pointerover', () => {
            this.tweens.add({
                targets: controls,
                scaleX: .3,
                scaleY: .3,
                duration: 100
            });
        });

        controls.on('pointerout', () => {
            this.tweens.add({
                targets: controls,
                scaleX: .2,
                scaleY: .2,
                duration: 100
            });
        });


        play.setInteractive();
        play.on('pointerdown', () => {
            this.scene.start('gameplay');
        });

        controls.on('pointerdown', () => {
            this.scene.start('controls');
        });

        credits.on('pointerdown', () => {
            this.scene.start('credits');
        });

        
        //The following twinkling star code was assisted with ChatGPT


        this.stars = this.add.group();

        // Generate random star positions
        const numStars = 100;
        for (let i = 0; i < numStars; i++) {
        const x = Phaser.Math.Between(0, this.cameras.main.width);
        const y = Phaser.Math.Between(0, this.cameras.main.height);

        // Create a star sprite and add it to the group
        const star = this.add.sprite(x, y, 'star');
        this.stars.add(star);
        }
        

        // Start the twinkle animation
        this.twinkleStars();
    }

    twinkleStars() {
        // Define the twinkle animation
        this.stars.getChildren().forEach(star => {
        this.tweens.add({
            scale: {from: 0.01, to: 0.06},
            depth: -1,
            targets: star,
            alpha: { from: 0.001, to: 1 },
            duration: Phaser.Math.Between(1000, 3000),
            repeat: -1, 
            yoyo: true, 
        });
        });


        

        





        
    }



    

}


class Core extends Phaser.Scene{
    constructor() {
        super('gameplay');
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('wood', 'sign.png');

    }

    create(){

    let sign = this.add.image(
        960,
        1000,
        'wood',
    )
    sign.setScale(1.3);
    //sign.setAlpha(0);

    let mesg1 = this.add.text(
        800, 
        540,
        " Under Construction \n Game will go here",
        {
           font: "45px Garamond",
           color: "#000000"
        }
     );
     mesg1.setOrigin(-0.1, 1.5);

     let mesg2 = this.add.text(
        800, 
        540,
        "https://beanyuan.github.io/FinalProjectCoreGamePlay/",
        {
           font: "45px Garamond",
           color: "#000000"
        }
     );
     mesg2.setOrigin(0.27, 1);

     this.tweens.add({
        targets: [sign, mesg1, mesg2],
        alpha: {start: 0, to: 1},
        duration: 4000,
        ease: 'Quadratic',
     });

    }

}


class Controls extends Phaser.Scene{
    constructor() {
        super('controls');
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('wood', 'sign.png');

    }

    create(){

    let sign = this.add.image(
        960,
        1000,
        'wood',
    )
    sign.setScale(1);

    let mesg = this.add.text(
        800, 
        540,
        "Under Construction \n Controls will go here",
        {
           font: "45px Garamond",
           color: "#000000"
        }
     );


     this.tweens.add({
        targets: [sign, mesg],
        alpha: {start: 0, to: 1},
        duration: 4000,
        ease: 'Quadratic',
     });
     

    }


    

}

class Credit extends Phaser.Scene{
    constructor() {
        super('credits');
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('wood', 'sign.png');

    }

    create(){

    let sign = this.add.image(
        960,
        1000,
        'wood',
    )
    sign.setScale(1);

    let mesg = this.add.text(
        800, 
        540,
        "Under Construction \n Credits will go here",
        {
           font: "45px Garamond",
           color: "#000000"
        }
     );


     this.tweens.add({
        targets: [sign, mesg],
        alpha: {start: 0, to: 1},
        duration: 4000,
        ease: 'Quadratic',
     });
     

    }

}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920, //960
        height: 1080 //540
    },
    scene: [cinpro, Menu, Core, Controls, Credit], 
    title: "Cinematic Prototype",
});