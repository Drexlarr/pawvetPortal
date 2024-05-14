import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Usuario {
  nombre: string;
  tipoConsulta: string;
  fecha: string;
  hora: string;
  img: string;
}
@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [NgFor],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})


export class AppointmentsComponent {
  usuarios: Usuario[] = [
    { nombre: 'Alexander Meléndez', tipoConsulta: 'Consulta general', fecha: '2024-05-14', hora: '10:00 AM', img:'https://upload.wikimedia.org/wikipedia/commons/5/58/Shiba_inu_taiki.jpg'},
    { nombre: 'Alexander Meléndez', tipoConsulta: 'Consulta general', fecha: '2024-05-14', hora: '10:00 AM', img:'https://upload.wikimedia.org/wikipedia/commons/5/58/Shiba_inu_taiki.jpg'},
    { nombre: 'Alexander Meléndez', tipoConsulta: 'Consulta general', fecha: '2024-05-14', hora: '10:00 AM', img:'https://upload.wikimedia.org/wikipedia/commons/5/58/Shiba_inu_taiki.jpg'},
    { nombre: 'Alexander Meléndez', tipoConsulta: 'Consulta general', fecha: '2024-05-14', hora: '10:00 AM', img:'https://upload.wikimedia.org/wikipedia/commons/5/58/Shiba_inu_taiki.jpg'},
    { nombre: 'Diego Bazán', tipoConsulta: 'Consulta de emergencia', fecha: '2024-05-13', hora: '11:00 AM',img:'https://i.pinimg.com/236x/40/2f/73/402f7382d9bb9731e6cbf2da1d0822a6.jpg' },
    { nombre: 'Dina Boluarte', tipoConsulta: 'Consulta especializada', fecha: '2024-05-15', hora: '12:00 PM',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJABV5wACGI_pHTTObF0UetjmE4Ah7qHBDA&s' },
    { nombre: 'Dina Boluarte', tipoConsulta: 'Consulta especializada', fecha: '2024-05-15', hora: '12:00 PM',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJABV5wACGI_pHTTObF0UetjmE4Ah7qHBDA&s' }
  
  ];

  usuariosHoy: Usuario[] = [];
  usuariosFuturos: Usuario[] = [];
  usuariosPasados: Usuario[] = []

  constructor() {
    // Obtener la fecha actual
    const fechaActual = new Date();
    const fechaHoy = fechaActual.toISOString().slice(0, 10); // Solo la parte de la fecha YYYY-MM-DD

    // Filtrar usuarios por fecha
    this.usuariosHoy = this.usuarios.filter(usuario => usuario.fecha === fechaHoy);
    this.usuariosFuturos = this.usuarios.filter(usuario => new Date(usuario.fecha) > fechaActual);
    this.usuariosPasados = this.usuarios.filter(usuario => new Date(usuario.fecha) < fechaActual);
  }

  selectedTab: number = 0;

  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}
