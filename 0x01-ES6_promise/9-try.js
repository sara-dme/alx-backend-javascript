export default function guardrail(mathFunction) {
    const lst = [];
    try {
        const value = mathFunction();
        lst.push(value);
    } catch (error) {
        lst.push(error.toString());
    } finally {
        lst.push('Guardrail was processed');
    }
    return lst;
}