var config = {
    type: Phaser.AUTO,
    width:850,
    height:600,
    fps: {
        target:60,
        forceSetTimeOut:true
    },
    physics:{
        default:'arcade',
        arcade:{
            debug: false,
            gravity:{y:0}
        }
    },
    scene:[villa2, dani1, laia3, inventario]
};

game = new Phaser.Game(config);
//inventario = new Phaser.Game(config);