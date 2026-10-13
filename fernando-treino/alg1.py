valor = float(input("Digite o valor do produto"))
porcentagem = 10
desconto = valor * (porcentagem / 100)

if valor < 100:
    print(f"Sem desconto. Valor final:{valor}")

else: 
    print(f"Desconto aplicado! Valor final:{valor - desconto}")