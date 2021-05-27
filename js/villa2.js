
//Dinero
var dinero=0;
var dineros;

//Variables de la interaccion
var cd=0;
var cd2=100;
var mensaje=0;
var scorecd=0;
var final=20;
var inicio=0;
var cd3=0;
var finalconversacion=true;
var texto3;
var texto4;
var texto5;

//Velocidad e los enemigos
var enemigobasico;
var enemigobasico2;
var tanque;
var tanquemed;
var tanquepeque;
var velocidadE=150;
var velocidadT=50;

//Variable para que empiece la persecución
var seguir=0;
var seguir2=false;

//Variables de combate
var vidaenemigo=true;
var vidaenemigo2=true;
var golpeneemigo=0;
var golpeneemigo2=0;
var cdenemigo=0;
var vidaenemigo3=true;
var ataquetanque=50;
var ataquebasico=50;
var ataquebasico2=50;
var ataquegrupo=false;
var vidatanque=2;
var contadorCorazones=0;
var corazones = null;
var corazondemelon;

//PUZLE
var pieza=0;
var antorcha1;
var antorcha2;
var antorcha3;
var antorcha4;

var antorchae1;
var antorchae2;
var antorchae3;
var antorchae4;

var cofre;

//player
var vidaplayer=10;

//Speedboost
var SBActivado = false;
var velocidadP = 300;
var Time = 0;
var SBTime = 100;

var inmovil = false;
var personajevivo=true;

var mision=false;
var cdf=0;
var finalc=false;
var fuego=0;

var cerdo1;
var cerdo2;

var tronco;

var pergamino;

//listas
var monedaList;
var heartList;
var enemiList;

//Emboscada
var emboscada1;
var emboscada2;
var emboscada3;
var emboscada4;
var activador;
var ataquebasico1=50;
var ataquebasico2=50;
var ataquebasico3=50;
var ataquebasico4=50;

var ataquebasicoemboscada1=0;
var ataquebasicoemboscada2=0;
var ataquebasicoemboscada3=0;
var ataquebasicoemboscada4=0;

var vidaenemigoemboscada1=true;
var vidaenemigoemboscada2=true;
var vidaenemigoemboscada3=true;
var vidaenemigoemboscada4=true;
var ataqueemboscada=false;
var seguiremboscada=false;
var emboscadaempieza=true;

class villa2 extends Phaser.Scene
{
    constructor()
    {
        super("villa2");

//Dinero
var dinero=0;

//Variables de la interaccion
var cd=0;
var cd2=100;
var mensaje=0;
var scorecd=0;
var final=20;
var inicio=0;
var cd3=0;
var finalconversacion=true;

//Velocidad e los enemigos
var velocidad=150;

//Variable para que empiece la persecución
var seguir=false;
var seguir2=false;

//Variables de combate
var vidaenemigo=true;
var golpeneemigo=0;
var cdenemigo=0;
var vidaenemigo2=true;
var ataquetanque=50;
var ataquebasico=50;
var velocidadE=150;
var vidatanque=3;
var ataquegrupo=false;

//PUZLE
var pieza=0;

//player
var vidaplayer=10;

//Speedboost
var SBActivado = false;
var velocidadP = 300;
var Time = 0;
var SBTime = 100;

var inmovil = false;
var personajevivo=true;

var mision=false;
var cdf=0;
var finalc=false;
var fuego=0;

//Emboscada
var emboscada1;
var emboscada2;
var emboscada3;
var emboscada4;

}

preload() 
{
    this.load.image('gameTiles3', 'tileset/NatureTile.png');
    this.load.tilemapTiledJSON('tilemap3', 'maps/nivelvilla.json');
    this.load.atlas('attack','assets/attack.png', 'assets/attack_atlas.json');
    this.load.image('moneda', 'assets/monedas.png');
    this.load.image('cerdo', 'assets/cerdo.png');
    this.load.image('NPC', 'assets/NPC.png');
    this.load.image('enemigobasico', 'assets/basico0.png');    
    this.load.image('tanque', 'assets/tanque.png');
    this.load.image('hearth', 'assets/hearth.png');
    this.load.image('inventario', 'assets/inventario.png'); 
    this.load.image('texto1', 'assets/textov1.png');
    this.load.image('texto2', 'assets/textov2.png');
    this.load.image('texto3', 'assets/textov3.png');
    this.load.image('texto4', 'assets/textov4.png');
    this.load.image('texto5', 'assets/textov5.png');

    this.load.image('tronco', 'assets/obstaculo.png');

    this.load.image('hoguerapagada', 'assets/hoguera1.png');
    this.load.image('hogueraencendida', 'assets/hogueraencendida.png');
    this.load.atlas('encender','assets/encender.png', 'assets/encender_atlas.json');
    this.load.atlas('movimientofuego','assets/movimientofuego.png', 'assets/movimientofuego_atlas.json');

    this.load.atlas('ataquetanque','assets/ataquetanque.png', 'assets/ataquetanque_atlas.json');

    this.load.atlas('tanquecaminar','assets/tanquecaminar.png', 'assets/tanquecaminar_atlas.json');

    this.load.atlas('ataquesimple','assets/ataquesimple.png', 'assets/ataquesimple_atlas.json');

    this.load.image('pergamino', 'assets/pergamino.png');
}
   
create() {

    //Capas tilemap
    map = this.make.tilemap({key:'tilemap3'});
    tileset = map.addTilesetImage('nature','gameTiles3');
    capa = map.createDynamicLayer(0, tileset);

    //colisiones
    obstaculos = map.createDynamicLayer(1, tileset);
    obstaculos.setCollisionByProperty({colisiones: true});

    //Entradas de teclado
    KeyA=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    KeyD=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    KeyW=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    KeyS=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    SPACE=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    KeyE=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    KeyQ=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    KeyV=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);

    //Sprite player
    player = this.physics.add.sprite(2600,2365, 'attack').setScale(0.08);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, obstaculos);
    vidas = this.add.text(200, 25,'Vidas:' + vidaplayer, { fontSize: '20px', fill: 'black' }).setScrollFactor(0);

    //Animación player 
    this.anims.create({
        key:'attack',
        frames: this.anims.generateFrameNames('attack', {
            prefix: 'attack',
            start: 1,
            end: 10,
        }),
        repeat:0,
        frameRate:30
    });

    //Monedas
    monedaList = this.physics.add.group();
    this.physics.add.overlap(player, monedaList, this.recolectar, null, this);
    dineros = this.add.text(0, 50, 'Monedas: '+ dinero, { fontSize: '20px', fill: 'black' }).setScrollFactor(0);

    //Cerdo1
    cerdo1 = this.physics.add.sprite(2140,2365,'cerdo').setScale(0.15);
    this.physics.add.overlap(player, cerdo1, this.ataque1, null, this);

    //Cerdo2
    cerdo2 = this.physics.add.sprite(2120,2430,'cerdo').setScale(0.09);
    this.physics.add.overlap(player, cerdo2, this.ataque2, null, this);
    
    //Camara
    this.cameras.main.setBounds(0, 0, 1280 * 2, 1280 * 2);
    this.physics.world.setBounds(0, 0, 1280 * 2, 1280 * 2);
    this.cameras.main.startFollow(player, true, 0.05, 0.05);

    //Sprites del NPC
    NPC = this.physics.add.sprite(1800,1800, 'NPC');
    NPC.setScale(0.2);
    NPC.body.setSize(900,900);

    //Colision con el final de la pantalla
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setSize(200,100);

    //Interacciones entre el player y el NPC
    this.physics.add.overlap(player, NPC, this.interaccion, null, this);
    this.physics.add.overlap(player, NPC, this.hablar, null, this);
    this.physics.add.overlap(player, NPC, this.pasar, null, this);
    this.physics.add.overlap(player, NPC, this.recogermision, null, this);

    //PUZLE
    antorcha1 = this.physics.add.sprite(1730,1050, 'hoguerapagada').setScale(0.8);
    antorcha2 = this.physics.add.sprite(2335,820, 'hoguerapagada').setScale(0.8);
    antorcha3 = this.physics.add.sprite(1695,215, 'hoguerapagada').setScale(0.8);
    antorcha4 = this.physics.add.sprite(2175,380, 'hoguerapagada').setScale(0.8);
    this.physics.add.overlap(player,antorcha1,this.puzle1, null, this);
    this.physics.add.overlap(player,antorcha2,this.puzle2, null, this);
    this.physics.add.overlap(player,antorcha3,this.puzle3, null, this);
    this.physics.add.overlap(player,antorcha4,this.puzle4, null, this);

    CoolDown = this.add.text(0, 20, 'CD: 0', { fontSize: '20px', fill: 'black' }).setScrollFactor(0);

    heartList = this.physics.add.group();
    this.physics.add.overlap(player, heartList, this.VidaI, null, this);

    tronco = this.physics.add.sprite(1615,560, 'tronco').setScale(1);
    tronco.body.setSize(50,50);

    this.physics.add.overlap(player, tronco, this.nopasar, null, this);

    //Animación encender 
    this.anims.create({
        key:'encender',
        frames: this.anims.generateFrameNames('encender', {
            prefix: 'hoguera',
            start: 1,
            end: 6,
        }),
        repeat:0,
        frameRate:10
    });

    //Animación ataquetanque
    this.anims.create({
      key: 'ataquetanque',
      frames: this.anims.generateFrameNames('ataquetanque', { 
      prefix: 'tanque',
      start: 1,
      end: 5,
      }),
      frameRate: 5,
      repeat: -1
    });

    //Animación tanquecaminar
    this.anims.create({
      key: 'tanquecaminar',
      frames: this.anims.generateFrameNames('tanquecaminar', { 
      prefix: 'caminar',
      start: 1,
      end: 2,
      }),
      frameRate: 5,
      repeat: -1
    });

    //Animación ataque basico
    this.anims.create({
      key: 'ataquesimple',
      frames: this.anims.generateFrameNames('ataquesimple', { 
      prefix: 'basico',
      start: 0,
      end: 1,
      }),
      frameRate: 3,
      repeat: -1
    });

    final=this.physics.add.sprite(50,100, 'tronco').setScale(0.01);
    final.body.setSize(10000,10000);
    this.physics.add.overlap(player, final, this.siguiente, null, this);

    enemiList = this.physics.add.group();

    //Enemigo basico 1
    enemigobasico = enemiList.create(1950,800,'enemigobasico').setScale(0.15);
    enemigobasico.body.setSize(350,350);
    this.physics.add.overlap(player,enemigobasico,this.perseguir, null, this);
    this.physics.add.overlap(player, enemigobasico, this.matarpeque, null, this);
    this.physics.add.collider(enemigobasico, obstaculos);

    //Enemigo basico 2
    enemigobasico2 = enemiList.create(2150,800,'enemigobasico').setScale(0.15);
    enemigobasico2.body.setSize(350,350);
    this.physics.add.overlap(player,enemigobasico2,this.perseguir, null, this);
    this.physics.add.overlap(player, enemigobasico2, this.matarpeque2, null, this);
    this.physics.add.collider(enemigobasico2, obstaculos);

    //Enemigo tanque
    tanque = this.physics.add.sprite(2050,700,'tanque').setScale(0.8);
    tanque.body.setSize(25,25,500,-100);
    this.physics.add.overlap(player,tanque,this.matar, null, this);
    this.physics.add.overlap(player,tanque,this.perdervida, null, this);
    this.physics.add.collider(tanque, obstaculos);

    //tanque mediano
    tanquemed = this.physics.add.sprite(tanque.x,tanque.y,'tanquepeque').setScale(0.001);
    this.physics.add.overlap(player,tanquemed,this.perdervida, null, this);
    tanquemed.body.setSize(200000,200000);

    //tanque grande
    tanquepeque = this.physics.add.sprite(tanque.x,tanque.y,'tanquepeque').setScale(0.001);
    this.physics.add.overlap(player,tanquepeque,this.perseguir, null, this);
    this.physics.add.overlap(player,tanquepeque,this.atacar2, null, this);
    tanquepeque.body.setSize(400000,400000);

    inventario = this.add.sprite(750,90, 'inventario').setScale(0.3);
    inventario.setScrollFactor(0);
    inventario.huecos =new Array;

    corazondemelon=this.physics.add.sprite(0,0,'hearth').setScale(0.2);
    corazondemelon.x = (inventario.x - 115) + 12;
    corazondemelon.y = inventario.y - 35;
    corazondemelon.setScrollFactor(0);

    corazones = this.add.text((inventario.x - 115) + 23, inventario.y - 35, '0', { fontSize: '20px', fill: 'black' }).setScrollFactor(0);

    //Enemigo emboscada 1
    emboscada1 = enemiList.create(0,0,'enemigobasico').setScale(0.15);
    emboscada1.body.setSize(350,350);
    this.physics.add.overlap(player,emboscada1,this.perseguiremboscada1, null, this);
    this.physics.add.overlap(player, emboscada1, this.mataremboscada1, null, this);
    this.physics.add.collider(emboscada1, obstaculos);

    //Enemigo emboscada 1
    emboscada2 = enemiList.create(0,0,'enemigobasico').setScale(0.15);
    emboscada2.body.setSize(350,350);
    this.physics.add.overlap(player,emboscada2,this.perseguiremboscada2, null, this);
    this.physics.add.overlap(player, emboscada2, this.mataremboscada2, null, this);
    this.physics.add.collider(emboscada2, obstaculos);

    //Enemigo emboscada 1
    emboscada3 = enemiList.create(0,0,'enemigobasico').setScale(0.15);
    emboscada3.body.setSize(350,350);
    this.physics.add.overlap(player,emboscada3,this.perseguiremboscada3, null, this);
    this.physics.add.overlap(player, emboscada3, this.mataremboscada3, null, this);
    this.physics.add.collider(emboscada3, obstaculos);

    //Enemigo emboscada 1
    emboscada4 = enemiList.create(0,0,'enemigobasico').setScale(0.15);
    emboscada4.body.setSize(350,350);
    this.physics.add.overlap(player,emboscada4,this.perseguiremboscada4, null, this);
    this.physics.add.overlap(player, emboscada4, this.mataremboscada4, null, this);
    this.physics.add.collider(emboscada4, obstaculos);

    activador = this.physics.add.sprite(800,950, 'hearth').setScale(0.01);
    activador.body.setSize(15000,15000);
    this.physics.add.overlap(player, activador, this.emboscada, null, this);
}

update()
{
    //Funciones
    this.atacar();
    this.atacar2();
    this.Speedboost();
    this.todosloscd();
    this.conversar();
    this.moveplayer();
    this.acosar();
    this.consumir();
    this.acosoemboscada();
}
moveplayer()
   { 
     //Movimientos del player
    if(inmovil==false)
    {
      if (KeyA.isDown)
    {
        player.setVelocityX(-velocidadP);
    }
    else if(KeyD.isDown)
    {
        player.setVelocityX(velocidadP);
    }
    else
    {
        player.setVelocityX(0);
    }

    if (KeyW.isDown)
    {
        player.setVelocityY(-velocidadP);
    }
    else if (KeyS.isDown)
    {
        player.setVelocityY(velocidadP);
    }
    else
    {
        player.setVelocityY(0);
    }
    //Ataque
     if (SPACE.isDown)
    {
        player.play('attack');
    }
    }
   }

conversar()
{
//conversación
    if (SPACE.isDown && finalconversacion==false)
    {
        final=final-1;
        if (SPACE.isDown && final<=0 )
        {
           this.destruir();
            final=10;
        }
    }
}
todosloscd()
{
 //Variable para la conversación
    if(cd>0)
    {
        cd=cd-1;
    }

    //Variable para destriur la conversación
    if(cd3==1) 
    {
        scorecd=scorecd-1;
    }

    //Variable combate
    if(ataquetanque>0)
    {
      ataquetanque=ataquetanque-1;
    }

    //Variable combate
    if(ataquebasico>0)
    {
      ataquebasico=ataquebasico-1;
    }

    //Variable combate
    if(ataquebasico2>0)
    {
      ataquebasico2=ataquebasico2-1;
    }

    if(cdenemigo>0)
    {
      cdenemigo=cdenemigo-1;
    }

    //Variable conversación
    if(cd2>0)
    {
      cd2=cd2-1;
    }

    //Variable final conversación
    if(cdf>0)
    {
      cdf=cdf-1;
    }

    //Variable cura 
    if (CoolDownHeal >= 0) 
        {
            CoolDownHeal--;
        }

    //Variables emboscada

    if(ataquebasicoemboscada1>0)
    {
      ataquebasicoemboscada1=ataquebasicoemboscada1-1;
    }
    if(ataquebasicoemboscada2>0)
    {
      ataquebasicoemboscada2=ataquebasicoemboscada2-1;
    }
    if(ataquebasicoemboscada3>0)
    {
      ataquebasicoemboscada3=ataquebasicoemboscada3-1;
    }
    if(ataquebasicoemboscada4>0)
    {
      ataquebasicoemboscada4=ataquebasicoemboscada4-1;
    }
}

//recolectar del cerdo grande

recolectar(objeto1, objeto2)
{
    objeto2.destroy();
    var aleatorio = Phaser.Math.Between(1, 10);
    dinero=dinero+aleatorio;
    dineros = dineros.setText(+ dinero);
}

//recolectar del cerdo pequeño
recolectar2(objeto1, objeto2)
{
    objeto2.destroy();
    var aleatorio = Phaser.Math.Between(1, 10);
    dinero=dinero+aleatorio;
    dineros = dineros.setText(+ dinero);
}

//Matar al cerdo grande
ataque1(objeto1, objeto2)
{
    if(SPACE.isDown)
    {
        objeto2.destroy();
        var heart = heartList.create(cerdo1.x,cerdo1.y, 'hearth').setScale(0.2, 0.2);
    }
}

//Matar al cerdo pequeño
ataque2(objeto1, objeto2)
{
    if(SPACE.isDown)
    {
        objeto2.destroy();
       var heart = heartList.create(cerdo2.x,cerdo2.y, 'hearth').setScale(0.2, 0.2);
    }
}

//Funcion para iniciar conversación
hablar()
{
    if(KeyE.isDown && cd==0 && mensaje==0 && inicio==0)
    {
        texto = this.physics.add.sprite(NPC.x+50, NPC.y-100, 'texto1');
        texto.setScale(0.3);
        cd=100;
        mensaje=1;
        inicio=1;
    }
}

//Funcion para pasar de frase
pasar()    
{
    if(SPACE.isDown && mensaje==1)
    {
        texto.destroy();
        scoreText.destroy();
        texto2 = this.physics.add.sprite(NPC.x+50, NPC.y-100, 'texto2');
        texto2.setScale(0.3);
        cd2=100;
        mensaje=2;
    }

    if(SPACE.isDown && mensaje==2 && cd2==0)
    {
        texto2.destroy();
        scoreText.destroy();
        texto3 = this.physics.add.sprite(NPC.x+50, NPC.y-100, 'texto3');
        texto3.setScale(0.3);
        cd2=100;
        mensaje=3;
    } 

    if(SPACE.isDown && mensaje==3 && cd2==0)
    {
        texto3.destroy();
        scoreText.destroy();
        texto4 = this.physics.add.sprite(NPC.x+50, NPC.y-100, 'texto4');
        texto4.setScale(0.3);
        cd2=100;
        mensaje=4;
        finalconversacion=false;
    } 

    if(SPACE.isDown && mensaje==4 && cd2==0)
    {
        texto4.destroy();
        scoreText.destroy();
        mensaje=5;
        finalconversacion=false;
    }   
}

//Funcion para que aparezca el texto de ayuda 
interaccion()
{
    if(scorecd<=0)
    {
        scoreText = this.add.text(NPC.x-220, NPC.y + 50, 'Pulsa E para hablar y SPACE para continuar', { fontSize: '20px', fill: 'white' });
        scorecd=100;
        cd3=0;
    }
}

//Funcion para eliminar cualquier texto
destruir()
{
    scoreText.destroy();
    texto2.destroy();
    inicio=0;
    cd3=1;
    finalconversacion=true;
}

//Enemigos basicos te persiguen
perseguir()
{
   if(vidaenemigo==true)
    {
      ataquegrupo=true;

        if(ataquebasico==0)
        {
          enemigobasico.play('ataquesimple');
          vidaplayer=vidaplayer-1;
          vidas = vidas.setText('Vidas: '+ vidaplayer);
          ataquebasico=120;

          if (vidaplayer <= 0) 
          {
            player.destroy();
            inmovil = true;
            personajevivo=false;
          }
        }
    }

    if(vidaenemigo3==true)
    {
      ataquegrupo=true;

        if(ataquebasico2==0)
        {
          enemigobasico2.play('ataquesimple');
          vidaplayer=vidaplayer-1;
          vidas = vidas.setText('Vidas: '+ vidaplayer);
          ataquebasico2=120;

          if (vidaplayer <= 0) 
          {
            player.destroy();
            inmovil = true;
            personajevivo=false;
          }
        }
    }
}

//Grupo te ataca
atacar()
{
   if(inmovil ==false & ataquegrupo==true) 
    {
      //tanquepeque.destroy();
      if(vidaenemigo==true)
      {
        enemigobasico.direccion = new Phaser.Math.Vector2(player.x-enemigobasico.x, player.y-enemigobasico.y);
        enemigobasico.direccion.normalize();
        enemigobasico.setVelocityX(velocidadE * enemigobasico.direccion.x);
        enemigobasico.setVelocityY(velocidadE * enemigobasico.direccion.y); 
      }
      if(vidaenemigo3==true)
      {
        enemigobasico2.direccion = new Phaser.Math.Vector2(player.x-enemigobasico2.x, player.y-enemigobasico2.y);
        enemigobasico2.direccion.normalize();
        enemigobasico2.setVelocityX(velocidadE * enemigobasico2.direccion.x);
        enemigobasico2.setVelocityY(velocidadE * enemigobasico2.direccion.y);
      }
      if(vidaenemigo2==true)
      {
      tanque.direccion = new Phaser.Math.Vector2(player.x-tanque.x, player.y-tanque.y);
      tanque.direccion.normalize();
      tanque.setVelocityX(velocidadT * tanque.direccion.x);
      tanque.setVelocityY(velocidadT * tanque.direccion.y);
      }  
    }
    
}

//Matar enemigo basico
matarpeque()
{  
    if (SPACE.isDown)
    {
        enemigobasico.destroy();
        vidaenemigo=false;
        var heart = heartList.create(enemigobasico.x, enemigobasico.y, 'hearth').setScale(0.2, 0.2);
    }
}

matarpeque2()
{  
    if (SPACE.isDown)
    {
        enemigobasico2.destroy();
        vidaenemigo3=false;
        var heart2 = heartList.create(enemigobasico2.x, enemigobasico2.y, 'hearth').setScale(0.2, 0.2);

    }
}

//tanque ataca
atacar2()
{
   if(seguir2==true && personajevivo==true) 
    {
        tanque.direccion = new Phaser.Math.Vector2(player.x-tanque.x, player.y-tanque.y);
        tanque.direccion.normalize();
        tanque.setVelocityX(velocidad * tanque.direccion.x);
        tanque.setVelocityY(velocidad * tanque.direccion.y);
    }
}

//matar al tanque

matar()
{
    if (SPACE.isDown)
    {
      if(vidatanque==1 && cdenemigo==0)
      {
        tanque.destroy();
        tanquemed.destroy();
        mision=true;
        vidaenemigo2=false;
      }
      else if(vidatanque==2 && cdenemigo==0)
      {
        vidatanque=1;
        cdenemigo=20;
      }
        
    }
}

//PUZLE
puzle1()
{
    if(KeyE.isDown && pieza==0 && finalc==true)
    {
        pieza=1;
        antorchae1 = this.physics.add.sprite(1730,1050, 'hoguerapagada').setScale(0.8);
        antorchae1.play('encender');
        fuego=1;
    }
}

puzle2()
{
    if(KeyE.isDown && pieza==1 && finalc==true)
    {
        pieza=2;
        antorchae2 = this.physics.add.sprite(2335,820, 'hoguerapagada').setScale(0.8);
        antorchae2.play('encender');
        fuego=2;
    }
}

puzle3()
{
    if(KeyE.isDown && pieza==2 && finalc==true)
    {
        pieza=3;
        antorchae3 = this.physics.add.sprite(1695,215, 'hoguerapagada').setScale(0.8);
        antorchae3.play('encender');
        fuego=3;
    }
}

puzle4()
{
    if(KeyE.isDown && pieza==3 && finalc==true)
    {
        pieza=4;
        antorchae4 = this.physics.add.sprite(2175,380, 'hoguerapagada').setScale(0.8);
        antorchae4.play('encender');
        fuego=4;
        pergamino.destroy();
        var corazon = heartList.create(1860,470,'hearth').setScale(0.2, 0.2);
        var corazon2 = heartList.create(1830,500,'hearth').setScale(0.2, 0.2);
        var corazon3 = heartList.create(1830,440,'hearth').setScale(0.2, 0.2);
    }
}

Speedboost()
{
    if(Time <= 0)
    {
        if(KeyQ.isDown)
        {
            SBActivado = true;
        }
    }

    if(SBActivado == true)
    { 
        if(SBTime >= 0)
        {
            velocidadP = 500;
        }
        else if(SBTime <= 0)
        {
            SBActivado = false;
            velocidadP = 300;
        }
        SBTime--;
        Time = 240;
    }

    if(SBActivado == false)
    {
        this.decrementarCoolDown();
        SBTime = 100;
    }
}

decrementarCoolDown()
{
    if(Time >= 1)
    {
        Time = Time - 1;
        CoolDown = CoolDown.setText('CD: ' +Time);
    }
}

aumentarVida(objeto1, objeto2)
    {  
        vidaplayer=vidaplayer+3;
        vidas = vidas.setText('Vidas: '+ vidaplayer); 
    }

perdervida()
{
  if(ataquetanque==0)
        { 
          tanque.play('ataquetanque');
          vidaplayer=vidaplayer-3;
          vidas = vidas.setText('Vidas: '+ vidaplayer);
          ataquetanque=150;

          if (vidaplayer <= 0) 
          {
            player.destroy();
            inmovil = true;
            personajevivo=false;
          }
        }
}
acosar()
{
  tanquemed.x=tanque.x;
  tanquemed.y=tanque.y;
}

recogermision()
{
  if(mision==true)
  {
    if(KeyE.isDown && mensaje==5 && cdf==0)
    {
        texto5 = this.physics.add.sprite(NPC.x+50, NPC.y-100, 'texto5');
        texto5.setScale(0.3);
        cdf=100;
        finalc=true;
        pergamino=this.add.sprite(740,490, 'pergamino');
        pergamino.setScrollFactor(0);   
    }
    if(SPACE.isDown && finalc==true)
    {
      texto5.destroy();
      scoreText.destroy();
      tronco.destroy();
    }
  }
}

nopasar()
{
  player.x=player.x+30;
}

siguiente()
{
    Phaser.Scene.call(this, { key: 'dani1', active: true });          
    this.scene.transition({ target: 'dani1', duration: 2000 });
}

VidaI(objeto1, objeto2)
    {
        objeto2.x = (inventario.x - 115) + 12;
        objeto2.y = inventario.y - 35;
        objeto2.setScrollFactor(0);
        heart = true;

        if (contadorCorazones == 0) 
        {
            contadorCorazones++;
            corazones = corazones.setText('' +contadorCorazones);
        }
        else if (contadorCorazones >= 0) 
        {
            contadorCorazones++;
            corazones = corazones.setText('' +contadorCorazones);
        }
    }

    consumir(objeto1, objeto2)
    {   
        if (KeyV.isDown && heartList.getLength() > 0 && CoolDownHeal <= 0)
        {
            heartList.remove(heartList.getChildren()[heartList.getLength() - 1], true, true);
            this.aumentarVida();
            contadorCorazones--;
            corazones = corazones.setText('' +contadorCorazones);
            CoolDownHeal = 30;

        }
    }

    emboscada()
    {
      if(emboscadaempieza=true)
      {
      emboscada1.x=600;
      emboscada1.y=920;
      emboscada2.x=600;
      emboscada2.y=1020;
      emboscada3.x=1000;
      emboscada3.y=920;
      emboscada4.x=1000;
      emboscada4.y=1020;

      seguiremboscada=true;
      var ataqueemboscada=true;

      emboscada1.play('ataquesimple');
      emboscada2.play('ataquesimple');
      emboscada3.play('ataquesimple');
      emboscada4.play('ataquesimple');

      activador.destroy();
      emboscadaempieza=false;
      }
    }
    

    perseguiremboscada1()
    {
    if(vidaenemigoemboscada1==true)
    {
      ataqueemboscada=true;

        if(ataquebasicoemboscada1==0)
        {
          vidaplayer=vidaplayer-1;
          vidas = vidas.setText('Vidas: '+ vidaplayer);
          ataquebasicoemboscada1=120;

          if (vidaplayer <= 0) 
          {
            player.destroy();
            inmovil = true;
            personajevivo=false;
          }
        }
    }
    }

    perseguiremboscada2()
    {
     if(vidaenemigoemboscada2==true)
    {
      ataqueemboscada=true;

        if(ataquebasicoemboscada2==0)
        {
          vidaplayer=vidaplayer-1;
          vidas = vidas.setText('Vidas: '+ vidaplayer);
          ataquebasicoemboscada2=120;

          if (vidaplayer <= 0) 
          {
            player.destroy();
            inmovil = true;
            personajevivo=false;
          }
        }
    }
    }
    
    perseguiremboscada3()
    {
      
       if(vidaenemigoemboscada3==true)
    {
      ataqueemboscada=true;

        if(ataquebasicoemboscada3==0)
        {
          vidaplayer=vidaplayer-1;
          vidas = vidas.setText('Vidas: '+ vidaplayer);
          ataquebasicoemboscada3=120;

          if (vidaplayer <= 0) 
          {
            player.destroy();
            inmovil = true;
            personajevivo=false;
          }
        }
    }
    }

    perseguiremboscada4()
    {  
       if(vidaenemigoemboscada4==true)
    {
      ataqueemboscada=true;

        if(ataquebasicoemboscada4==0)
        {
          vidaplayer=vidaplayer-1;
          vidas = vidas.setText('Vidas: '+ vidaplayer);
          ataquebasicoemboscada4=120;

          if (vidaplayer <= 0) 
          {
            player.destroy();
            inmovil = true;
            personajevivo=false;
          }
        }
      }
    }
    

    acosoemboscada()
    {
      if(seguiremboscada==true)
      {
        if(vidaenemigoemboscada1==true)
        {
        emboscada1.direccion = new Phaser.Math.Vector2(player.x-emboscada1.x, player.y-emboscada1.y);
        emboscada1.direccion.normalize();
        emboscada1.setVelocityX(velocidadE * emboscada1.direccion.x);
        emboscada1.setVelocityY(velocidadE * emboscada1.direccion.y);
        }

        if(vidaenemigoemboscada2==true)
        {
        emboscada2.direccion = new Phaser.Math.Vector2(player.x-emboscada2.x, player.y-emboscada2.y);
        emboscada2.direccion.normalize();
        emboscada2.setVelocityX(velocidadE * emboscada2.direccion.x);
        emboscada2.setVelocityY(velocidadE * emboscada2.direccion.y);
        }

        if(vidaenemigoemboscada3==true)
        {
        emboscada3.direccion = new Phaser.Math.Vector2(player.x-emboscada3.x, player.y-emboscada3.y);
        emboscada3.direccion.normalize();
        emboscada3.setVelocityX(velocidadE * emboscada3.direccion.x);
        emboscada3.setVelocityY(velocidadE * emboscada3.direccion.y);
        }


        if(vidaenemigoemboscada4==true)
        {
        emboscada4.direccion = new Phaser.Math.Vector2(player.x-emboscada4.x, player.y-emboscada4.y);
        emboscada4.direccion.normalize();
        emboscada4.setVelocityX(velocidadE * emboscada4.direccion.x);
        emboscada4.setVelocityY(velocidadE * emboscada4.direccion.y);
        }
      }
    }

    mataremboscada1()
    {
      if (SPACE.isDown)
    {
        vidaenemigoemboscada1=false;
        emboscada1.destroy();
        var heart = heartList.create(emboscada1.x, emboscada1.y, 'hearth').setScale(0.2, 0.2);
    }
    }

    mataremboscada2()
    {
      if(SPACE.isDown && vidaenemigoemboscada2==true)
      {
      vidaenemigoemboscada2=false;
      emboscada2.destroy()
      }
    }

    mataremboscada3()
    {
      if(SPACE.isDown && vidaenemigoemboscada3==true)
      {
      vidaenemigoemboscada3=false;
      emboscada3.destroy()
      }
    }

    mataremboscada4()
    {
      if(SPACE.isDown && vidaenemigoemboscada4==true)
      {
      vidaenemigoemboscada4=false;
      emboscada4.destroy()
      var heart = heartList.create(emboscada4.x, emboscada4.y, 'hearth').setScale(0.2, 0.2);
      }
    }
}
  