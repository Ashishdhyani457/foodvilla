import { sum } from "../testFile/sum"

test("Check sum of two ositive numbers",()=>{
    expect(sum(2,5)).toBe(7)
})