# • CONFIGURAÇÃO INICIAL *(Primeiro uso do Git)*

No terminal, digite os seguintes comandos (um por vez), substituindo os respectivos dados:

```bash
git config --global user.name "Seu Nome"
git config --global user.email seu-email@exemplo.com
```
---
## • Criação da Chave SSH

Utilizando o Git Bash, Windows PowerShell, Terminal do VSCode ou qualquer outro terminal (que não seja o CMD Padrão do Windows), digite o seguinte comando, com o seu email:

```bash
ssh-keygen -t ed25519 -C "seu-email@exemplo.com"
```

Em seguida, ignore o pedido de definir um local ou senha e apenas pressione a tecla `Enter` sucessivamente até visualizar uma figura, sinalizando que a sua chave foi criada com sucesso.

Para acessar a pasta padrão em que ela se encontra, digite:

```bash
cd ~/.ssh/
```
Ou, alternativamente:

```bash
cd
cd .ssh
```

Nessa pasta há um arquivo *`id_rsa.pub`*, o que pode ser conferido com o comando `dir`. Para visualizar a chave de identificação, utilize:

```bash
cat id_rsa.pub
```
e copie a chave que aparecer *(Desde ssh-rsa...até o final do seu endereço de email)*.

Abra o GitHub em um navegador, selecione sua foto no canto superior direito e vá em *`Setting > SSH and GPG Keys > New SSH Key`*. Cole a sua chave no campo indicado e dê a ela um nome de identificação.

Pronto! Agora você pode enviar os seus arquivos de forma segura!


# Comandos do dia a dia
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


Para enviar o código para o Repositório Remoto, utilize:

```bash
git push origin nome-branch
```

Caso este seja o seu primeiro Repositório, provavelmente nome-branch será `master`. No entanto, a seguir há um pequeno tutorial sobre o uso de branches.

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

Para deletar uma branch remota, utilize um dos seguintes comandos:
```bash
git push origin --delete nome-branch
git push origin :nome-branch
```

Para desfazer a ligação entre uma branch local e uma remota:
```bash
git branch --unset-upstream
```

Para criar uma nova branch local com base em uma remota:
```bash
 git fetch origin nome-branch
```
# MATERIAL DE APOIO:
• https://www.hostinger.com.br/tutoriais/comandos-basicos-de-git/