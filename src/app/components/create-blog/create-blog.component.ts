import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 method from the uuid library

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent {

  blog = {
    id: '', // Add the id property to the blog object
    title: '',
    author: '',
    image: '',
    content: '',
    tags: ''
  };

  constructor() { }

  onSubmit() {
    // Generate a unique ID for the new blog entry using uuidv4()
    this.blog.id = uuidv4();

    // Retrieve existing data from local storage or initialize an empty array if no data exists
    const existingData = JSON.parse(localStorage.getItem('blogs') || '[]');

    // Push the new blog entry into the array
    existingData.push(this.blog);

    // Store the updated array back in local storage
    localStorage.setItem('blogs', JSON.stringify(existingData));

    console.log('Blog data stored in local storage:', existingData);
    alert('Blog Created Successful!')
    this.blog = {
      id: '',
      title: '',
      author: '',
      image: '',
      content: '',
      tags: ''
    };
  }

  isFormEmpty(): boolean {
    return !(this.blog.title || this.blog.author || this.blog.image || this.blog.content || this.blog.tags);
  }
}
