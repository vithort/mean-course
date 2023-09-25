import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"],
})
export class PostCreateComponent {
  @Output() postCreated = new EventEmitter();

  enteredContent = "";
  enteredTitle = "";

  onAddPost(): void {
    const post = { title: this.enteredTitle, content: this.enteredContent };
    this.postCreated.emit(post);
  }
}
