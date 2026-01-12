


export interface PlayerWon{
    PlayerName: string,
    GameName?: string,
    role: number,
    is_won: boolean
}

export interface GameData{
    Id: string,
    Name: string,
    is_won?: boolean,
    date: Date,
    player_win: Array<PlayerWon>
}