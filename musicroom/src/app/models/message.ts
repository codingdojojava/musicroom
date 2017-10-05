export class Message {
    constructor(
        public messageId: number = null,
        public content: string = '',
        public likes: number = 0,
        public _owner = '',
        public comments = [],
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}