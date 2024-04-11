const rows: string[] = ['8', '7', '6', '5', '4', '3', '2', '1']
const columns: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const reversedRows: string[] = [...rows].reverse()
const reversedColumns: string[] = [...columns].reverse()

const defaultGame: GameOptions = {
    white: true
}
const defaultPosition: GamePosition = {
    pieces: [
        {
            position: 'a2',
            type: 'pawn'
        }
    ]
}

export const useBoard = () => {
    const rowsAndColoumns = {
        rows,columns,reversedRows,reversedColumns
    }
    
    return {
        rowsAndColoumns,
        defaultGame,
        defaultPosition
    }
}