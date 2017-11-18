import { Component  } from '@angular/core';
import { Article } from 'app/article.model';

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html'

})
export class AppComponent {
  articles: Article[];
  
  
 constructor() {
 this.articles = [
 new Article('Angular 2', 'angular.io', 3),
 new Article('Fullstack', 'fullstack.io', 2),
 new Article('Angular Homepage', 'angular.io', 1),
 ];
 } 
 addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
 console.log(`Adding article title: ${title.value} and link: ${link.value}`);
 this.articles.push(new Article(title.value, link.value, 0));
 title.value = '';
 link.value = '';
 return false;
 }
 
  


}
