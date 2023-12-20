# CONFIGURAÇÃO ESSENCIAL _(Primeiro uso do Git)_

Faça o <a href="https://git-scm.com/download">download do git</a> para o seu sistema operacional.
_(Para usuários inexperientes, basta avançar as etapas do instalador sem alterar os campos sugeridos.)_

Para os próximos passos, abra o terminal (Recomendo usar o Git Bash, instalado junto com o git) no diretório raiz do usuário.

Para conferir se a instalação foi concluída com sucesso, digite:

```
git --version
```

Ainda no terminal, digite os seguintes comandos (um por vez), substituindo os respectivos dados:

```bash
git config --global user.name "seu-nome"
git config --global user.email "seu-email@exemplo.com"
```

`seunome` e `seu-email@exemplo.com` devem ser substituído pelo username e email utilizados na sua conta do GitHub.

Para conferir as informações, use:

```
git config --list
```

## CRIAÇÃO DA CHAVE SSH

<strong>Por que usar uma chave SSH?</strong><br>
Embora ambos os mecanismos sejam seguros, SSH é preferível ao HTTPS, já que permite autenticação automática. Isto significa que não é necessário o uso repetido de senhas após a configuração inicial.

Para gerar sua própria chave de autenticação, utilize um dos comandos a seguir:

```bash
# Comando padrão. Irá gerar um arquivo nomeado como "id_rsa"
ssh-keygen -t rsa -b 4096 -C "seu-email@exemplo.com"

# Alternativamente, para criar uma chave com nome customizado:
ssh-keygen -t rsa -b 4096 -C "seu-email@exemplo.com" -f ~/.ssh/nome_da_chave
```

Ignore o pedido de definir um local ou senha _(Se quiser)_ e apenas pressione a tecla `Enter` sucessivamente até visualizar uma figura, sinalizando que a sua chave foi criada com sucesso.

Execute os comandos abaixo (um por vez) para adicionar sua chave ao agente SSH:

OBS: O comando `eval` e `ssh-add `não são reconhecidos nativamente pelo CMD do windows. Portanto, recomenda-se que utilize outro terminal para esta etapa, como o Git Bash ou WSL.

```bash
eval "$(ssh-agent -s)"
```

```bash
ssh-add ~/.ssh/id_rsa

# alternativamente:
ssh-add ~/.ssh/nome_da_chave
```

Queremos copiar o conteúdo do arquivo _`id_rsa.pub`_ para cadastrar a chave de autenticação no GitHub. Para copiar seu conteúdo, utilize:

```bash
# Windows:
clip < .ssh/id_rsa.pub

# Bash:
cat ~/.ssh/id_rsa.pub
```

No caso do comando `cat`, copie todo o texto que aparecer _(Desde ssh-rsa...até o final do seu endereço de email)_.

Abra o <a href="https://github.com/">GitHub</a> em um navegador, selecione sua foto no canto superior direito e vá em _`Setting > SSH and GPG Keys > New SSH Key`_. Cole a sua chave no campo indicado e dê a ela um nome de identificação.

Pronto! Agora você pode enviar os seus arquivos de forma segura por meio da criptografia SSH!

<br>

# Comandos do dia a dia

## Workflow comum:

```bash
# Primeira interação com o repositório:
git clone <endereco>
cd <pasta-clonada>

# Repositório já clonado:
git pull origin <nome-branch-principal>
git checkout -b feature/nome-da-atividade
git add .
git commit -m 'feat: descrição da sua atividade'
git push -u origin nome-branch
```

## Comandos Individuais:

O git funciona como uma linha do tempo em que os pontos da história são chamados de commits.

`git init` - Iniciar um repositório local (Iniciar a linha do tempo)

`git status` - Observar a situação dos arquivos

`git add nome-arquivo` - Escolher os arquivos que serão usados para criar um commit (Ponto na história)

`git commit -m "Descrição do que foi feito"` - Criar um ponto retornável na linha do tempo do git

`git log` - Visualizar todos os commits realizados anteriormente, utilize:

Antes de enviar para o diretório remoto (Fazer o push), é preciso fazer a ligação entre o diretório local e o remoto. Para isso, abra o diretório remoto no GitHub no navegador, selecione `Code` e copie o código HTTPS ou SSH. Volte ao terminal e utilize:

```bash
git remote add origin endereço-HTTPS-ou-SSH-do-repositorio
```

Com isso, estamos atribuindo a `origin` o endereço informado, não havendo mais a necessidade de usar o todo o texto do endereço completo quando necessário. Caso queira conferir se o procedimento foi feito com êxito, utilize: `git remote -v`.

Para enviar o código para o Repositório Remoto, utilize:

```bash
# Atualizar branch remota já existente:
git push

# Quando for criar uma nova branch remota:
git push -u origin nome-branch
```

# MANIPULAÇÃO DE BRANCHES

`git branch nome-branch` - Criar uma nova branch

`git branch -a` - Ver todas as branches dos repositórios (Local e Remoto):

`git branch checkout nome-branch` - Selecionar uma nova branch

`git branch -m novo-nome` - Renomear uma branch local, quando já se está na branch desejada:

`git branch -d nome-branch` - Deletar uma branch local:

`git push -u origin nova` - Enviar para uma branch remota que ainda não existe e fazer a ligação entre ambas:

`git push origin --d nome-branch` - Deletar uma branch remota

`git branch --unset-upstream` - Desfazer a ligação entre uma branch local e uma remota

`git pull origin nome-branch` - Para recuperar arquivos de um repositório:

> OBS: O `git pull` é basicamente uma fusão dos comandos `git fetch` + `git merge`!

# FORMAS DE INTERAGIR COM UM REPOSITÓRIO

Em um repositório público, qualquer usuário pode utilizar `git clone` para ter acesso a todos os dados e branches de um projeto. No entanto, NÃO terá permissão para dar push a não ser que o administrador forneça permissão direta.

## 1 - Permissão Direta

O perfil que contém o repositório pode ir em `settings > colaboradores` e definir quem tem permissão total. Em seguida, os convidados vão receber uma notificação por email, a qual devem confirmar. Depois, basta clonar a branch e enviar as alterações livremente com git push.

## 2 - Fork

Ao abrir um repositório e selecionar `Fork`, o usuário criará um novo repositório em seu próprio perfil com todos os dados do repo desejado. As alterações serão realizadas dentro do repositório forkado e, ao visualizar o seu próprio repositório no GitHub Web, o usuário poderá utilizar a opção `Contribuir > Open Pull Request`. Dessa forma, o administrador do repo original poderá visualizar as alterações sugeridas e decidir se fará ou não o merge na branch original.

<br>

# Desafio Git e GitHub

Criar um Fork deste repositório, clonar, criar uma nova branch, realizar as alterações sugeridas, enviar para o repositório remoto e abrir um Pull Request.

Alterações:

- Adicionar na lista de Hotéis Populares um hotel com os seguintes dados:

  - Localização: `Fortaleza`
  - Nome: `Hotel Villa Reali`
  - Imagem: `https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  - Preço: `R$ 250,00`
  - Classificação: `3.6`

# MATERIAL DE APOIO:

- https://github.com/occamengenharia/trainee-2022-2/tree/master/03_Git-e-Github
- https://www.hostinger.com.br/tutoriais/comandos-basicos-de-git/
- https://blog.rocketseat.com.br/iniciando-com-git-github/

# EXTENSÕES RECOMENDADAS:

- Live Server
- GitLens
- GitHub Copilot
- Commitji
