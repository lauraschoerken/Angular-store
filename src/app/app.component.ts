import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-fundamentos';

  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://static.platzi.com/media/user_upload/toy-3ec89547-2b4f-43a0-98b8-50d3f97da898.jpg',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://www.online-image-editor.com/styles/2019/images/power_girl.png',
    }
  ]

  register = {
    name: '',
    email:'',
    password:''
  }

  onRegister() {
    console.log(this.register)
  }
}
