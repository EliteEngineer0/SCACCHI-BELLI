<script lang="ts" setup>
    const { rowsAndColoumns } = await useBoard()

    const props = defineProps<{
        game: GameOptions
        position: GamePosition
    }>()

    const chosenRowsArray = ref(rowsAndColoumns.rows)
    const chosenColumnsArray = ref(rowsAndColoumns.columns)

    watch(props.game, () => {
        chosenRowsArray.value = props.game.white ? rowsAndColoumns.rows : rowsAndColoumns.reversedRows
        chosenColumnsArray.value = props.game.white ? rowsAndColoumns.columns : rowsAndColoumns.reversedColumns
    })

    function backgroundColorHandler(row: string, column: string, captures: string[]) {
        return (+row + column.charCodeAt(0)) % 2 === 1 ? 'bg-purple-500' : 'bg-slate-100'
    }

    console.log(rowsAndColoumns)
</script>

<template>
    <div class="chess-table unselectable">
        <div v-for="row of chosenRowsArray" no-gutters>
            <div v-for="column of chosenColumnsArray">
                <div
                class="chess-square"
                :class="
                    backgroundColorHandler(row, column)
                "
                >
                <PieceImage
                    :position="position"
                    :row="row"
                    :column="column"
                    :game="game"
                />
                <div
                    v-if="row === chosenRowsArray[7]"
                    class="x-coordinate text-dark"
                >
                    {{ column }}
                </div>
                <div
                    v-if="column === chosenColumnsArray[0]"
                    class="y-coordinate text-dark"
                >
                    {{ row }}
                </div>
                </div>
            </div>
        </div>
    </div>
</template>