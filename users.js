// [{id: number, email: string, senha: string, admin: boolean}]

const users = [];

// 1-Salvar um novo usuário;

let id = 1;

let create = (email, senha, admin = false) => {
  let resp = '';

  if (!email || !senha) {
    resp = 'Por favor, preencha todos os campos!';
  } else {
    let newId = id;
    id++;
    let newUser = { id: newId, email, senha, admin };
    users.push(newUser);
    console.table(users);

    resp = 'Usuário criado com sucesso!';
  }
  return resp;
};

console.log(create('gui@', 123456));
// console.log(create('kinha@', 123456, true));
// console.log(create('lilica@', 123456, true));

// console.log(users);

// 2-Listar usuários em formato de tabela;
// let index = () => console.table(users);
// index();

// // 3-Buscar um usuário por id;
// let findByPk = (id) => {
//   let findUserId = users.find((user) => {
//     return user.id == id;
//   });

//   if (findUserId) {
//     console.table(findUserId);
//   } else {
//     console.log('Id não localizado.');
//   }
// };
// findByPk(20);

// 4-Login onde verifica se email e senha informadas estão corretas com algum usuário da lista
// deve retornar uma mensagem de "usuario conectado" ou "usuário ou senha incorreto";

// let login = (email, senha) => {
//   const userEmail = users.find((user) => user.email == email);
//   const userIndex = users.indexOf(userEmail);
//   if (userEmail) {
//     const userPassword = users[userIndex].senha == senha;
//     if (userPassword) {
//       console.log(`Usuário ${email} conectado!`);
//     } else {
//       console.log('Usuário ou senha incorreto.');
//     }
//   } else {
//     console.log('Usuário ou senha incorreto.');
//   }
// };

// login('kinha@', 123456);

// 5-Excluir usuário por id;
// let destroy = (id) => {
//   let index = users.findIndex((user) => user.id == id);

//   if (index === -1) {
//     console.log('Usuário inexistente. Não foi possível excluir.');
//   } else {
//     console.log(
//       `Usuário ${users[index].nome} com id ${users[index].id}, excluído com sucesso!`
//     );
//     users.splice(index, 1);
//     console.table(users);
//   }
// };

// destroy(3);

// console.log(create('murilo@', 123456, true)); // verificando se ao excluir o 3 (acima) ele ia criar agora o 4 ou o 3. Criou o 4 \o/
