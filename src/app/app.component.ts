import { Component } from '@angular/core';
import { Post } from './modeles/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Array<Post> = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, consectetur doloremque! Aliquid suscipit doloribus nulla sint, repudiandae ea quasi quos recusandae. Nesciunt tempora labore deserunt culpa ut doloremque atque impedit mollitia nihil molestiae, alias nobis et quam cupiditate maiores sunt dicta numquam expedita harum enim? Voluptate rerum soluta sit ea dolorem fugiat magni architecto deleniti eligendi itaque eius amet, hic quaerat eveniet nulla perferendis, aliquam optio nisi. Illum sit dicta expedita reiciendis unde voluptatibus, accusamus excepturi suscipit. Voluptatum, reiciendis quae?',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, consectetur doloremque! Aliquid suscipit doloribus nulla sint, repudiandae ea quasi quos recusandae. Nesciunt tempora labore deserunt culpa ut doloremque atque impedit mollitia nihil molestiae, alias nobis et quam cupiditate maiores sunt dicta numquam expedita harum enim? Voluptate rerum soluta sit ea dolorem fugiat magni architecto deleniti eligendi itaque eius amet, hic quaerat eveniet nulla perferendis, aliquam optio nisi. Illum sit dicta expedita reiciendis unde voluptatibus, accusamus excepturi suscipit. Voluptatum, reiciendis quae?',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, consectetur doloremque! Aliquid suscipit doloribus nulla sint, repudiandae ea quasi quos recusandae. Nesciunt tempora labore deserunt culpa ut doloremque atque impedit mollitia nihil molestiae, alias nobis et quam cupiditate maiores sunt dicta numquam expedita harum enim? Voluptate rerum soluta sit ea dolorem fugiat magni architecto deleniti eligendi itaque eius amet, hic quaerat eveniet nulla perferendis, aliquam optio nisi. Illum sit dicta expedita reiciendis unde voluptatibus, accusamus excepturi suscipit. Voluptatum, reiciendis quae?',
      loveIts: 0,
      created_at: new Date()
    }
  ]
}
