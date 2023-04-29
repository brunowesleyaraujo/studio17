import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  servicos = {
    serv1: {
      type: 'Corte',
      price: 'R$ 15,00',
    },
    serv2: {
      type: 'Corte Degradê',
      price: 'R$ 20,00',
    },
    serv3: {
      type: 'Aparo de Barba',
      price: 'R$ 10,00',
    },
    serv4: {
      type: 'Barba',
      price: 'R$ 15,00',
    },
    serv5: {
      type: 'Corte & Barba',
      price: 'R$ 30,00',
    },
    serv6: {
      type: 'Sobrancelha',
      price: 'R$ 10,00',
    },
    serv7: {
      type: 'Pé do Cabelo',
      price: 'R$ 10,00',
    },
    serv8: {
      type: 'Pintura',
      price: 'R$ 20,00',
    }
  }
}
