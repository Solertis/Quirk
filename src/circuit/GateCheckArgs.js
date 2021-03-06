/**
 * Values used by gate disable reason finder functions.
 */
class GateCheckArgs {
    /**
     * @param {!Gate} gate
     * @param {!GateColumn} innerColumn
     * @param {!int} outerRow
     * @param {!int} measuredMask
     * @param {!Map.<!string, *>} context
     * @param {!boolean} isNested
     */
    constructor(gate,
                innerColumn,
                outerRow,
                measuredMask,
                context,
                isNested) {
        /** @type {!Gate} */
        this.gate = gate;
        /** @type {!GateColumn} */
        this.innerColumn = innerColumn;
        /** @type {!int} */
        this.outerRow = outerRow;
        /** @type {!int} */
        this.measuredMask = measuredMask;
        /** @type {!Map.<!string, *>} */
        this.context = context;
        /** @type {!boolean} */
        this.isNested = isNested;
    }
}

export {GateCheckArgs}
