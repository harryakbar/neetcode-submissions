class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let q = new Queue()
        students.forEach((s) => {
            q.push(s)
        });

        let queueLeft = students.length; 
        for (let i = 0; i < sandwiches.length; i+= 1) {
            let s = sandwiches[i];
            let count = 0;

            console.log(q, queueLeft)
            while (count <= queueLeft && s !== q.front()) {
                    q.push(q.pop())
                    count += 1;
            }

            if (s === q.front()) {
                q.pop()
                queueLeft -= 1;
            } else {
                break;
            }
        }

        return queueLeft;
    }
}