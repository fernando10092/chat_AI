from django.shortcuts import render
from .AI.response_AI import artificial_intelligence_response
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
def home(request):
    return render(request, ("index.html"))

@api_view(['GET','POST'])
def Api(request):
    # 1. Correct data extraction
    question = request.data.get("question", "Olá, tudo bem?") if request.method == 'POST' else "Olá, tudo bem?"
    
    try:
        # 2. Call AI and return consistent key
        ai_response = artificial_intelligence_response(question)
        return Response({"response": ai_response})
    except Exception as e:
        # 3. Handle the 'RESOURCE_EXHAUSTED' crash gracefully
        return Response({"response": "Limite diário atingido. Tente novamente mais tarde."}, status=200)