// 1-Salvar um novo aluno;

const students = [];

let id = 1;

let create = (nome, genero, dataDeNascimento, turma, curso = '') => {
  let resp = '';

  if (!nome || !genero || !dataDeNascimento || !turma) {
    resp = 'Por favor, preencha todos os campos!';
  } else {
    let newId = id;
    id++;
    let newStudent = {
      id: newId,
      nome,
      genero,
      dataDeNascimento: new Date(dataDeNascimento),
      turma,
      curso,
    };

    students.push(newStudent);
    console.table(students);

    resp = 'Estudante criado com sucesso!';
  }
  return resp;
};

console.log(
  create(
    'Erika',
    'Feminino',
    'Sat Aug 20 1994 19:39:13 GMT-0300 (Brasilia Standard Time)',
    'B',
    'Full Stack'
  )
);
console.log(
  create(
    'Murilo',
    'Masculino',
    'Sat Nov 29 1997 19:39:13 GMT-0300 (Brasilia Standard Time)',
    'B',
    'Full Stack'
  )
);

// 2-Listar estudantes em formato de tabela;
let index = () => console.table(students);
index();

// // 3-Buscar um usuário por id;
let findByPk = (id) => {
  let findStudentById = students.find((student) => {
    return student.id == id;
  });

  if (findStudentById) {
    console.table(findStudentById);
  } else {
    console.log('Id não localizado.');
  }
};
findByPk(2);

// 4 - Editar os dados de um aluno específico

let update = (id, nome, genero, dataDeNascimento, turma, curso = '') => {
  let student = students.find((student) => student.id === id);

  if (!student) return 'Estudante não encontrado';

  const index = students.indexOf(student);

  if (!nome || !genero || !dataDeNascimento || !turma)
    return 'Por favor, preencha todos os campos!';

  student = {
    id,
    nome,
    genero,
    dataDeNascimento,
    turma,
    curso,
  };
  students.splice(index, 1, student);
};

update(
  1,
  'Rogerinho',
  'Masculino',
  'Sat Nov 29 1997 19:39:13 GMT-0300 (Brasilia Standard Time)',
  'B',
  'Android'
);

// 5-Excluir usuário por id;
let destroy = (id) => {
  let index = students.findIndex((student) => student.id == id);

  if (index === -1) {
    console.log('Estudante inexistente. Não foi possível excluir.');
  } else {
    console.log(
      `Estudante ${students[index].nome} com id ${students[index].id}, excluído com sucesso!`
    );
    students.splice(index, 1);
    console.table(students);
  }
};

destroy(1);
