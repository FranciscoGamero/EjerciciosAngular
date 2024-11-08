import { Component, Input, input, OnInit } from '@angular/core';
import { Gasolinera } from '../../models/gasolinera-response.interfaces';
import { GasolineraService } from '../../services/gasolinera.service';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MunicipioService } from '../../services/municipio.service';
import { CodeList } from '../../models/codigoPostal.interface';
import { ComunidadAutonoma } from '../../models/comunidades-autonomas.interface';
import { ComunidadAutonomaService } from '../../services/comunidad-autonoma.service';
import { ProvinciaService } from '../../services/provincia.service';
import { Provincia } from '../../models/provincias.interface';

@Component({
  selector: 'app-lista-gasolineras',
  templateUrl: './lista-gasolineras.component.html',
  styleUrls: ['./lista-gasolineras.component.css'],
})
export class ListaGasolinerasComponent implements OnInit {
  listadoGasolineras: Gasolinera[] = [];
  gasolinerasFiltradas: Gasolinera[] = [];
  gasolinerasPrecio: Gasolinera[] = [];
  fuelTypes: string[] = ['Biodiesel', 'GasoleoA', 'GasoleoB', '95', '98', 'Hidrogeno'];
  combustiblesSeleccionados: string[] = [];
  @Input() precioMaximo: number = 2;
  @Input() precioMinimo: number = 0;
  selectedFuel: string = 'all';
  codigoPostalBuscado: string = '';
  myControl = new FormControl('');
  todosLosCodigosPostales: CodeList[] = [];
  codigosPostalesAutocompleter: Observable<string[]> = new Observable<string[]>();
  listaComunidadesAutonomas: ComunidadAutonoma[] = [];
  comunidadSeleccionada: string = 'all';
  comunidadIsSeleccionada: boolean = false;
  listaProvincias: Provincia[] = [];
  provinciaSeleccionada: string = 'all';


  constructor(private gasolineraService: GasolineraService, private municipioService: MunicipioService,
    private comunidadesAutonomaService: ComunidadAutonomaService, private provinciasService: ProvinciaService) { }

  ngOnInit() {
    this.gasolineraService.getGasList().subscribe((respuesta) => {
      const respuestaEnString = JSON.stringify(respuesta);
      let parsedData;
      try {
        parsedData = JSON.parse(respuestaEnString);
        let arrayGasolineras = parsedData['ListaEESSPrecio'];
        this.listadoGasolineras = this.cleanProperties(arrayGasolineras).splice(0, 200);
        this.gasolinerasFiltradas = this.listadoGasolineras;
        console.log(this.listadoGasolineras);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });
    this.municipioService.getPostalCodeList().subscribe((respuesta) => {
      this.todosLosCodigosPostales = respuesta;
    });

    this.codigosPostalesAutocompleter = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filtroCodigosPostales(value!.toString() || ''))
    );
    this.comunidadesAutonomaService.getComunidadesAutonomasList().subscribe((respuesta) => {
      this.listaComunidadesAutonomas = respuesta;
    });
    this.provinciasService.getProvinciaList
  }

  private cleanProperties(arrayGasolineras: any) {
    let newArray: Gasolinera[] = [];
    arrayGasolineras.forEach((gasolineraChusquera: any) => {
      const gasolineraConNombresGuenos: any = {};

      let gasolinera = new Gasolinera(
        gasolineraChusquera['IDEESS'],
        gasolineraChusquera['Rótulo'],
        this.corregirPrecio(gasolineraChusquera['Precio Gasolina 95 E5']),
        this.corregirPrecio(gasolineraChusquera['Precio Gasoleo A']),
        gasolineraChusquera['C.P.'],
        gasolineraChusquera['Dirección'],
        gasolineraChusquera['Localidad'],
        gasolineraChusquera['Provincia'],
        parseFloat(gasolineraChusquera['Latitud'].replace(',', '.')),
        parseFloat(gasolineraChusquera['Longitud (WGS84)'].replace(',', '.')),
        gasolineraChusquera['Horario'],
        gasolineraChusquera['Remisión'],
        this.corregirPrecio(gasolineraChusquera['Precio Biodiesel']),
        this.corregirPrecio(gasolineraChusquera['Precio Gasolina 98 E5']),
        this.corregirPrecio(gasolineraChusquera['Precio Hidrogeno']),
        this.corregirPrecio(gasolineraChusquera['Precio Gasoleo B'])
      );

      newArray.push(gasolinera);
    });
    return newArray;
  }

  private corregirPrecio(price: string): number {
    const precioCorregido = parseFloat(price.replace(',', '.'));
    return isNaN(precioCorregido) ? 0 : precioCorregido;
  }

  filterByFuel(fuel: string) {
    switch (fuel) {
      case 'all':
        this.gasolinerasFiltradas = this.listadoGasolineras;
        break;
      case '95':
        this.gasolinerasFiltradas = this.listadoGasolineras.filter(
          (gasolinera) => gasolinera.price95 !=0
        );

        break;
      case 'gasoleoA':
        this.gasolinerasFiltradas = this.listadoGasolineras.filter(
          (gasolinera) => {
            return gasolinera.priceGasoleoA !=0;
          }
        );
        break;
      case 'biodiesel':
        this.gasolinerasFiltradas = this.listadoGasolineras.filter(
          (gasolinera) => gasolinera.priceBiodiesel !=0
        );
        break;
      case '98':
        this.gasolinerasFiltradas = this.listadoGasolineras.filter(
          (gasolinera) => {
            return gasolinera.priceGasolina98 !=0;
          }
        );
        break;
      case 'hidrogeno':
        this.gasolinerasFiltradas = this.listadoGasolineras.filter(
          (gasolinera) => {
            return gasolinera.priceHidrogeno !=0;
          }
        );
        break;
      case 'gasoleoB':
        this.gasolinerasFiltradas = this.listadoGasolineras.filter(
          (gasolinera) => {
            return gasolinera.priceGasoleoB !=0;
          }
        );
        break;
    }
  }
  filterByPrice() {

    this.gasolinerasFiltradas = this.listadoGasolineras.filter(
      (gasolinera) =>
        (gasolinera.price95 !=0 && gasolinera.price95 >= this.precioMinimo && gasolinera.price95 <= this.precioMaximo) ||
        (gasolinera.priceGasoleoA !=0 && gasolinera.priceGasoleoA >= this.precioMinimo && gasolinera.priceGasoleoA <= this.precioMaximo) ||
        (gasolinera.priceBiodiesel !=0 && gasolinera.priceBiodiesel >= this.precioMinimo && gasolinera.priceBiodiesel <= this.precioMaximo) ||
        (gasolinera.priceGasolina98 !=0 && gasolinera.priceGasolina98 >= this.precioMinimo && gasolinera.priceGasolina98 <= this.precioMaximo) ||
        (gasolinera.priceHidrogeno !=0 && gasolinera.priceHidrogeno >= this.precioMinimo && gasolinera.priceHidrogeno <= this.precioMaximo) ||
        (gasolinera.priceGasoleoB !=0 && gasolinera.priceGasoleoB >= this.precioMinimo && gasolinera.priceGasoleoB <= this.precioMaximo)
    );

  }
  filterByCodigoPostal() {
    if (this.codigoPostalBuscado === '') {
      this.gasolinerasFiltradas = this.listadoGasolineras;
    } else {
      this.gasolinerasFiltradas = this.listadoGasolineras.filter(
        (gasolinera) => gasolinera.postalCode === this.codigoPostalBuscado
      );
    }
  }
  modificarListaCarburantes(tipoCarburante: string) {
    if (!this.combustiblesSeleccionados.includes(tipoCarburante)) {
      this.combustiblesSeleccionados.push(tipoCarburante);
    } else {
      this.combustiblesSeleccionados.splice(this.combustiblesSeleccionados.indexOf(tipoCarburante), 1);
    }
  }
  filtrarPorCarburantes() {
    if (this.combustiblesSeleccionados.length === 0) {
      this.gasolinerasFiltradas = this.listadoGasolineras;
    } else {
      this.gasolinerasFiltradas = this.listadoGasolineras.filter((gasolinera) => {
        return this.combustiblesSeleccionados.some((combustible) => {
          switch (combustible) {
            case 'Biodiesel':
              return gasolinera.priceBiodiesel !=0;
            case 'GasoleoA':
              return gasolinera.priceGasoleoA !=0;
            case 'GasoleoB':
              return gasolinera.priceGasoleoB !=0;
            case '95':
              return gasolinera.price95 !=0;
            case '98':
              return gasolinera.priceGasolina98 !=0;
            case 'Hidrogeno':
              return gasolinera.priceHidrogeno !=0;
            default:
              return false;
          }
        });
      });
    }
  }
  filtroCodigosPostales(value: string): string[] {
    return this.todosLosCodigosPostales.map((codeList) => codeList.codigo_postal.toString()).filter((codigoPostal) => codigoPostal.includes(value));
  }

  filtrarPorComunidadAutonoma(IDCCAA: string) {
    this.gasolineraService.getGasListPorPorComunidad(IDCCAA).subscribe((respuesta) => {
      const respuestaEnString = JSON.stringify(respuesta);
      let parsedData;
        parsedData = JSON.parse(respuestaEnString);
        let arrayGasolineras = parsedData['ListaEESSPrecio'];
        this.listadoGasolineras = this.cleanProperties(arrayGasolineras).splice(0, 200);
        this.gasolinerasFiltradas = this.listadoGasolineras;
    });
    if(IDCCAA !== 'all') {
    this.comunidadIsSeleccionada = true;
    this.buscarProvincias(IDCCAA);
  } else{
    this.comunidadIsSeleccionada = false;
  }
  }
   buscarProvincias(IDCCAA: string) {
    this.provinciasService.getProvinciaList(IDCCAA).subscribe((respuesta) => {
      this.listaProvincias = respuesta;
    });
  }
  filtrarPorProvincia(IDProvincia: string) {
    this.gasolineraService.getGasListPorPorProvincia(IDProvincia).subscribe((respuesta) => {
      const respuestaEnString = JSON.stringify(respuesta);
      let parsedData;
        parsedData = JSON.parse(respuestaEnString);
        let arrayGasolineras = parsedData['ListaEESSPrecio'];
        this.listadoGasolineras = this.cleanProperties(arrayGasolineras).splice(0, 200);
        this.gasolinerasFiltradas = this.listadoGasolineras;
    });
  }
}