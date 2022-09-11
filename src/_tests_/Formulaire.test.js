import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Formulaire from '../components/formulaires/Formulaire';

// mocker la fonction useNavigate si elle est incluse dans Formulaire
jest.mock('react-router-dom', () => ({
	useNavigate: () => (jest.fn())
}))

describe('Tests du formulaire ', () => {
	// 1er test : affichage du formulaire
	test('Affichage du formulaire', () => {
		render(<Formulaire />)
		// On vérifie qu'on affiche bien l'élement qui contient le texte "Enregistrer"
		expect(screen.getByText("Enregistrer")).toBeInTheDocument()
	})

	// 2ème test sur la soumission de formulaire
	test('Soumission de formulaire', () => {
		// On mock la fonction fetch qui renvoie une promesse
		const fetchMock = jest
			.spyOn(global, 'fetch')
			.mockImplementation(() =>
				Promise.resolve()
			)
		// On déclare notre objet application dont on va saisir les valeurs dans le formulaire et envoyer via le POST
		const application = { nom: 'Athenes', version: '1.0.0', etat: 'ACTIVE' }
		// Affichage du formulaire
		render(<Formulaire />)

		// On simule un utilisateur qui tape le texte et sélectionne l'état
		userEvent.type(screen.getByLabelText(/Nom/i), application.nom)
		userEvent.type(screen.getByLabelText(/Version/i), application.version)
		userEvent.type(screen.getByLabelText(/Etat/i), application.etat)
		// Simulation du clic sur le boutton pour enregistrer
		userEvent.click(screen.getByRole('button', { name: /Enregistrer/i }))

		const headers = new Headers();
		headers.append("Content-Type", "application/json");
		// On s'attend à ce que notre fonction fetch mockée ait été appelée sur l'url indiquée,
		// avec la méthode "POST", le headers et le body précisés
		expect(fetchMock).toHaveBeenCalledWith('http://localhost:8080/applications',
			{ method: "POST", headers, body: JSON.stringify(application) })
	})
})