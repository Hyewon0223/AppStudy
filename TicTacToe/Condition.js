import React from 'react';

export const Condition = (count,choose) => {
    /*
    0 1 2
    3 4 5
    6 7 8
    */
    const victory = [[0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]];

    // 승리 조건
    for (let i=0;i<victory.length;i++){
        let result = 0;
        for (let j=0;j<3;j++) {
            if (choose[victory[i][j]] === 1) {
                result++;
            }
        }
        if (result === 3) return "승리";
    }

    // 무승부 조건
    if (count === 8) return "무승부";

    // 그 외
    return "continue";
}
