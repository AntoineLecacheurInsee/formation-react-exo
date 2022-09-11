import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Select from '../components/Select'

describe("Tests du Select", () => {
    // 1er test : affichage d'un Select
    test("Affichage du Select", () => {
        render(<Select id="test" label="Test" value="B" onChange={(e) => { }}>
            <option value="A">TEST A</option>
            <option value="B">TEST B</option>
        </Select>)
        const selectInput = screen.getByLabelText(/Test/i)
        // On vérifie qu'on affiche bien l'input qui a pour label "Test" et a une valeur 0
        expect(selectInput).toBeInTheDocument();
        expect(selectInput).toHaveValue("B");
        expect(screen.getByRole('option', { name: 'TEST A' }).selected).toBe(false)
        expect(screen.getByRole('option', { name: 'TEST B' }).selected).toBe(true)
    })

    test("Sélection avec Select", () => {
        // On fait un Mock de la fonction de mise à jour de l'état après saisie
        const setMock = jest.fn();

        render(<Select id="test" label="Test" value="B" onChange={(e) => setMock(e.currentTarget.value)}>
            <option value="A">TEST A</option>
            <option value="B">TEST B</option>
        </Select>)

        // On simule une saisie utilisateur
        userEvent.selectOptions(screen.getByLabelText(/Test/i), ["A"]);

        // On vérifie que la fonction de onChange a été appelée une fois
        expect(setMock).toHaveBeenCalledTimes(1);
    })
})