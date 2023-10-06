import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {

  public idioma: string = "";
  public tema: string = "";
  constructor(private router:Router, private afAuth:AngularFireAuth, private nativeAudio: NativeAudio) { }

  ngOnInit() {
    this.idioma = "espaniol";
    this.tema = "animales";
    this.cargarAudiosAnimalesEspaniol();
    this.cargarAudiosAnimalesIngles();
    this.cargarAudiosAnimalesPortugues();
    this.cargarAudiosColoresEspaniol();
    this.cargarAudiosColoresIngles();
    this.cargarAudiosColoresPortugues();
    this.cargarAudiosNumerosEspaniol();
    this.cargarAudiosNumerosIngles();
    this.cargarAudiosNumerosPortugues();
  }
  cargarAudiosAnimalesEspaniol() {
    this.nativeAudio.preloadComplex('leon', '../../../assets/media/leon_es.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('elefante', '../../../assets/media/elefante_es.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('pavo', '../../../assets/media/pavo_es.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cebra', '../../../assets/media/cebra_es.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cocodrilo', '../../../assets/media/cocodrilo_es.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('tigre', '../../../assets/media/tigre_es.mp3', 1, 1, 0).then(() => {     });
  }
  cargarAudiosAnimalesPortugues()
  {
    this.nativeAudio.preloadComplex('leon_port', '../../../assets/media/leon_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('elefante_port', '../../../assets/media/elefante_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('pavo_port', '../../../assets/media/pavo_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cebra_port', '../../../assets/media/cebra_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cocodrilo_port', '../../../assets/media/cocodrilo_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('tigre_port', '../../../assets/media/tigre_port.mp3', 1, 1, 0).then(() => {     });
  }

  cargarAudiosAnimalesIngles()
  {
    this.nativeAudio.preloadComplex('leon_en', '../../../assets/media/leon_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('elefante_en', '../../../assets/media/elefante_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('pavo_en', '../../../assets/media/pavo_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cebra_en', '../../../assets/media/cebra_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cocodrilo_en', '../../../assets/media/cocodrilo_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('tigre_en', '../../../assets/media/tigre_en.mp3', 1, 1, 0).then(() => {     });
  }
  cargarAudiosNumerosEspaniol()
  {
    this.nativeAudio.preloadComplex('uno', '../../../assets/media/uno_es.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('dos', '../../../assets/media/dos_es.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('tres', '../../../assets/media/tres_es.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cuatro', '../../../assets/media/cuatro_es.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cinco', '../../../assets/media/cinco_es.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('seis', '../../../assets/media/seis_es.mp3', 1, 1, 0).then(() => {     });
  }
  cargarAudiosNumerosPortugues()
  {
    this.nativeAudio.preloadComplex('uno_port', '../../../assets/media/uno_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('dos_port', '../../../assets/media/dos_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('tres_port', '../../../assets/media/tres_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cuatro_port', '../../../assets/media/cuatro_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cinco_port', '../../../assets/media/cinco_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('seis_port', '../../../assets/media/seis_port.mp3', 1, 1, 0).then(() => {     });
  }

  cargarAudiosNumerosIngles()
  {
    this.nativeAudio.preloadComplex('uno_en', '../../../assets/media/uno_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('dos_en', '../../../assets/media/dos_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('tres_en', '../../../assets/media/tres_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cuatro_en', '../../../assets/media/cuatro_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cinco_en', '../../../assets/media/cinco_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('seis_en', '../../../assets/media/seis_en.mp3', 1, 1, 0).then(() => {     });
  }

  cargarAudiosColoresEspaniol()
  {
    this.nativeAudio.preloadComplex('rojo', '../../../assets/media/rojo.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('azul', '../../../assets/media/azul.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('gris', '../../../assets/media/gris.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('naranja', '../../../assets/media/naranja.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('verde', '../../../assets/media/verde.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('amarillo', '../../../assets/media/amarillo.mp3', 1, 1, 0).then(() => {     });
  }
  cargarAudiosColoresPortugues()
  {
    this.nativeAudio.preloadComplex('rojo_port', '../../../assets/media/rojo_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('azul_port', '../../../assets/media/azul_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('gris_port', '../../../assets/media/gris_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('naranja_port', '../../../assets/media/naranja_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('verde_port', '../../../assets/media/verde_port.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('amarillo_port', '../../../assets/media/amarillo_port.mp3', 1, 1, 0).then(() => {     });
  }

  cargarAudiosColoresIngles()
  {
    this.nativeAudio.preloadComplex('rojo_en', '../../../assets/media/rojo_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('azul_en', '../../../assets/media/azul_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('gris_en', '../../../assets/media/gris_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('naranja_en', '../../../assets/media/naranja_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('verde_en', '../../../assets/media/verde_en.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('amarillo_en', '../../../assets/media/amarillo_en.mp3', 1, 1, 0).then(() => {     });
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
        var eleccion = seleccion+"_en";
        this.nativeAudio.play(eleccion, () => {
          this.nativeAudio.stop(eleccion);
        });
      }
      if(this.idioma=="portugues")
      {
        var eleccion = seleccion+"_port";
        this.nativeAudio.play(eleccion, () => {
          this.nativeAudio.stop(eleccion);
        });
      }
    if (this.idioma == "espaniol") {
      this.nativeAudio.play(seleccion, () => {
        this.nativeAudio.stop(seleccion);
      });
    }
  }


  logOut(){
    this.afAuth.signOut().then(() => this.router.navigate([""]));
  }
}
