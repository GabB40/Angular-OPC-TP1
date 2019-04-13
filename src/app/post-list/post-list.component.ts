import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../modeles/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() post: Post = {
    title : 'Mon premier post',
    content : 'du contenu, bla bla bla... bla bla bla... bla bla bla... bla bla bla...',
    created_at: new Date()
  }

  constructor() { }

  ngOnInit() {
  }

}
