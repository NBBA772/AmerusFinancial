import { p as prisma } from './nitro/node-server.mjs';

async function createQuestion(data, authorId) {
  return await prisma.question.create({
    data: {
      authorId,
      title: data.title,
      description: data.description
    }
  });
}
async function findQuestion(id) {
  return await prisma.question.findUnique({
    where: {
      id
    },
    include: {
      answers: true
    }
  });
}
async function createAnswer(data, authorId) {
  return await prisma.answer.create({
    data: {
      authorId,
      questionId: data.questionId,
      text: data.text
    }
  });
}
async function searchQuestions(query) {
  return await prisma.question.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query
          }
        },
        {
          description: {
            contains: query
          }
        }
      ]
    }
  });
}
async function editQuestion(question) {
  return await prisma.question.update({
    where: {
      id: question.id
    },
    data: {
      title: question.title,
      description: question.description
    }
  });
}
async function deleteQuestion(questionId) {
  return await prisma.question.delete({
    where: {
      id: questionId
    }
  });
}

export { createQuestion as a, createAnswer as c, deleteQuestion as d, editQuestion as e, findQuestion as f, searchQuestions as s };
//# sourceMappingURL=askJackRespository.mjs.map
