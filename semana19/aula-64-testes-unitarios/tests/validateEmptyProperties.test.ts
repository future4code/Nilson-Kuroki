import { validateEmptyProperties } from "../src/validateEmptyProperties";

describe("Testing validateEmptyProperties", () => {

    test("Teste de retorno do erro em caso de string vazia", () => {

        const result = validateEmptyProperties({
            email: ""
        });

        expect(result.isValid).toBe(false);
        expect(result.errors).toContainEqual({
            key: "email",
            value: ""
        });
    });

    test("Teste de retorno do erro em caso de número 0", () => {

        const result = validateEmptyProperties({
            age: 0
        });

        expect(result.isValid).toBe(false);
        expect(result.errors).toContainEqual({
            key: "age",
            value: 0
        });

    });

    test("Teste de retorno do erro em caso de valor undefined", () => {

        const result = validateEmptyProperties({
            username: undefined
        });

        expect(result.isValid).toBe(false);
        expect(result.errors).toContainEqual({
            key: "username",
            value: undefined
        });
    });

    test("Teste de retorno do erro em caso de valor null", () => {

        const result = validateEmptyProperties({
            card: null
        });

        expect(result.isValid).toBe(false);
        expect(result.errors).toContainEqual({
            key: "card",
            value: null
        });
    });

    test("Teste de retorno do erro em caso de um valor válido e quatro inválidos", () => {

        

        const result = validateEmptyProperties({
            name: "Astrodev",
            email: "",
            age: 0,
            username: undefined,
            card: null
        });

        expect(result.isValid).toBe(false);
        expect(result.errors.length).toBe(4);
    });

    test("Teste de retornm em caso de entrada válida", ()=>{

        expect.assertions(2);

        const result = validateEmptyProperties({
            name: "Astrodev"
        });

        expect(result.isValid).toBe(true);
        expect(result.errors.length).toBe(0);

    });
});