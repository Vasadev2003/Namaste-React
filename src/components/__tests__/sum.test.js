
import { sum } from "../sum";

test("whether it add two numbers",()=>{
    const result = sum(5,5);

    expect(result).toBe(10);
})