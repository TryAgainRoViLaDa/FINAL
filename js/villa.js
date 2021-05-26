
//Dinero
var dinero=0;
var dineros;

//direcciones de cerdos
var direccion1=1;
var direccion2=1;

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
var tanque;
var tanquemed;
var tanquepeque;
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

var vidatanque=3;

//CERDOS
var cerdo1;
var cerdo2;

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

var tronco

//listas
var monedaList;
var heartList;

class villa extends Phaser.Scene
{
    constructor()
    {
        super("villa");

//Dinero
var dinero=0;

//direcciones de cerdos
var direccion1=1;
var direccion2=1;

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

var vidatanque=3;

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

    this.load.atlas('ataqueb','assets/ataquebasico.png', 'assets/ataquebasico_atlas.json');
}
   
create() {

    //Capas tilemap
    map = this.make.tilemap({key:'tilemap3'});
    tileset = map.addTilesetImage('nature','gameTiles3');
    capa = map.createDynamicLayer(0, tileset);

    //colisiones
    obstaculos = map.createDynamicLayer(1, tileset);
    obstaculos.setCollisionByProperty({colisiones: false});

    //Entradas de teclado
    KeyA=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    KeyD=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    KeyW=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    KeyS=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    SPACE=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    KeyE=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    KeyQ=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);

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
    cerdo1 = this.physics.add.sprite(2140,2365,'cerdo').setScale(0.2);
    this.physics.add.overlap(player, cerdo1, this.ataque1, null, this);

    //Cerdo2
    cerdo2 = this.physics.add.sprite(2120,2430,'cerdo').setScale(0.1);
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

    //Enemigo basico
    enemigobasico = this.physics.add.sprite(1900,1500,'enemigobasico').setScale(0.15);
    enemigobasico.body.setSize(350,350);
    this.physics.add.overlap(player,enemigobasico,this.perseguir, null, this);
    this.physics.add.overlap(player, enemigobasico, this.matarpeque, null, this);
    this.physics.add.collider(enemigobasico, obstaculos);

    //Enemigo tanque
    tanque = this.physics.add.sprite(1600,1400,'tanque').setScale(0.8);
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
    this.physics.add.overlap(player,tanquepeque,this.perseguir2, null, this);
    this.physics.add.overlap(player,tanquepeque,this.atacar2, null, this);
    tanquepeque.body.setSize(400000,400000);

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

    this.physics.add.overlap(player, heartList, this.aumentarVida, null, this);

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
      frameRate: 10,
      repeat: 0
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
      key: 'ataqueb',
      frames: this.anims.generateFrameNames('ataqueb', { 
      prefix: 'basico',
      start: 0,
      end: 1,
      }),
      frameRate: 5,
      repeat: 0
    });

    final=this.physics.add.sprite(50,100, 'tronco').setScale(0.01);
    final.body.setSize(10000,10000);
    this.physics.add.overlap(player, final, this.siguiente, null, this);
}

update()
{
    //Funciones
    this.movercerdo();
    this.girar();
    this.movercerdo2();
    this.girar2();
    this.atacar();
    this.atacar2();
    this.Speedboost();
    this.todosloscd();
    this.conversar();
    this.moveplayer();
    this.acosar();
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
        var moneda2 = monedaList.create(cerdo1.x,cerdo1.y,'moneda').setScale(0.08);
    }
}

//Matar al cerdo pequeño
ataque2(objeto1, objeto2)
{
    if(SPACE.isDown)
    {
        objeto2.destroy();
        var moneda2 = monedaList.create(cerdo2.x,cerdo2.y,'moneda').setScale(0.08);
    }
}

//Mover cerdo grande
movercerdo()
{  
    if(direccion1==1)
    {
        cerdo1.y=cerdo1.y-1;

        if(cerdo1.y==2000)
        {
            direccion1=0;
        }
    }
}

//girar cerdo grande
girar()
{
    if(direccion1==0)
    {
        cerdo1.y=cerdo1.y+1;

        if(cerdo1.y==2400)
        { 
            
            direccion1=1;
        }
    }
}

//mover cerdo pequeño
movercerdo2()
{  
    if(direccion2==1)
    {
        cerdo2.y=cerdo2.y-1;

        if(cerdo2.y==2000)
        {
            direccion2=0;
        }
    }
}

//girar cerdo pequeño
girar2()
{
    if(direccion2==0)
    {
        cerdo2.y=cerdo2.y+1;

        if(cerdo2.y==2400)
        { 
            
            direccion2=1;
        }
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

//Enemigo basico te persigue
perseguir()
{
   if(vidaenemigo==true)
    {
        seguir=true;
        if(ataquebasico==0)
        {
          enemigobasico.play('ataqueb');
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
    
}

//Enemigo basico te ataca
atacar()
{
   if(seguir==true & inmovil ==false) 
    {
        enemigobasico.direccion = new Phaser.Math.Vector2(player.x-enemigobasico.x, player.y-enemigobasico.y);
        enemigobasico.direccion.normalize();
        enemigobasico.setVelocityX(velocidad * enemigobasico.direccion.x);
        enemigobasico.setVelocityY(velocidad * enemigobasico.direccion.y);   
    }
    
}

//Matar enemigo basico
matarpeque()
{  
    if (SPACE.isDown)
    {
        if(golpeneemigo==0)
        {
        enemigobasico.destroy();
        seguir=false;
        vidaenemigo=false;
        mision=true;
        }
        
        if(vidaplayer<10)
      {
        var heart = heartList.create(enemigobasico.x, enemigobasico.y, 'hearth').setScale(0.1, 0.1);
      }
    }
}

//tanque te persigue
perseguir2()
{
   if(vidaenemigo2==true)
    {
        seguir2=true;
        tanquepeque.destroy();
        this.animaciontanque();
    }
}

//tanque camina
animaciontanque()
{
  if(vidatanque>0)
  {
    tanque.play('tanquecaminar');
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
        seguir2=false;
        vidaenemigo2=false;
      }
      else if(vidatanque==2 && cdenemigo==0)
      {
        vidatanque=1;
        cdenemigo=50;
      }
      else if(vidatanque==3 && cdenemigo==0)
      {
        vidatanque=2;
        cdenemigo=50;
      }
        
    }
}

//PUZLE
puzle1()
{
    if(KeyE.isDown && pieza==0 && mision==true)
    {
        pieza=1;
        antorchae1 = this.physics.add.sprite(1730,1050, 'hoguerapagada').setScale(0.8);
        antorchae1.play('encender');
        fuego=1;
    }
}

puzle2()
{
    if(KeyE.isDown && pieza==1 && mision==true)
    {
        pieza=2;
        antorchae2 = this.physics.add.sprite(2335,820, 'hoguerapagada').setScale(0.8);
        antorchae2.play('encender');
        fuego=2;
    }
}

puzle3()
{
    if(KeyE.isDown && pieza==2 && mision==true)
    {
        pieza=3;
        antorchae3 = this.physics.add.sprite(1695,215, 'hoguerapagada').setScale(0.8);
        antorchae3.play('encender');
        fuego=3;
    }
}

puzle4()
{
    if(KeyE.isDown && pieza==3 && mision==true)
    {
        pieza=4;
        antorchae4 = this.physics.add.sprite(2175,380, 'hoguerapagada').setScale(0.8);
        antorchae4.play('encender');
        fuego=4;
        var corazon = heartList.create(1860,470,'hearth').setScale(0.1, 0.1);
        var corazon2 = heartList.create(1830,500,'hearth').setScale(0.1, 0.1);
        var corazon3 = heartList.create(1830,440,'hearth').setScale(0.1, 0.1);
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
    if(inmovil==false)
    {
    vidaplayer = vidaplayer + 3;
    vidas = vidas.setText('Vidas: '+ vidaplayer);
    objeto2.destroy();
    }
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
    Phaser.Scene.call(this, { key: 'laia3', active: true });          
    this.scene.transition({ target: 'laia3', duration: 2000 });
}

}