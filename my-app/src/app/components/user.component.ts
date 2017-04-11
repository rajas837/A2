import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,//why we are using module id
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postService: PostsService) {
    this.name = 'Rajasekar';
    this.email = 'raj@gmail.com';
    this.address = {
      street: '12 main street',
      city: 'bangalore',
      state: 'KA'
    };
    this.hobbies = ['Music','Dance','Reading'];
    this.showHobbies = false;
    this.postService.getPosts().subscribe(posts => {
      // console.log(posts);
      this.posts = posts;
    })
  };

  toggleHobbies(){
    if(this.showHobbies == true){
      this.showHobbies = false;
    }else{
      this.showHobbies = true;
    }
  };

  addHobby(hobby : string){
    this.hobbies.push(hobby);
  }

  deleteHobby(index : number){
    this.hobbies.splice(index, 1);
  }
}

interface address{
  street: string;
  city: string;
  state: string;
}

interface Post{
  id: number;
  title: string;
  body: string;
}