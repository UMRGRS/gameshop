export interface Users {
    uid: string,
    name:string,
    email: string,
    owned_games:number,
    completed_games:number,
    about:string,
    user_games: Array<string>,
    isMod: boolean,
    isAdmin: boolean,
}
