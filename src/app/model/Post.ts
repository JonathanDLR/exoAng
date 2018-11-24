export class Post {
    title: string;
    content: string;
    created_at: Date;

    constructor(title, content, created_at) {
        this.title = title;
        this.content = content;
        this.created_at = created_at;
    }
}