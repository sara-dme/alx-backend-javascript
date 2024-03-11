export default function hasValuesFromArray(set, lst) {
    let x = true;
    lst.map((i) => {
        if (!set.has(x)) {
            x = false;
        }
    });
    return x;
}