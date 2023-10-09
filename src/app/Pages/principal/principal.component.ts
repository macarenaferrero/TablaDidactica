import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Track } from 'src/app/Utils/track';
import { Howl } from 'howler';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit{

  public idioma: string = "";
  public tema: string = "";
  player!: Howl;

  playlist: Track[] = [
    {
      name: 'leon',
      path: '../../../assets/media/leon_es.mp3'
    },
    {
      name: 'elefante',
      path: '../../../assets/media/elefante_es.mp3'
    },
    {
      name: 'pavo',
      path: '../../../assets/media/pavo_es.mp3'
    },
    {
      name: 'cebra',
      path: '../../../assets/media/cebra_es.mp3'
    },
    {
      name: 'cocodrilo',
      path: '../../../assets/media/cocodrilo_es.mp3'
    },
    {
      name: 'tigre',
      path: '../../../assets/media/tigre_es.mp3'
    },
    {
      name: 'leon_port',
      path: '../../../assets/media/leon_port.mp3'
    },
    {
      name: 'elefante_port',
      path: '../../../assets/media/elefante_port.mp3'
    },
    {
      name: 'pavo_port',
      path: '../../../assets/media/pavo_port.mp3'
    },
    {
      name: 'cebra_port',
      path: '../../../assets/media/cebra_port.mp3'
    },
    {
      name: 'cocodrilo_port',
      path: '../../../assets/media/cocodrilo_port.mp3'
    },
    {
      name: 'tigre_port',
      path: '../../../assets/media/tigre_port.mp3'
    },
    {
      name: 'leon_en',
      path: '../../../assets/media/leon_en.mp3'
    },
    {
      name: 'elefante_en',
      path: '../../../assets/media/elefante_en.mp3'
    },
    {
      name: 'pavo_en',
      path: '../../../assets/media/pavo_en.mp3'
    },
    {
      name: 'cebra_en',
      path: '../../../assets/media/cebra_en.mp3'
    },
    {
      name: 'cocodrilo_en',
      path: '../../../assets/media/cocodrilo_en.mp3'
    },
    {
      name: 'tigre_en',
      path: '../../../assets/media/tigre_en.mp3'
    },
    {
      name: 'uno',
      path: '../../../assets/media/uno_es.mp3'
    },
    {
      name: 'dos',
      path: '../../../assets/media/dos_es.mp3'
    },
    {
      name: 'tres',
      path: '../../../assets/media/tres_es.mp3'
    },
    {
      name: 'cuatro',
      path: '../../../assets/media/cuatro_es.mp3'
    },
    {
      name: 'cinco',
      path: '../../../assets/media/cinco_es.mp3'
    },
    {
      name: 'seis',
      path: '../../../assets/media/seis_es.mp3'
    },
    {
      name: 'uno_port',
      path: '../../../assets/media/uno_port.mp3'
    },
    {
      name: 'dos_port',
      path: '../../../assets/media/dos_port.mp3'
    },
    {
      name: 'tres_port',
      path: '../../../assets/media/tres_port.mp3'
    },
    {
      name: 'cuatro_port',
      path: '../../../assets/media/cuatro_port.mp3'
    },
    {
      name: 'cinco_port',
      path: '../../../assets/media/cinco_port.mp3'
    },
    {
      name: 'seis_port',
      path: '../../../assets/media/seis_port.mp3'
    },
    {
      name: 'uno_en',
      path: '../../../assets/media/uno_en.mp3'
    },
    {
      name: 'dos_en',
      path: '../../../assets/media/dos_en.mp3'
    },
    {
      name: 'tres_en',
      path: '../../../assets/media/tres_en.mp3'
    },
    {
      name: 'cuatro_en',
      path: '../../../assets/media/cuatro_en.mp3'
    },
    {
      name: 'cinco_en',
      path: '../../../assets/media/cinco_en.mp3'
    },
    {
      name: 'seis_en',
      path: '../../../assets/media/seis_en.mp3'
    },
    {
      name: 'rojo',
      path: '../../../assets/media/rojo_es.mp3'
    },
    {
      name: 'azul',
      path: '../../../assets/media/azul_es.mp3'
    },
    {
      name: 'amarillo',
      path: '../../../assets/media/amarillo_es.mp3'
    },
    {
      name: 'verde',
      path: '../../../assets/media/verde_es.mp3'
    },
    {
      name: 'naranja',
      path: '../../../assets/media/naranja_es.mp3'
    },
    {
      name: 'gris',
      path: '../../../assets/media/gris_es.mp3'
    },
    {
      name: 'rojo_port',
      path: '../../../assets/media/rojo_port.mp3'
    },
    {
      name: 'azul_port',
      path: '../../../assets/media/azul_port.mp3'
    },
    {
      name: 'verde_port',
      path: '../../../assets/media/verde_port.mp3'
    },
    {
      name: 'naranja_port',
      path: '../../../assets/media/naranja_port.mp3'
    },
    {
      name: 'amarillo_port',
      path: '../../../assets/media/amarillo_port.mp3'
    },
    {
      name: 'gris_port',
      path: '../../../assets/media/gris_port.mp3'
    },
    {
      name: 'rojo_en',
      path: '../../../assets/media/rojo_en.mp3'
    },
    {
      name: 'azul_en',
      path: '../../../assets/media/azul_en.mp3'
    },
    {
      name: 'verde_en',
      path: '../../../assets/media/verde_en.mp3'
    },
    {
      name: 'amarillo_en',
      path: '../../../assets/media/amarillo_en.mp3'
    },
    {
      name: 'naranja_en',
      path: '../../../assets/media/naranja_en.mp3'
    },
    {
      name: 'gris_en',
      path: '../../../assets/media/gris_en.mp3'
    },

  ];
  constructor(private router:Router, private afAuth:AngularFireAuth, private el: ElementRef) { }


  ngOnInit() {
    this.idioma = "espaniol";
    this.tema = "animales";
  }

  selectIngles(){
    this.idioma="ingles";
    console.log(this.idioma);
  }
  selectPortugues(){
    this.idioma="portugues";
    console.log(this.idioma);
  }
  selectEspaniol() {
    this.idioma = "espaniol";
    console.log(this.idioma);
  }
  selectNumeros(){
    this.tema="numeros";
    console.log(this.tema);
  }
  selectAnimales(){
    this.tema="animales";
    console.log(this.tema);
  }
  selectColores(){
    this.tema="colores";
    console.log(this.tema);
  }

  selecioneAlgo(seleccion: string) {
      if(this.idioma=="ingles")
      {
        seleccion = seleccion+"_en";
        const track = this.playlist.find(item => item.name === seleccion);

        if(track){
          this.player = new Howl({
            src: [track.path]
          });
          this.player.play();
        }

      }
      if(this.idioma=="portugues")
      {
        seleccion = seleccion+"_port";
        const track = this.playlist.find(item => item.name === seleccion);

        if(track){
          this.player = new Howl({
            src: [track.path]
          });
          this.player.play();
        }
      }
    if (this.idioma == "espaniol") {
      const track = this.playlist.find(item => item.name === seleccion);

        if(track){
          this.player = new Howl({
            src: [track.path]
          });
          this.player.play();
        }
    }
  }


  logOut(){
    this.afAuth.signOut().then(() => this.router.navigate([""]));
  }


}
