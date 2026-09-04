---

# `DIAGNOSTICO.md`

Aqui eu **não colocaria "Diagnóstico resumido"**. Fica mais profissional deixar como um relatório mesmo.

```md
# Diagnóstico — biogutex.com

Análise realizada na página fornecida para a primeira etapa do desafio.

Foram feitos testes funcionais, inspeção do código e testes em diferentes tamanhos de tela.

## 1. Botões "Buy Now" retornam 404

**Gravidade:** Crítico

### O que está errado

Os botões "Buy Now" dos planos Basic e Standard levam para páginas que não existem e retornam erro 404.

### Onde está

Nos links `linkoffer` e `linkoffer3`.

### Por que acontece

Os links utilizados ainda são placeholders e não foram substituídos pelos links reais de checkout.

### Como corrigiria

Substituir os placeholders pelos links corretos de checkout e testar o fluxo antes da publicação.

### Impacto

O usuário não consegue avançar para a compra através desses planos.

## 2. Botão "Most Popular" não possui link

**Gravidade:** Crítico

### O que está errado

O botão do plano "Most Popular" não possui um link funcional. Ao clicar, nenhuma ação acontece.

Além disso, o problema também interfere no script responsável pelo rastreamento da origem dos links.

### Por que acontece

O botão não possui o link esperado pela lógica existente da página, causando uma falha no script.

### Como corrigiria

Adicionar o link correto ao botão e tratar a ausência de links no script para evitar que um erro nesse elemento interrompa o funcionamento dos demais.

### Impacto

O usuário não consegue acessar o checkout desse plano e o problema pode afetar o rastreamento dos outros links.

## 3. Link da página de contato retorna 404

**Gravidade:** Alta

### O que está errado

O link para a página de contato retorna erro 404.

### Onde está

Na área relacionada à garantia/reembolso.

### Por que acontece

O arquivo foi referenciado como `contact.hmtl` em vez de `contact.html`.

### Como corrigiria

Corrigir a extensão do arquivo para `contact.html` e testar o link novamente.

### Impacto

Um usuário que precise entrar em contato, principalmente em uma situação relacionada a reembolso ou suporte, encontra uma página inexistente.

## 4. Texto com baixo contraste na seção "Why Alpha Rock"

**Gravidade:** Alta

### O que está errado

O texto da seção possui pouco contraste com o background, dificultando a leitura.

### Por que acontece

A cor utilizada no texto é muito próxima da cor do fundo.

### Como corrigiria

Utilizar uma cor mais clara para o texto, mantendo o contraste utilizado no restante da seção.

### Impacto

A leitura do conteúdo fica prejudicada, principalmente em telas com menor qualidade ou brilho reduzido.

## 5. Cards de preço cortados em telas menores

**Gravidade:** Alta

### O que está errado

Em telas menores, os cards da seção de preços ultrapassam a largura disponível e parte do conteúdo fica cortada.

### Onde está

Na seção de preços, principalmente em larguras de até aproximadamente 900px.

### Por que acontece

A seção fica aproximadamente 10% mais larga que a viewport e não possui um ajuste responsivo adequado para compensar essa diferença.

### Como corrigiria

Revisar a largura do container e o comportamento dos cards nos breakpoints menores, garantindo que todo o conteúdo fique dentro da largura disponível.

### Impacto

O usuário pode não conseguir visualizar ou acessar corretamente informações e ações relacionadas aos planos.

## 6. FAQ não abre ao clicar

**Gravidade:** Média

### O que está errado

As respostas das perguntas do FAQ não são exibidas quando o usuário clica nas perguntas.

### Por que acontece

O código responsável por abrir e fechar as respostas está comentado/desativado.

### Como corrigiria

Reativar a lógica JavaScript do accordion e testar os estados aberto e fechado.

## 7. Título incorreto na aba do navegador

**Gravidade:** Média

### O que está errado

A aba do navegador exibe "SteelPower" em vez do nome correspondente à página atual.

### Onde está

No `<title>` do documento e nas referências utilizadas para compartilhamento.

### Por que acontece

Existem referências de outro projeto/template que não foram atualizadas.

### Como corrigiria

Atualizar o `<title>` e revisar os metadados relacionados ao compartilhamento da página.

# Bônus

## 8. Imagem de depoimento espelhada

**Gravidade:** Baixa

Uma das imagens utilizadas na seção de depoimentos está horizontalmente espelhada.

### Como corrigiria

Verificar o asset utilizado e remover o espelhamento aplicado, caso esteja sendo feito via CSS ou substituir o arquivo pela versão correta.

## 9. Menu mobile presente no CSS, mas ausente na página

**Gravidade:** Baixa

Foi encontrada uma estrutura de estilos para um menu mobile, porém não existe uma estrutura correspondente no HTML atual.

### Como corrigiria

Verificar se o menu ainda faz parte do projeto. Caso seja necessário, implementar sua estrutura e comportamento. Caso não seja utilizado, remover os estilos que ficaram sem uso.
```
