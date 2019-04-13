import { Component } from '@angular/core';
import { Post } from './modeles/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post1: Post = {
    title : 'Mon deuxième post',
    content : 'du contenu, bla bla bla... bla bla bla... bla bla bla... bla bla bla...',
    created_at: new Date()
  }
}
