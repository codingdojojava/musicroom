export class User {
    constructor(
        public userId: number = null,
        public username: string = '',
        public email: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public password: string = '',
        public favoriteSongs = [],
        public joinedRooms = [],
        public ownedRooms = [],
        public friends = [],
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ) {}
}