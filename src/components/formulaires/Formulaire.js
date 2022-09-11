import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Select from "../Select";

const Formulaire = () => {
    const [etat, setEtat] = useState("ACTIVE");
    const [nom, setNom] = useState("");
    const [version, setVersion] = useState("");

    const enregistrer = () => {
        const application = { nom: nom, version: version, etat: etat };

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch(
            "http://localhost:8080/applications",
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(application),
            }
        )
            .then((reponse) => {
                console.log(reponse);
                alert("Enregistrement OK")
            })
            .catch((e) => console.log(e));
    };

    const navigate = useNavigate();

    return (
        <>
            <div>
                <Input id="nom" label="Nom" value={nom} setValue={setNom} />
            </div>
            <div>
                <Input id="version" label="Version :" value={version} setValue={setVersion} />
            </div>
            <div>
                <Select id="etat" label="Etat de l'application" value={etat} onChange={(e) => setEtat(e.target.value)}>
                    <option value="ACTIVE">Active</option>
                    <option value="OBSOLETE">Obsolète</option>
                </Select>
            </div>
            <button type="button" onClick={(e) => enregistrer()}>
                Enregistrer
            </button>
            <button onClick={() => navigate("/tableau")}>Consulter le tableau</button>
        </>
    );
};

export default Formulaire;
