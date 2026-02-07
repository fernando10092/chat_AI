import { useState } from 'react';
import { Body, Left, Title, Inp, Btn, Right, Label } from './main_styled';

const Main = () => {

    const [type, setType] = useState<string>()
    const [answer, setAnswer] = useState<string>("");

    return (
        <>
            <Body>
                <Left>
                    <Title>AI Agent</Title>
                    <Inp id="ipt" onChange={(e) => {
                        setType(e.target.value)
                    }} />

                    <Btn onClick={async () => {

                        const dados = type

                        try {
                            const response = await fetch("http://127.0.0.1:8000/api/?format=json", {
                                method: 'POST',
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({question:dados})
                            })
                            const data = await response.json();
                            if (response.ok) {
                                setAnswer(data.response);
                            } else {
                                alert("Erro no else " + response.statusText)
                            }

                        } catch (err) {
                            alert("Erro ao buscar resposta da IA " + err)
                        }

                    }}>ENVIAR</Btn>
                </Left>
                <Right>
                    <Label>
                        {answer}
                    </Label>

                </Right>
            </Body>
        </>
    )
}

export default Main;