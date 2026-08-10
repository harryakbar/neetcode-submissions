class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const record = [];

        for (const op of operations) {
            if (!Number.isNaN(Number(op))) {
                record.push(Number(op))
            } else if (op === "+" && record.length >= 2) {
                const previous1 = record[record.length - 1];
                const previous2 = record[record.length - 2];
                record.push(previous1 + previous2)
            } else if (op === "D" && record.length >= 1) {
                record.push(record[record.length - 1] * 2)
            } else if (op === "C") {
                record.splice(record.length - 1)
            }
        }

        console.log(record)

        return record.reduce((prev, acc) => acc + prev, 0)
    }
}
