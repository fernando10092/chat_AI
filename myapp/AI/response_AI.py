import os
import dotenv #pip install python-dotenv
dotenv.load_dotenv()

def artificial_intelligence_response(question)->str:

    #Importação da Biblioteca LangChain
    from langchain.chat_models import init_chat_model
    #Obtendo a API KEY do Gemini
    os.environ["GOOGLE_API_KEY"] = os.getenv("API_KEY")
    #Carregando o modelo Gemini-2.5-flash-lite
    model = init_chat_model("google_genai:gemini-2.5-flash-lite")
    #Resposta
    response = model.invoke(question)

    print(response.content)
    return str(response.content)
