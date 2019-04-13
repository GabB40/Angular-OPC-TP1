import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/modeles/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post:Post;

  constructor() { }

  ngOnInit() {
  }
  onLove(){
    this.post.loveIts++;
    console.log('post et nb de loveIt :', this.post.title , this.post.loveIts);
  }
  onDontLove(){
    this.post.loveIts--;
    console.log('post et nb de loveIt :', this.post.title , this.post.loveIts);
  }
  colorPost(){
    // let color = this.post.loveIts === 0 ? 'black' : (this.post.loveIts>0 ? 'green': 'red');
    // return color;
    return this.post.loveIts === 0 ? 'black' : (this.post.loveIts>0 ? 'green': 'red');
  }
  isLoved(){
    return this.post.loveIts > 0 ? true : false;
  }

}
