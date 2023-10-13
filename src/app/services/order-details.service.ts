import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {
  constructor() {}

  foodDetails = [
    {
      id: 1,
      foodName: 'Sanduiche Natural de Frango',
      foodDetails: 'Sanduiche Natural de Frango',
      foodPrice: 200,
      foodImg:
        'https://static.itdg.com.br/images/1200-675/c0467524b29fe15f0cf2927ed848fab0/320181-original.jpg',
    },
    {
      id: 2,
      foodName: 'Sanduiche Natural de Frango',
      foodDetails: 'Sanduiche Natural de Frango',
      foodPrice: 200,
      foodImg:
        'https://static.itdg.com.br/images/1200-675/c0467524b29fe15f0cf2927ed848fab0/320181-original.jpg',
    },
    {
      id: 3,
      foodName: 'Sanduiche Natural de Frango',
      foodDetails: 'Sanduiche Natural de Frango',
      foodPrice: 200,
      foodImg:
        'https://static.itdg.com.br/images/1200-675/c0467524b29fe15f0cf2927ed848fab0/320181-original.jpg',
    },
    {
      id: 4,
      foodName: 'Sanduiche Natural de Frango',
      foodDetails: 'Sanduiche Natural de Frango',
      foodPrice: 200,
      foodImg:
        'https://static.itdg.com.br/images/1200-675/c0467524b29fe15f0cf2927ed848fab0/320181-original.jpg',
    },
  ];
}
