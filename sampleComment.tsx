
export interface timepass {
    /**
         * Specifies the index of the column where the axis is associated,
         * when the chart area is divided into multiple plot areas by using `columns`.
         * ```html
         * <div id='Chart'></div>
         * ```
         * ```typescript
         * let chart: Chart = new Chart({
         * ...
         *     columns: [{ width: '50%' },
         *               { width: '50%' }],
         *     axes: [{
         *                name: 'xAxis 1',
         *                columnIndex: 1,
         *     }],
         * ...
         * });
         * chart.appendTo('#Chart');
         * ```
         *
         * @default 0
         */

    columnIndex?: number;
}