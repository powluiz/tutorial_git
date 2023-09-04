# • CONFIGURAÇÃO INICIAL _(Primeiro uso do Git)_

No terminal, digite os seguintes comandos (um por vez), substituindo os respectivos dados:

```bash
git config --global user.name "Seu Nome"
git config --global user.email seu-email@exemplo.com
```

---

## • Criação da Chave SSH

Utilizando o Git Bash, Windows PowerShell, Terminal do VSCode ou qualquer outro terminal (que não seja o CMD Padrão do Windows), digite o seguinte comando, com o seu email:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Alternativamente, para criar uma chave com nome customizado:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/id_nome_chave_rsa
```

Ignore o pedido de definir um local ou senha (Se quiser) e apenas pressione a tecla `Enter` sucessivamente até visualizar uma figura, sinalizando que a sua chave foi criada com sucesso.

Execute os comandos abaixo para adicionar sua chave ao agente SSH:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

Para acessar a pasta padrão em que a chave se encontra, digite:

```bash
cd ~/.ssh/
```

Ou, alternativamente:

```bash
cd
cd .ssh
```

Nessa pasta há um arquivo _`id_rsa.pub`_, o que pode ser conferido com o comando `dir`. Para visualizar a chave de identificação, utilize:

```bash
cat id_rsa.pub
```

e copie a chave que aparecer _(Desde ssh-rsa...até o final do seu endereço de email)_.

Abra o GitHub em um navegador, selecione sua foto no canto superior direito e vá em _`Setting > SSH and GPG Keys > New SSH Key`_. Cole a sua chave no campo indicado e dê a ela um nome de identificação.

Pronto! Agora você pode enviar os seus arquivos de forma segura!

<br>

# Comandos do dia a dia

## Resumo do flow comum:

```bash
git pull origin nome-branch
git checkout -b feature/nome-da-atividade
git add .
git commit -m 'feat: descrição da sua atividade'
git push
```

## Comandos Individuais:

Para criar iniciar um repositório local (E criar a pasta .git):

```bash
git init
```

Para observar a situação dos arquivos na pasta local, após já ter criado o repositório com `git init`:

```bash
git status
```

Para adicionar/Atualizar um arquivo ao repositório local. Alternativamente, pode-se utilizar `git add .` para adicionar/atualizar todos os arquivos presentes na pasta selecionada.

```bash
git add nome-arquivo
git add .
```

Com o arquivo adicionado, é preciso dar um commit para que, de fato, esteja pronto para ser "empurrado" ao diretório remoto

```bash
git commit -m "Descrição do que foi feito"
```

Para visualizar todos os commits realizados anteriormente, utilize:

```bash
git log
```

Antes de enviar para o diretório remoto (Fazer o push), é preciso fazer a ligação entre o diretório local e o remoto. Para isso, abra o diretório remoto no GitHub no navegador, selecione `Code` e copie o código HTTPS ou SSH. Volte ao terminal e utilize:

```bash
git remote add origin endereço-HTTPS-ou-SSH-do-repositorio
```

Com isso, estamos atribuindo a `origin` o endereço informado, não havendo mais a necessidade de usá-lo quando necessário. caso queira conferir se o procedimento foi feito com êxito, utilize: `git remote -v`.

Para enviar o código para o Repositório Remoto, utilize pela primeira vez, utilize:

```bash
git push -u origin nome-branch
```

Para enviar o código para o Repositório Remoto outras vezes, com a ligação entre o remoto e o local já criada:

```bash
git push
```

Caso este seja o seu primeiro Repositório, provavelmente nome-branch será `master`. No entanto, a seguir há um pequeno tutorial sobre o uso de branches.

<br>

# MANIPULAÇÃO DE BRANCHES

Para criar uma nova branch local:

```bash
git branch nome-branch
```

Para ver todas as branches dos repositórios (Local e Remoto):

```bash
git branch -a
```

Para selecionar uma nova branch

```bash
git branch checkout nome-branch
```

Para renomear uma branch local, quando já se está na branch desejada:

```bash
git branch -m novo-nome
```

Para deletar uma branch local:

```bash
git branch -d nome-branch
```

Enviar para uma branch remota que ainda não existe e fazer a ligação entre ambas, utilize uma das opções equivalentes abaixo:

```bash
 git push -u origin nova
 git push --set-upstream origin nova
```

Para deletar uma branch remota, utilize:

```bash
git push origin --delete nome-branch
```

Para desfazer a ligação entre uma branch local e uma remota:

```bash
git branch --unset-upstream
```

Para recuperar arquivos de um repositório:

```bash
 git fetch origin nome-branch
```

OBS: O `git pull` é basicamente uma fusão dos comandos `git fetch` + `git merge`!

<br>

# FORMAS DE INTERAGIR COM UM REPOSITÓRIO

## 1 - Permissão Direta

O perfil que contém o repositório pode ir em `settings > colaboradores` e definir quem tem permissão total. Em seguida, os convidados vão receber uma notificação por email, a qual devem confirmar. Depois, basta utilizar os comandos a seguir e fazer as alterações livremente:

```
git clone chave-SSH
cd nome-repositorio
```

## 2 - Tentativa Direta

Em um repositório público, qualquer usuário pode utilizar `git clone chave-SSH` para ter acesso a todos os dados e branches de um projeto. No entanto, NÃO terá permissão para dar push a não ser que o administrador do repositório realize os passos citados anteriormente.

## 3 - Fork

Ao abrir um repositório e selecionar `Fork`, o usuário criará um novo repositório em seu próprio perfil com todos os dados do repo desejado e as alterações serão realizadas normalmente. No entanto, ao visualizar o seu próprio repositório no GitHub Web, o usuário poderá utilizar a opção `Contribuir > Open Pull Request`. Dessa forma, o administrador do repo original poderá visualizar as alterações sugeridas e decidir se fará ou não o merge na branch original.

OBS: NÃO existe comando direto para fork via terminal!

<br>

# Desafio Git e GitHub

Clonar este repositório, criar uma nova branch, realizar as alterações sugeridas nos arquivos indicados e abrir um Pull Request.

Alterações:

- Corrigir a importação do arquivo `style.css` dentro de `index.html`
- Adicionar mais um item na lista de hotéis populares com os seguintes dados:

  - Localização: `Fortaleza`
  - Nome: `Hotel Villa Reali`
  - Imagem: `https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  - Preço: `R$ 250,00`
  - Classificação: `4.7`

- Corrigir a exibição do nome dos hotéis na lista

<br>

# MATERIAL DE APOIO:

- <a href="https://youtu.be/aiPd6VbRplY">TUTORIAL EM VIDEO DO DESAFIO PROPOSTO</a>
- https://github.com/occamengenharia/trainee-2022-2/tree/master/03_Git-e-Github
- https://www.hostinger.com.br/tutoriais/comandos-basicos-de-git/
