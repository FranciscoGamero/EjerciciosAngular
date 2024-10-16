import { Component } from '@angular/core';
export interface Alumnos {
  numAlumno: number;
  nombre: string;
  apellidos: string;
  nif: string;
  edad: number;
  cursoMatriculado: string
}
const ELEMENT_DATA: Alumnos[] = [
  {numAlumno: 1, nombre: 'Francisco Manuel', apellidos: 'Gamero Rodríguez', nif: '12345678a', edad: 19, cursoMatriculado: "2ºDAM"},
  {numAlumno: 2, nombre: 'María Teresa', apellidos: 'López García', nif: '23456789B', edad: 20, cursoMatriculado: "2ºDAM"},
  {numAlumno: 3, nombre: 'Juan Carlos', apellidos: 'Martín Pérez', nif: '34567890C', edad: 18, cursoMatriculado: "2ºDAM"},
  {numAlumno: 4, nombre: 'Ana Isabel', apellidos: 'Sánchez Fernández', nif: '45678901D', edad: 21, cursoMatriculado: "2ºDAM"},
  {numAlumno: 5, nombre: 'Pedro José', apellidos: 'Ruiz Gómez', nif: '56789012E', edad: 19, cursoMatriculado: "2ºDAM"},
  {numAlumno: 6, nombre: 'Carmen Julia', apellidos: 'Ramírez Ortiz', nif: '67890123F', edad: 22, cursoMatriculado: "2ºDAM"},
  {numAlumno: 7, nombre: 'Luis Miguel', apellidos: 'Moreno García', nif: '78901234G', edad: 20, cursoMatriculado: "2ºDAM"},
  {numAlumno: 8, nombre: 'Beatriz Elena', apellidos: 'Hernández López', nif: '89012345H', edad: 21, cursoMatriculado: "2ºDAM"},
  {numAlumno: 9, nombre: 'Javier Antonio', apellidos: 'Díaz Sánchez', nif: '90123456I', edad: 18, cursoMatriculado: "2ºDAM"},
  {numAlumno: 10, nombre: 'Laura Patricia', apellidos: 'Gómez Rodríguez', nif: '01234567J', edad: 20, cursoMatriculado: "2ºDAM"},
];
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  displayedColumns: string[] = ['numAlumno', 'nombre', 'apellidos', 'nif','edad','cursoMatriculado'];
  alumno = ELEMENT_DATA;
}


