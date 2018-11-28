export class Post {
    title: string;
    content: string;
    created_at: Date;
    loveIts: number;

    constructor(title, content, loveIts = 0) {
        this.title = title;
        this.content = content;
        this.created_at = new Date();
        this.loveIts = loveIts;
    }
}