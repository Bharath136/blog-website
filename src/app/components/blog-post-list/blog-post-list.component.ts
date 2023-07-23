// blog-post-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent {
  blogs: any[] = [];

  constructor() {
    this.blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
  }

  isContentExpanded(blog: any): boolean {
    return blog.expanded || false;
  }

  toggleContent(blog: any): void {
    blog.expanded = !this.isContentExpanded(blog);
  }

  getDisplayedContent(blog: any): string {
    if (this.isContentExpanded(blog)) {
      return blog.content;
    } else {
      const words = blog.content.split(' ');
      return words.slice(0, 20).join(' ') + '...';
    }
  }

  deleteBlog(id: string) {
    this.blogs = this.blogs.filter((blog) => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  }

  
  isEditing(blog: any): boolean {
    return blog.editing || false;
  }

  editBlog(blog: any): void {
    blog.editing = true;
  }

  saveBlog(blog: any): void {
    blog.editing = false;
    const existingData = JSON.parse(localStorage.getItem('blogs') || '[]');
  
    // Find the index of the current blog in the existingData array
    const index = existingData.findIndex((item: any) => item.id === blog.id);
  
    if (index !== -1) {
      // Update the existing blog entry in the array with the edited blog
      existingData[index] = blog;
  
      // Store the updated array back in local storage
      localStorage.setItem('blogs', JSON.stringify(existingData));
    }
    // Implement any additional logic if needed
  }
  
}



