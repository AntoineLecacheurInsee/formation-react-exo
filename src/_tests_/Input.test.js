import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '../components/formulaires/Input'

describe("Tests de l'Input", () => {
    // 1er test : affichage d'une Input
    test("Affichage de l'Input", () => {
        render(<Input id="test" label="Test" value="valeur test" setValue={(e) => { }} />)
        // On vérifie qu'on affiche bien l'élement qui contient le texte "Test"
        expect(screen.getByLabelText(/Test/i)).toBeInTheDocument()
    })

    test("Saisie dans l'Input", () => {
        // On fait un Mock de la fonction de mise à jour de l'état après saisie
        const setMock = jest.fn();

        render(<Input id="test" label="Test" value="" setValue={setMock} />)

        // On simule une saisie utilisateur
        userEvent.type(screen.getByLabelText(/Test/i), "coucou")

        // On vérifie que la fonction de setValue a été appelée une fois par caractère
        expect(setMock).toHaveBeenCalledTimes(6);
    })
})