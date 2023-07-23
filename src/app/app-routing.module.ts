import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { SingleBlogPostComponent } from './components/single-blog-post/single-blog-post.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'all-blogs',component:BlogPostListComponent},
  {path:'create-blog',component:CreateBlogComponent},
  {path:'blog-details',component:SingleBlogPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
